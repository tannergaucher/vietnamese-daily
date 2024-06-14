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
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const openai_1 = __importDefault(require("openai"));
const generated_1 = require("./generated");
functions.cloudEvent("createConversationQuiz", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationId, assistantId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const prisma = new generated_1.PrismaClient();
    const openai = new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const response = yield createConversationQuiz({
        conversationId,
        assistantId,
        prisma,
        openai,
    });
    return response;
}));
function createConversationQuiz(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationId, prisma, openai, }) {
        // const conversation = await prisma.conversation.findUniqueOrThrow({
        //   where: {
        //     id: conversationId,
        //   },
        //   select: {
        //     title: true,
        //     situation: true,
        //     dialog: true,
        //   },
        // });
        // // Write conversation data to a local JSON file
        // const conversationData = JSON.stringify(conversation);
        // const filePath = "./conversation.json";
        // fs.writeFileSync(filePath, conversationData);
        // const file = await openai.files.create({
        //   file: fs.createReadStream(filePath),
        //   purpose: "assistants",
        // });
        // console.log(file, "file");
        // const assistant = await openai.beta.assistants.create({
        //   name: "Vietnamese Conversation Quiz Assistant",
        //   instructions: "Create a quiz based on a Vietnamese conversation",
        //   model: "gpt-3.5-turbo",
        //   tools: [
        //     {
        //       type: "file_search",
        //     },
        //   ],
        // });
        // console.log(assistant, "assistant");
        // const thread = await openai.beta.threads.create({
        //   messages: [
        //     {
        //       role: "assistant",
        //       content:
        //         "You are creating content for a language learning application. You have a conversation between two people in Vietnamese. You want to create a quiz based on the conversation. The conversation is attached here as a file. Please create a quiz based on the conversation.",
        //       attachments: [
        //         {
        //           file_id: file.id,
        //           tools: [{ type: "file_search" }],
        //         },
        //       ],
        //     },
        //   ],
        // });
        // console.log(thread, "thread");
        // // now run the thread
        // const completion = await openai.beta.threads.runs.create(thread.id, {
        //   model: "gpt-3.5-turbo",
        //   assistant_id: assistant.id,
        // });
        // heres the thread run id: run_gz8CMYwp4Akvp5vT2HQ3JOqd
        // how to get the data of the run?
        // get the run data
        const threadMessagesList = yield openai.beta.threads.messages.list("thread_JbdCs5CRCrerznESs5UMBREX");
        const quizData = threadMessagesList.data
            .map((message) => message.content)
            .map((content) => JSON.stringify(content[0].text, null, 2));
        const parsedQuizData = quizData.map((data) => JSON.parse(data));
        const formattedQuizData = parsedQuizData.map((data) => JSON.stringify(data, null, 2).replace(/\\n/g, " "));
        const quizFilePath = "./quiz.json";
        fs_1.default.writeFileSync(quizFilePath, JSON.stringify(formattedQuizData, null, 2));
    });
}
exports.createConversationQuiz = createConversationQuiz;
