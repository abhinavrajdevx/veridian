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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createfreshDfxproject = createfreshDfxproject;
const dfx_commands_1 = require("./dfx_commands");
const path = require("path");
// Function to execute the dfx command with interactive selections
function createfreshDfxproject() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentDir = process.cwd();
            const project_dir = path.join(currentDir, "..", "project");
            yield (0, dfx_commands_1.executeCommand)("rm -rf hello", project_dir);
            yield (0, dfx_commands_1.executeCommand)("dfx new hello --type motoko --frontend react", project_dir);
        }
        catch (e) {
            console.log(e);
        }
    });
}
