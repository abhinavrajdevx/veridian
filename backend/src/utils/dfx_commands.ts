const { exec } = require("child_process");
const path = require("path");

export function executeCommand(command: any, cwd: any) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error: any, stdout: any, stderr: any) => {
      if (error) {
        reject(`Error: ${error.message}`);
        return;
      }

      // Include both stdout and stderr in the result
      resolve({ stdout, stderr });
    });
  });
}

export async function deployDfxCommand() {
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
    const output = await executeCommand(command, targetDir);

    console.log("Command output:");
    console.log(output);
    //@ts-ignore
    return output.stderr;
  } catch (error) {
    console.error("Failed to execute command:", error);
  }
}

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
