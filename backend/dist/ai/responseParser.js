"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motokoParser = exports.styleSheetparser = exports.reactCodeParser = void 0;
const reactCodeParser = (analysisText) => {
    const startIndex = analysisText.indexOf("<react_code>") + "<react_code>".length;
    const endIndex = analysisText.indexOf("</react_code>");
    const chatString = analysisText.substring(startIndex, endIndex).trim();
    return chatString;
};
exports.reactCodeParser = reactCodeParser;
const styleSheetparser = (analysisText) => {
    const startIndex = analysisText.indexOf("<style_sheet>") + "<style_sheet>".length;
    const endIndex = analysisText.indexOf("</style_sheet>");
    const chatString = analysisText.substring(startIndex, endIndex).trim();
    return chatString;
};
exports.styleSheetparser = styleSheetparser;
const motokoParser = (analysisText) => {
    const startIndex = analysisText.indexOf("<motoko_code>") + "<motoko_code>".length;
    const endIndex = analysisText.indexOf("</motoko_code>");
    const chatString = analysisText.substring(startIndex, endIndex).trim();
    return chatString;
};
exports.motokoParser = motokoParser;
