import { executeCommand } from "./dfx_commands";

const path = require("path");

// Function to execute the dfx command with interactive selections
export async function createfreshDfxproject() {
  try {
    const currentDir = process.cwd();
    const project_dir = path.join(currentDir, "..", "project");
    await executeCommand("rm -rf hello", project_dir);
    await executeCommand(
      "dfx new hello --type motoko --frontend react",
      project_dir
    );
  } catch (e) {
    console.log(e);
  }
}
