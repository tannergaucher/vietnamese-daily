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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversationTypeFromEnum = exports.CONVERSATION_SITUATION_TYPES = exports.parseCloudEventData = exports.Topic = exports.functions = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
exports.functions = functions;
var Topic;
(function (Topic) {
    Topic["CreateConversationImage"] = "create-conversation-image";
    Topic["CreateConversationSituation"] = "create-conversation-situation";
    Topic["CreateDialog"] = "create-dialog";
    Topic["CreateDialogAudio"] = "create-dialog-audio";
    Topic["CreateWord"] = "create-word";
    Topic["CreateWordAudio"] = "create-word-audio";
    Topic["FetchConversationDialogsForCreatingAudio"] = "fetch-conversation-dialogs-for-creating-audio";
    Topic["FetchSituationForCreatingDialog"] = "fetch-situation-for-creating-dialog";
    Topic["FetchDialogWordsForCreating"] = "fetch-dialog-words-for-creating";
    Topic["FetchUsersForDailyEmail"] = "fetch-users-for-daily-email";
    Topic["IndexContent"] = "index-content";
    Topic["SendDailyEmail"] = "send-daily-email";
    Topic["SendConfirmationEmail"] = "send-confirmation-email";
})(Topic || (exports.Topic = Topic = {}));
function parseCloudEventData({ cloudEvent, }) {
    var _a, _b;
    if (!((_b = (_a = cloudEvent.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.data)) {
        throw new Error("Message data is required");
    }
    return JSON.parse(Buffer.from(cloudEvent.data.message.data, "base64").toString("utf8"));
}
exports.parseCloudEventData = parseCloudEventData;
exports.CONVERSATION_SITUATION_TYPES = [
    "AT_THE_CAFE",
    "AT_THE_RESTAURANT",
    "AT_THE_STREET_FOOD_VENDOR_STALL",
    "AT_THE_MARKET",
    "ASKING_A_LOCAL_FOR_DIRECTIONS",
    "A_HEALTH_RELATED_SITUATION",
    "AN_EMERGENCY_SITUATION",
    "AT_THE_HOTEL",
    "SHOPPING_AT_A_STORE",
];
function getConversationTypeFromEnum(type) {
    switch (type) {
        case "AT_THE_RESTAURANT":
            return "at the restaurant";
        case "AT_THE_CAFE":
            return "at the cafe";
        case "AT_THE_STREET_FOOD_VENDOR_STALL":
            return "at the street food vendor stall";
        case "AT_THE_MARKET":
            return "at the market";
        case "ASKING_A_LOCAL_FOR_DIRECTIONS":
            return "asking a local for directions";
        case "A_HEALTH_RELATED_SITUATION":
            return "a health related situation";
        case "AN_EMERGENCY_SITUATION":
            return "an emergency situation";
        case "AT_THE_HOTEL":
            return "at the hotel";
        case "SHOPPING_AT_A_STORE":
            return "shopping at a store";
    }
}
exports.getConversationTypeFromEnum = getConversationTypeFromEnum;
