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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typechat_1 = require("typechat");
const pubsub_1 = require("@google-cloud/pubsub");
const functions = __importStar(require("@google-cloud/functions-framework"));
const generated_1 = require("./generated");
functions.cloudEvent("createConversationSituation", () => __awaiter(void 0, void 0, void 0, function* () {
    const model = (0, typechat_1.createLanguageModel)(process.env);
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    const response = yield createConversationSituation({ prisma, model, pubsub });
    return response;
}));
function createConversationSituation(_a) {
    return __awaiter(this, arguments, void 0, function* ({ prisma, model, pubsub, }) {
        const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "conversationSituation.ts"), "utf-8");
        const translator = (0, typechat_1.createJsonTranslator)(model, schema, "ConversationSituationResponse");
        const prevConversations = yield prisma.conversationSituation.findMany();
        const conversationSituationTypes = [
            "at the restaurant",
            "at the cafe",
            "at the street food vendor stall",
            "at the market",
            "asking a local for directions",
            "a health related situation",
            "an emergency situation",
            "at the hotel",
            "shopping at a store",
        ];
        const randomIndex = Math.floor(Math.random() * conversationSituationTypes.length);
        const conversationSituationType = conversationSituationTypes[randomIndex];
        const response = yield translator.translate(`Create a new conversation situation for an application we are building to help me practice Vietnamese language. The application will generate a conversation dialog based on the situation. The conversation situation should take place in the the the context of the following situation: ${conversationSituationType}. The conversation situation should be a short description of a scenario that is likely to happen in the course of a normal day in Vietnam. For example, for type: at the restaurant, the text could be something like: ordering phở chiên phồng from a street vendor in Hanoi. The conversation situation should be in English. The conversation situation should be unique and not a duplicate of any existing conversation situation. Here are the previously created conversation situations. Please do not repeat these! ${prevConversations
            .map((c) => c.text)
            .join(", ")}.`);
        if (response.success) {
            yield prisma.conversationSituation
                .create({
                data: {
                    text: response.data.text,
                    type: conversationSituationType,
                },
            })
                .catch(() => {
                console.log("collision on text, trying again");
                pubsub.topic("create-conversation-situation").publishMessage({});
            });
        }
    });
}
exports.createConversationSituation = createConversationSituation;
