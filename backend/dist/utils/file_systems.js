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
exports.writenewChanges = writenewChanges;
const fs = require("fs");
const path = require("path");
const motoko_all_imports = `
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Char "mo:base/Char";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Float "mo:base/Float";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Int8 "mo:base/Int8";
import Int16 "mo:base/Int16";
import Int32 "mo:base/Int32";
import Int64 "mo:base/Int64";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat16 "mo:base/Nat16";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import Option "mo:base/Option";
import Prelude "mo:base/Prelude";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Trie "mo:base/Trie";`;
const targetDir = path.join(process.cwd(), "..", "project", "hello", "src", "hello_frontend", "src");
const targetDirMotoko = path.join(process.cwd(), "..", "project", "hello", "src", "hello_backend");
const targetFile = path.join(targetDir, "App.jsx");
const targetFileCSS = path.join(targetDir, "index.scss");
const target_motoko_file = path.join(targetDirMotoko, "main.mo");
function writenewChanges(react_code, css_code, motoko_code) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            process.chdir(targetDir);
            console.log(`Current working directory: ${process.cwd()}`);
            fs.writeFileSync(targetFile, react_code);
            fs.writeFileSync(targetFileCSS, css_code);
            process.chdir(targetDirMotoko);
            console.log(`Current working directory: ${process.cwd()}`);
            fs.writeFileSync(target_motoko_file, motoko_all_imports + "\n" + "\n" + motoko_code);
            console.log("Operation completed successfully!");
        }
        catch (error) {
            console.error("An error occurred:", error.message);
        }
    });
}
