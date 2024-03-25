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
exports.createWordAudio = void 0;
var fs = require("fs");
var util = require("util");
var functions = require("@google-cloud/functions-framework");
var TextToSpeech = require("@google-cloud/text-to-speech");
var text_to_speech_1 = require("@google-cloud/text-to-speech");
var storage_1 = require("@google-cloud/storage");
var generated_1 = require("./generated");
functions.cloudEvent("createWordAudio", function (cloudEvent) { return __awaiter(void 0, void 0, void 0, function () {
    var messageData, parsedData, prisma, textToSpeech, storage;
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
                textToSpeech = new text_to_speech_1.TextToSpeechClient();
                storage = new storage_1.Storage({
                    projectId: "daily-vietnamese",
                    keyFilename: "./service-account.json",
                });
                return [4 /*yield*/, createWordAudio({
                        vietnamese: parsedData.vietnamese,
                        prisma: prisma,
                        textToSpeech: textToSpeech,
                        storage: storage,
                    })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
function createWordAudio(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var maleResponse, writeFile, maleAudioFile, bucketName, bucket, maleGcsUri, femaleResponse, femaleAudioFile, femaleGcsUri;
        var vietnamese = _b.vietnamese, prisma = _b.prisma, textToSpeech = _b.textToSpeech, storage = _b.storage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, textToSpeech.synthesizeSpeech({
                        input: { text: vietnamese },
                        voice: {
                            languageCode: "vi-VN",
                            ssmlGender: TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.MALE,
                        },
                        audioConfig: {
                            sampleRateHertz: 24000,
                            audioEncoding: TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
                        },
                    })];
                case 1:
                    maleResponse = (_c.sent())[0];
                    if (!maleResponse.audioContent) {
                        throw new Error("No male audio content returned");
                    }
                    writeFile = util.promisify(fs.writeFile);
                    maleAudioFile = "".concat(vietnamese, ".wav");
                    writeFile(maleAudioFile, maleResponse.audioContent, "binary");
                    bucketName = "word-audio";
                    bucket = storage.bucket(bucketName);
                    return [4 /*yield*/, bucket.upload(maleAudioFile, {
                            destination: "male/".concat(vietnamese, ".wav"),
                        })];
                case 2:
                    _c.sent();
                    maleGcsUri = "https://storage.googleapis.com/".concat(bucketName, "/male/").concat(maleAudioFile);
                    return [4 /*yield*/, prisma.word.update({
                            where: {
                                vietnamese: vietnamese,
                            },
                            data: {
                                maleSrc: maleGcsUri,
                            },
                        })];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, textToSpeech.synthesizeSpeech({
                            input: { text: vietnamese },
                            voice: {
                                languageCode: "vi-VN",
                                ssmlGender: TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE,
                            },
                            audioConfig: {
                                sampleRateHertz: 24000,
                                audioEncoding: TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
                            },
                        })];
                case 4:
                    femaleResponse = (_c.sent())[0];
                    if (!femaleResponse.audioContent) {
                        throw new Error("No female audio content returned");
                    }
                    femaleAudioFile = "".concat(vietnamese, ".wav");
                    writeFile(femaleAudioFile, femaleResponse.audioContent, "binary");
                    return [4 /*yield*/, bucket.upload(femaleAudioFile, {
                            destination: "female/".concat(vietnamese, ".wav"),
                        })];
                case 5:
                    _c.sent();
                    femaleGcsUri = "https://storage.googleapis.com/".concat(bucketName, "/female/").concat(femaleAudioFile);
                    return [4 /*yield*/, prisma.word.update({
                            where: {
                                vietnamese: vietnamese,
                            },
                            data: {
                                femaleSrc: femaleGcsUri,
                            },
                        })];
                case 6:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createWordAudio = createWordAudio;
