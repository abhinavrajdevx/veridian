import React from "react";

const FormattedOutput = ({ rawData }: { rawData: string }) => {
  // Process the raw data
  const processedData = rawData
    // Replace escaped newlines with actual newline characters
    .replace(/\\n/g, "\n")
    // Remove the outer quotes if present
    .replace(/^"|"$/g, "");

  // Split into lines for rendering
  const lines = processedData.split("\n");

  return (
    <div className="w-full max-w-4xl bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <div className="p-4 bg-gray-800 text-white font-mono text-sm">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-2">Terminal Output</span>
        </div>
        <div className="bg-black p-4 rounded">
          {lines.map((line, index) => {
            // Calculate the indentation level
            const indentMatch = line.match(/^(\s+)/);
            const indentLevel = indentMatch ? indentMatch[0].length : 0;

            // Handle URL lines specially
            const isUrl = line.includes("http://");

            return (
              <div
                key={index}
                className={`${isUrl ? "text-blue-400" : "text-green-400"}`}
                style={{
                  paddingLeft: `${indentLevel * 0.5}rem`,
                  marginBottom: "0.25rem",
                }}
              >
                {line || " "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormattedOutput;
