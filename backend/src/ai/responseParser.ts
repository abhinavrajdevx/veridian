export const reactCodeParser = (analysisText: string) => {
  const startIndex =
    analysisText.indexOf("<react_code>") + "<react_code>".length;
  const endIndex = analysisText.indexOf("</react_code>");
  const chatString = analysisText.substring(startIndex, endIndex).trim();

  return chatString;
};

export const styleSheetparser = (analysisText: string) => {
  const startIndex =
    analysisText.indexOf("<style_sheet>") + "<style_sheet>".length;
  const endIndex = analysisText.indexOf("</style_sheet>");
  const chatString = analysisText.substring(startIndex, endIndex).trim();

  return chatString;
};

export const motokoParser = (analysisText: string) => {
  const startIndex =
    analysisText.indexOf("<motoko_code>") + "<motoko_code>".length;
  const endIndex = analysisText.indexOf("</motoko_code>");
  const chatString = analysisText.substring(startIndex, endIndex).trim();

  return chatString;
};
