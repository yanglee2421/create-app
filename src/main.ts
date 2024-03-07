#!/usr/bin/env node

import { resolve } from "node:path";
import spawn from "cross-spawn";
import * as kolorist from "kolorist";
import minimist from "minimist";
import prompts from "prompts";
import { copyDir } from "./copyDir";
import { editGitignore } from "./editGitignore";
import { editPackage } from "./editPackage";
import { toIoPath } from "./toIoPath";

const args = minimist(process.argv);
console.log(args);

const buffer = spawn.sync("node", ["-v"]);

if (buffer.error) {
  console.log(kolorist.red(buffer.error.message));
}

console.log(kolorist.yellow(buffer.stdout.toString()));

void (async () => {
  try {
    const answer = await prompt();
    const output = await handleFile(answer);

    console.log(kolorist.blue(output));
  } catch (error) {
    if (error instanceof Error) {
      console.log(kolorist.red(error.message));
    }
  }
})();

function prompt(): Promise<Answer> {
  return prompts(
    [
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
    ],
    {
      onCancel() {
        throw new Error("Canceled");
      },
      onSubmit(prompt, answer) {
        void prompt;
        console.log(kolorist.green(answer));
      },
    },
  );
}

export interface Answer {
  projectName: string;
  framework: string;
}

async function handleFile(params: Answer) {
  const { projectName } = params;

  const [input, output] = toIoPath(params);

  await copyDir({ input, output });

  editPackage({
    jsonPath: resolve(output, "package.json"),
    name: projectName,
  });

  editGitignore({
    filePath: resolve(output, "_gitignore"),
  });

  return output;
}

function getChoices(): prompts.Choice[] {
  return [
    {
      title: "React + Antd",
      value: "react-antd",
      description: "React with Ant Design",
    },
    {
      title: "React + CRX",
      value: "react-crx",
      description: "React for Google Chrome CRX",
    },
    {
      title: "react + mui",
      value: "react-mui",
      description: "React with Material UI",
    },
    {
      title: "Vue + Element Plus",
      value: "vue-ele",
      description: "Vue with Element Plus",
    },
  ];
}
