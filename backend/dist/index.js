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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const file_systems_1 = require("./utils/file_systems");
const generateAppTsx_1 = require("./ai/generateAppTsx");
const dfx_commands_1 = require("./utils/dfx_commands");
const responseParser_1 = require("./ai/responseParser");
// Load environment variables
dotenv_1.default.config();
const PORT = 3005;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/generate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_prompt } = req.body;
    console.log("received");
    // await createfreshDfxproject();
    const ai_res = yield (0, generateAppTsx_1.generateAppTsx)(user_prompt);
    const react_code = (0, responseParser_1.reactCodeParser)(ai_res);
    const style_sheet = (0, responseParser_1.styleSheetparser)(ai_res);
    const motoko_code = (0, responseParser_1.motokoParser)(ai_res);
    yield (0, file_systems_1.writenewChanges)(react_code, style_sheet, motoko_code);
    const output = yield (0, dfx_commands_1.deployDfxCommand)();
    //@ts-ignore
    res.json({ user_prompt, output: JSON.stringify(output) });
}));
// Start server
app.listen(PORT, () => {
    console.log(`App running at ${PORT}`);
});
