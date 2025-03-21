import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { writenewChanges } from "./utils/file_systems";
import { generateAppTsx } from "./ai/generateAppTsx";
import { deployDfxCommand } from "./utils/dfx_commands";
import {
  motokoParser,
  reactCodeParser,
  styleSheetparser,
} from "./ai/responseParser";
import { createfreshDfxproject } from "./utils/createfreshDfxproject";
import { config } from "dotenv";

// Load environment variables
dotenv.config();
config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/veridian/api/generate", async (req: any, res: any) => {
  const { user_prompt } = req.body;
  console.log("received");
  // await createfreshDfxproject();`
  const ai_res = await generateAppTsx(user_prompt);
  const react_code = reactCodeParser(ai_res);
  const style_sheet = styleSheetparser(ai_res);
  const motoko_code = motokoParser(ai_res);
  await writenewChanges(react_code, style_sheet, motoko_code);
  const output = await deployDfxCommand();
  //@ts-ignore
  res.json({ user_prompt, output: JSON.stringify(output) });
});

// Start server
app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
