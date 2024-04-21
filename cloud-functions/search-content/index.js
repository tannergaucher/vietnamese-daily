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
exports.searchContent = void 0;
const functions = __importStar(require("@google-cloud/functions-framework"));
const algoliasearch_1 = __importDefault(require("algoliasearch"));
functions.http("searchContent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    if (req.method === "OPTIONS") {
        // Pre-flight request. Reply successfully:
        res.status(204).send("Preflight success");
        return;
    }
    const { search } = req.query;
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
        throw new Error("Algolia credentials are missing");
    }
    const algolia = (0, algoliasearch_1.default)(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_API_KEY);
    const content = yield searchContent({ search, algolia });
    res.status(200).send(content);
}));
function searchContent(_a) {
    return __awaiter(this, arguments, void 0, function* ({ search, algolia, }) {
        if (!search) {
            return [];
        }
        const index = algolia.initIndex("dev_daily_vietnamese");
        const searchResponse = yield index.search(search);
        return searchResponse.hits;
    });
}
exports.searchContent = searchContent;
