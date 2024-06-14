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
exports.createConversationQuiz = void 0;
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const generated_1 = require("./generated");
functions.cloudEvent("createConversationQuiz", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const prisma = new generated_1.PrismaClient();
    const response = yield createConversationQuiz({
        conversationId,
        prisma,
    });
    return response;
}));
function createConversationQuiz(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationId, prisma, }) {
        // query the conversation by id
        const conversation = yield prisma.conversation.findUnique({
            where: {
                id: conversationId,
            },
            select: {
                title: true,
                situation: true,
                dialog: true,
            },
        });
        console.log(conversation);
        // take that conversation, write to a json file
        // attach that json file to the chatgpt assistant conversation
        // prompt the assitant to create a quiz based on the conversation content
        // save the quiz to the database
    });
}
exports.createConversationQuiz = createConversationQuiz;
