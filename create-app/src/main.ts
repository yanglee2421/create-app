// NodeJs Imports
import { resolve } from "node:path";

// Prompt Imports
import prompts from "prompts";

// Utils Imports
import { copyDir } from "./copy-dir";
import { editPackage } from "./edit-package";
import { toIoPath } from "./to-io-path";

init();

async function init() {
  const answer = await prompt();
  handleFile(answer);
}

function prompt(): Promise<Answer> {
  return prompts([
    {
      type: "select",
      name: "framework",
      message: "select a framework",
      choices: getChoices(),
      initial: 0,
    },
    {
      type: "text",
      name: "projectName",
      message: "type a project name",
      initial: "my-app",
    },
  ]);
}
export interface Answer {
  projectName: string;
  framework: string;
}

async function handleFile(params: Answer) {
  // ** Params
  const { projectName } = params;

  // Get IO-Path With Answer
  const [input, output] = toIoPath(params);

  // Copy Files With IO-Path
  await copyDir({ input, output });

  // Edit Package.json
  const jsonPath = resolve(output, "package.json");
  editPackage({ jsonPath, name: projectName });
}

function getChoices(): prompts.Choice[] {
  return [
    {
      title: "react + mui",
      value: "react-mui",
      description: "React with mui",
    },
    {
      title: "react + antd",
      value: "react-antd",
      description: "React with ant design",
    },
    {
      title: "react + crx",
      value: "react-crx",
      description: "React for google chrome crx",
    },
    {
      title: "vue + wordpress",
      value: "vue-wordpress",
      description: "Vue for wordpress plugins",
    },
  ];
}
