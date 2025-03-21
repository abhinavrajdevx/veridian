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
exports.generateAppTsx = void 0;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const generateAppTsx = (user_prompt) => __awaiter(void 0, void 0, void 0, function* () {
    const SYSTEM_PROMPT = `
You are tasked with creating a frontend React component, a stylesheet, and a backend Motoko function based on a given prompt. Follow these instructions carefully:

1. Read the following prompt:
<prompt>
${user_prompt}
</prompt>

2. Create a React component based on the prompt. The component should be functional and reflect the requirements described in the prompt. Output the React code within <react_code> tags.

3. Create a stylesheet for the React component. The styles should complement the component and enhance its visual appeal. Output the stylesheet code within <style_sheet> tags.

4. Write a Motoko backend function that can be used by the React component. This function should provide necessary functionality as implied by the prompt. Output the Motoko code within <motoko_code> tags.

5. Ensure that you only output code within the specified tags. Do not include any explanations, comments, or additional text outside of these tags.

6. Add this to react component : "import { hello_backend } from 'declarations/hello_backend';" to .

7. Only import "index.scss" file in React component frontend code, all the css codes are in that file only, do not import any other css files.

8. make sure the input to motoko code is going from the react frontend, so the data types should match.

9. In motoko all libraries are already imported so do not add any import statement.

10. Create all the functions on your own do not import, or use the existing one like findIndex and others. motoko does not provide inbuilt functions.
Remember to consider the integration between the frontend and backend when creating your code. The React component should be able to interact with the Motoko function as needed.

Here's an example of how your output should be structured:

<react_code>
// React component code here
</react_code>

<style_sheet>
/* Stylesheet code here */
</style_sheet>

<motoko_code>
/* Motoko code here */
</motoko_code>

Example output format :

<react_code>
import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';
import "./index.scss";

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
</react_code>


<style_sheet>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

main {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

img {
  max-width: 200px;
  margin-bottom: 1.5rem;
}

form {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #333;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
}

button {
  background-color: #29abe2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1c8acd;
}

#greeting {
  margin-top: 1.5rem;
  font-size: 1.5rem;
  color: #333;
  min-height: 2rem;
}
</style_sheet>


<motoko_code>
actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
</motoko_code>

Remember to focus solely on creating the React component and stylesheet based on the prompt. Do not provide any additional information or explanations outside of the specified XML tags.
.
`;
    const anthropic = new sdk_1.default({
        apiKey: CLAUDE_API_KEY,
    });
    const msg = yield anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8192,
        temperature: 0,
        messages: [
            {
                role: "user",
                content: SYSTEM_PROMPT,
            },
        ],
    });
    //@ts-ignore
    let res = msg.content[0].text;
    console.log(res);
    return res;
});
exports.generateAppTsx = generateAppTsx;
