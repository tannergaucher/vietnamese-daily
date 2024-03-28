"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDialog = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const pubsub_1 = require("@google-cloud/pubsub");
const functions = __importStar(require("@google-cloud/functions-framework"));
const typechat_1 = require("typechat");
const generated_1 = require("./generated");
functions.cloudEvent("createDialog", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_b = (_a = cloudEvent.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.data)) {
        throw new Error("Message data is required");
    }
    const messageData = Buffer.from(cloudEvent.data.message.data, "base64").toString("utf8");
    const parsedData = JSON.parse(messageData);
    const model = (0, typechat_1.createLanguageModel)(process.env);
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    const response = yield createDialog({
        situationId: parsedData.situationId,
        model,
        prisma,
        pubsub,
    });
    return response;
}));
function createDialog({ situationId, model, prisma, pubsub, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = fs.readFileSync(path.join(__dirname, "dialogSchema.ts"), "utf8");
        const translator = (0, typechat_1.createJsonTranslator)(model, schema, "CreateDialogResponse");
        const conversationSituation = yield prisma.conversationSituation.findUniqueOrThrow({
            where: {
                id: situationId,
            },
            select: {
                text: true,
            },
        });
        const response = yield translator.translate(`Help me practice conversational Vietnamese. The context of the practice conversation is ${conversationSituation.text} Please do include things like dates, times, and prices if it makes sense in the context of the dialog so we can practice useful phrases like numbers and counting.`);
        if (response.success) {
            const conversation = yield prisma.conversation.create({
                data: {
                    title: response.data.conversation.title,
                    situation: {
                        connect: {
                            id: situationId,
                        },
                    },
                    dialog: {
                        create: response.data.conversation.dialog,
                    },
                },
                include: {
                    dialog: true,
                },
            });
            pubsub
                .topic("fetch-conversation-dialogs-for-creating-audio")
                .publishMessage({
                json: {
                    conversationId: conversation.id,
                },
            });
            for (const dialog of conversation.dialog) {
                {
                    pubsub.topic("fetch-dialog-words-for-creating").publishMessage({
                        json: {
                            dialogId: dialog.id,
                        },
                    });
                }
            }
            return {
                message: "Conversation dialog created",
                conversation,
            };
        }
        throw new Error("Failed to generate conversation dialog");
    });
}
exports.createDialog = createDialog;
