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
exports.indexContent = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
const pubsub_1 = require("@google-cloud/pubsub");
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const generated_1 = require("./generated");
functions.cloudEvent("indexContent", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
        throw new Error("Algolia credentials are missing");
    }
    const { conversationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const prisma = new generated_1.PrismaClient();
    const algolia = (0, algoliasearch_1.default)(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_API_KEY);
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFilename: "./service-account.json",
    });
    yield indexContent({
        conversationId,
        prisma,
        algolia,
        pubsub,
    });
    return { conversationId };
}));
function indexContent(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationId, prisma, algolia, pubsub, }) {
        var _b, _c, _d;
        const conversation = yield prisma.conversation.findUniqueOrThrow({
            where: {
                id: conversationId,
            },
            include: {
                situation: true,
                dialog: true,
            },
        });
        const contentRecord = {
            objectID: conversation.id,
            title: conversation.title,
            date: conversation.createdAt,
            situation: (_b = conversation.situation) === null || _b === void 0 ? void 0 : _b.text,
            type: (_c = conversation.situation) === null || _c === void 0 ? void 0 : _c.type,
            imageSrc: (_d = conversation.situation) === null || _d === void 0 ? void 0 : _d.imageSrc,
            text: conversation.dialog.map((d) => d.vietnamese).join(" "),
            speakers: [...new Set(conversation.dialog.map((d) => d.speaker))],
        };
        const index = algolia.initIndex("dev_daily_vietnamese");
        index
            .saveObject(contentRecord)
            .then(({ objectID }) => {
            console.log("Saved object", objectID);
            const json = {
                conversationId,
            };
            pubsub.topic("fetch-users-for-daily-email").publishMessage({
                json,
            });
        })
            .catch((error) => {
            console.error("Error saving object", error);
        });
    });
}
exports.indexContent = indexContent;
