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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConversationQuiz = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const typechat_1 = require("typechat");
const generated_1 = require("./generated");
functions.cloudEvent("createConversationQuiz", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const prisma = new generated_1.PrismaClient();
    const model = (0, typechat_1.createLanguageModel)(process.env);
    const response = yield createConversationQuiz({
        conversationId,
        prisma,
        model,
    });
    return response;
}));
function createConversationQuiz(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationId, prisma, model, }) {
        const conversation = yield prisma.conversation.findUniqueOrThrow({
            where: {
                id: conversationId,
            },
            select: {
                title: true,
                situation: true,
                dialog: true,
            },
        });
        const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "conversationQuizSchema.ts"), "utf8");
        const translator = (0, typechat_1.createJsonTranslator)(model, schema, "CreateConversationQuizResponse");
        const conversationDialog = conversation.dialog
            .sort((a, b) => a.index - b.index)
            .map((dialog) => `${dialog.speaker}: ${dialog.vietnamese}`)
            .join("\n");
        const response = yield translator.translate(`We are creating content for a Vietnamese language learning application. Create a quiz for the following Vietnamese conversation in order to test comprehension of the material. The title is "${conversation.title}". The situation is "${conversation.situation}". The conversation dialog is:\n\n${conversationDialog} Ask four questions to test the comprehension of the conversation dialog. The questions should be in English language. The options should be in English language. The answer should be the option that represents the correct choice according to the question.`);
        if (response.success) {
            yield prisma.conversationQuiz.upsert({
                where: {
                    conversationId,
                },
                create: {
                    conversationId,
                    comprehensionSection: response.data.conversationQuiz.comprehensionQuestions,
                },
                update: {
                    comprehensionSection: response.data.conversationQuiz.comprehensionQuestions,
                },
            });
        }
    });
}
exports.createConversationQuiz = createConversationQuiz;
