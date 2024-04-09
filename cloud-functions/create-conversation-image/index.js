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
exports.createConversationImage = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
const openai_1 = __importDefault(require("openai"));
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const generated_1 = require("./generated");
functions.cloudEvent("createConversationImage", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationSituationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    const prisma = new generated_1.PrismaClient();
    const openai = new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
    yield createConversationImage({
        conversationSituationId,
        prisma,
        openai,
    });
}));
function createConversationImage(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationSituationId, prisma, openai, }) {
        const conversationSituation = yield prisma.conversationSituation.findUniqueOrThrow({
            where: {
                id: conversationSituationId,
            },
            select: {
                text: true,
                imageSrc: true,
            },
        });
        if (conversationSituation.imageSrc) {
            return;
        }
        const completion = yield openai.images.generate({
            model: "dall-e-2",
            prompt: `A vividly colorful Vietnamese folk print of the following scene: ${conversationSituation.text}`,
            n: 1,
            size: "1024x1024",
        });
        if (completion.data[0].url) {
            yield prisma.conversationSituation.update({
                where: {
                    id: conversationSituationId,
                },
                data: {
                    imageSrc: completion.data[0].url,
                },
            });
        }
    });
}
exports.createConversationImage = createConversationImage;
