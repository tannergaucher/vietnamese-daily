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
exports.sendDailyEmail = void 0;
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const generated_1 = require("./generated");
functions.cloudEvent("sendDailyEmail", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, conversationId } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY is required");
    }
    mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
    const prisma = new generated_1.PrismaClient({
        log: ["info"],
    });
    sendDailyEmail({
        email,
        conversationId,
        prisma,
        sgMail: mail_1.default,
    });
}));
function sendDailyEmail(_a) {
    return __awaiter(this, arguments, void 0, function* ({ conversationId, email, prisma, sgMail, }) {
        var _b;
        const conversation = yield prisma.conversation.findUniqueOrThrow({
            where: {
                id: conversationId,
            },
            select: {
                id: true,
                dialog: true,
                title: true,
                situation: true,
            },
        });
        const msg = {
            to: email,
            from: "tannermichaelgaucher@gmail.com",
            subject: ((_b = conversation.situation) === null || _b === void 0 ? void 0 : _b.text) || "Daily Vietnamese Conversation",
            text: conversation.dialog
                .sort((a, b) => a.index - b.index)
                .map((dialog) => dialog.vietnamese)
                .join("\n"),
            html: `
      <h1>${conversation.title}</h1>
      <a href={https://vietnamesedaily.vercel.app/conversation/${conversation.id}}>
      <button style="background-color: #3490dc; color: #fff; font-weight: bold; padding: 10px 20px; border-radius: 5px;">
        Open Conversation
      </button>
    </a>
    ${conversation.dialog
                .map((dialog) => `<p>${dialog.vietnamese}</p>`)
                .join("\n")}
    `,
        };
        try {
            yield sgMail.send(msg);
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to send email");
        }
    });
}
exports.sendDailyEmail = sendDailyEmail;
