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
exports.fetchUsersForDailyEmail = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
const pubsub_1 = require("@google-cloud/pubsub");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const generated_1 = require("./generated");
functions.cloudEvent("fetchUsersForDailyEmail", () => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new generated_1.PrismaClient();
    const pubsub = new pubsub_1.PubSub({
        projectId: "daily-vietnamese",
        keyFile: process.env.SERVICE_ACCOUNT,
    });
    yield fetchUsersForDailyEmail({
        prisma,
        pubsub,
    });
}));
function fetchUsersForDailyEmail(_a) {
    return __awaiter(this, arguments, void 0, function* ({ prisma, pubsub, }) {
        var _b;
        console.log("fetchUsersForDailyEmail");
        const startOfDay = (0, moment_timezone_1.default)().tz("Asia/Ho_Chi_Minh").startOf("day").toDate();
        const endOfDay = (0, moment_timezone_1.default)().tz("Asia/Ho_Chi_Minh").endOf("day").toDate();
        console.log(startOfDay, "startOfDay");
        console.log(endOfDay, "endOfDay");
        const conversation = yield prisma.conversation.findFirstOrThrow({
            where: {
                AND: [
                    {
                        date: {
                            gte: startOfDay,
                        },
                    },
                    {
                        date: {
                            lte: endOfDay,
                        },
                    },
                ],
            },
            select: {
                id: true,
                dialog: true,
                title: true,
                situation: true,
            },
        });
        console.log(conversation, "conversation");
        const html = `
  <h1>${conversation.title}</h1>
  <a 
  href="https://vietnamesedaily.vercel.app/conversation/${conversation.id}"
  >
  <button style="background-color: #3490dc; color: #fff; font-weight: bold; padding: 10px 20px; border-radius: 5px;">
    Open Conversation
  </button>
</a>
${conversation.dialog.map((dialog) => `<p>${dialog.vietnamese}</p>`).join("\n")}
`;
        console.log(html, "html");
        const users = yield prisma.user.findMany({
            select: {
                email: true,
            },
        });
        for (const user of users) {
            const json = {
                email: user.email,
                subject: ((_b = conversation.situation) === null || _b === void 0 ? void 0 : _b.text) || "Daily Vietnamese Conversation",
                html,
            };
            console.log(json, "json");
            pubsub.topic("send-daily-email").publishMessage({
                json,
            });
        }
    });
}
exports.fetchUsersForDailyEmail = fetchUsersForDailyEmail;
