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
exports.createConversationSituation = void 0;
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const pubsub_1 = require("@google-cloud/pubsub");
const openai_1 = __importDefault(require("openai"));
const generated_1 = require("./generated");
functions.cloudEvent("createConversationSituation", () => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    const openai = new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const response = yield createConversationSituation({
        prisma,
        openai,
        pubsub,
    });
    return response;
}));
function createConversationSituation(_a) {
    return __awaiter(this, arguments, void 0, function* ({ prisma, pubsub, openai, fromFetchFail, }) {
        const randomIndex = Math.floor(Math.random() * cloud_function_events_1.CONVERSATION_SITUATION_TYPES.length);
        const conversationSituationType = cloud_function_events_1.CONVERSATION_SITUATION_TYPES[randomIndex];
        const situationCompletion = yield openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Create a new conversation situation for an application we are building to help me practice Vietnamese language. The application will generate a conversation dialog based on the situation. The conversation situation should take place in the the the context of the following situation type: ${(0, cloud_function_events_1.getConversationTypeFromEnum)(conversationSituationType)}. The conversation situation should be a short description of a scenario that is likely to happen in the course of a normal day in Vietnam. For example, for situation type: "at the restaurant", the text could be something like: ordering phở chiên phồng from a street vendor in Hanoi. The conversation situation should be in English. The situation should only be one sentence long.`,
                },
            ],
            model: "gpt-3.5-turbo",
        });
        if (situationCompletion.choices[0].message.content) {
            const conversationSituation = yield prisma.conversationSituation
                .create({
                data: {
                    text: situationCompletion.choices[0].message.content,
                    type: conversationSituationType,
                },
            })
                .catch((error) => {
                console.error(error, "error");
                console.error("Error creating conversation situation:", error.message);
                console.error("Stack trace:", error.stack);
                throw new Error(`collision on text ${situationCompletion.choices[0].message.content} for type ${conversationSituationType}`);
            });
            if (fromFetchFail && conversationSituation) {
                const json = {
                    situationId: conversationSituation.id,
                };
                pubsub.topic("create-dialog").publishMessage({
                    json,
                });
            }
        }
    });
}
exports.createConversationSituation = createConversationSituation;
