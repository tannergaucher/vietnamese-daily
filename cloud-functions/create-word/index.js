"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWord = void 0;
var functions = require("@google-cloud/functions-framework");
var pubsub_1 = require("@google-cloud/pubsub");
var generated_1 = require("./generated");
functions.cloudEvent("createWord", function (cloudEvent) { return __awaiter(void 0, void 0, void 0, function () {
    var messageData, parsedData, prisma, pubsub;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!((_b = (_a = cloudEvent.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.data)) {
                    throw new Error("Message data is required");
                }
                messageData = Buffer.from(cloudEvent.data.message.data, "base64").toString("utf8");
                parsedData = JSON.parse(messageData);
                prisma = new generated_1.PrismaClient();
                pubsub = new pubsub_1.PubSub({
                    projectId: "daily-vietnamese",
                    keyFilename: "./service-account.json",
                });
                return [4 /*yield*/, createWord({
                        vietnamese: parsedData.vietnamese,
                        dialogId: parsedData.dialogId,
                        prisma: prisma,
                        pubsub: pubsub,
                    })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
function createWord(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var word, sanitizedVietnamese;
        var vietnamese = _b.vietnamese, dialogId = _b.dialogId, prisma = _b.prisma, pubsub = _b.pubsub;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, prisma.word.findUnique({
                        where: {
                            vietnamese: vietnamese,
                        },
                    })];
                case 1:
                    word = _c.sent();
                    if (!word) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.dialog.update({
                            where: {
                                id: dialogId,
                            },
                            data: {
                                words: {
                                    connect: {
                                        vietnamese: vietnamese,
                                    },
                                },
                            },
                        })];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    sanitizedVietnamese = vietnamese
                        .trim()
                        .toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                    if (!!word) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.word.create({
                            data: {
                                vietnamese: sanitizedVietnamese,
                                dialog: {
                                    connect: {
                                        id: dialogId,
                                    },
                                },
                            },
                        })];
                case 4:
                    _c.sent();
                    pubsub.topic("create-word-audio").publishMessage({
                        json: {
                            vietnamese: sanitizedVietnamese,
                            dialogId: dialogId,
                        },
                    });
                    _c.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.createWord = createWord;
