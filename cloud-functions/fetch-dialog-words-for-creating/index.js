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
exports.fetchDialogWordsForCreating = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
const pubsub_1 = require("@google-cloud/pubsub");
const generated_1 = require("./generated");
functions.cloudEvent("fetchDialogWordsForCreating", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_b = (_a = cloudEvent.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.data)) {
        throw new Error("Message data is required");
    }
    const messageData = Buffer.from(cloudEvent.data.message.data, "base64").toString("utf8");
    const parsedData = JSON.parse(messageData);
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    yield fetchDialogWordsForCreating({
        dialogId: parsedData.dialogId,
        prisma,
        pubsub,
    });
}));
function fetchDialogWordsForCreating(_a) {
    return __awaiter(this, arguments, void 0, function* ({ dialogId, prisma, pubsub, }) {
        const dialog = yield prisma.dialog.findUniqueOrThrow({
            where: {
                id: dialogId,
            },
        });
        const words = dialog.vietnamese.split(" ");
        for (const word of words) {
            pubsub.topic("create-word").publishMessage({
                json: {
                    vietnamese: word,
                    dialogId: dialog.id,
                },
            });
        }
    });
}
exports.fetchDialogWordsForCreating = fetchDialogWordsForCreating;
