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
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const pubsub_1 = require("@google-cloud/pubsub");
const typechat_1 = require("typechat");
const generated_1 = require("./generated");
functions.cloudEvent("createDialog", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { situationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const model = (0, typechat_1.createLanguageModel)(process.env);
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    const response = yield createDialog({
        situationId,
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
        if (response.success && response.data.conversation.dialog.length > 0) {
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
            const json = {
                conversationId: conversation.id,
            };
            pubsub
                .topic("fetch-conversation-dialogs-for-creating-audio")
                .publishMessage({
                json,
            });
            const conversationImageJson = {
                conversationSituationId: situationId,
            };
            pubsub.topic("create-conversation-image").publishMessage({
                json: conversationImageJson,
            });
            for (const dialog of conversation.dialog) {
                const json = {
                    dialogId: dialog.id,
                };
                {
                    pubsub.topic("fetch-dialog-words-for-creating").publishMessage({
                        json,
                    });
                }
            }
            return {
                message: "Conversation dialog created",
                conversation,
            };
        }
        yield prisma.conversationSituation.delete({
            where: {
                id: situationId,
            },
        });
        pubsub.topic("create-conversation-situation").publishMessage({
            json: {},
        });
        pubsub.topic("fetch-situation-for-creating-dialog").publishMessage({
            json: {},
        });
        throw new Error("Failed to generate conversation dialog");
    });
}
exports.createDialog = createDialog;
