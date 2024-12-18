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
exports.sendConfirmationEmail = void 0;
const cloud_function_events_1 = require("@functional-vietnamese/cloud-function-events");
const functions = __importStar(require("@google-cloud/functions-framework"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
functions.cloudEvent("sendConfirmationEmail", (cloudEvent) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = (0, cloud_function_events_1.parseCloudEventData)({
        cloudEvent,
    });
    if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY is required");
    }
    mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
    sendConfirmationEmail({
        email,
        sgMail: mail_1.default,
    });
}));
function sendConfirmationEmail(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, sgMail, }) {
        const msg = {
            to: email,
            from: "tannermichaelgaucher@gmail.com",
            subject: "You are now a member of Vietnamese Daily!",
            text: "and easy to do anywhere, even with Node.js",
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
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
exports.sendConfirmationEmail = sendConfirmationEmail;
