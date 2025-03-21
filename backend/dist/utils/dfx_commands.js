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
exports.executeCommand = executeCommand;
exports.deployDfxCommand = deployDfxCommand;
const { exec } = require("child_process");
const path = require("path");
function executeCommand(command, cwd) {
    return new Promise((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            // Include both stdout and stderr in the result
            resolve({ stdout, stderr });
        });
    });
}
function deployDfxCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentDir = process.cwd();
            // const project_dir = path.join(currentDir, "..", "..", "..", "hello");
            // await executeCommand("rm -rf hello", project_dir);
            // await executeCommand("rm -rf hello", project_dir);
            const targetDir = path.join(currentDir, "..", "..", "..", "hello");
            const generate_command = "dfx generate";
            const build_command = "dfx build";
            const command = "dfx deploy --yes";
            // console.log(`Current directory: ${currentDir}`);
            // console.log(`Target directory: ${targetDir}`);
            // console.log(`Executing command: ${"dfx stop"} in ${targetDir}`);
            // const output1 = await executeCommand(generate_command, targetDir);
            // const output2 = await executeCommand(build_command, targetDir);
            // await executeCommand("dfx killall", targetDir);
            // await delay(2000);
            // await executeCommand("dfx stop", targetDir);
            // await delay(2000);
            // console.log(`Executing command: ${"dfx start -c"} in ${targetDir}`);
            // executeCommand("dfx start --clean", targetDir);
            // await delay(5000);
            // await executeCommand("dfx deploy", "dfx deploy");
            const output = yield executeCommand(command, targetDir);
            console.log("Command output:");
            console.log(output);
            //@ts-ignore
            return output.stderr;
        }
        catch (error) {
            console.error("Failed to execute command:", error);
        }
    });
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
