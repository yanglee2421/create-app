// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  copyFile,
  readFile,
  access,
  readdir,
  writeFile,
  constants,
  stat,
} from "node:fs/promises";

// Prompt Imports
import prompts from "prompts";

init();

async function init() {
  const answer = await prompt();
  copyDir(answer);
}

function prompt() {
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

async function copyDir(params: CopyDirParams) {
  // ** Params
  const { projectName } = params;

  // Get filenames
  const [inputBasePath, outputBasePath] = toIoPath(params);
  const files = await readdir(inputBasePath);

  // Copy Files
  for (const file of files) {
    const input = resolve(inputBasePath, file);
    const src = await stat(input);
    const isFile = src.isDirectory();
    if (isFile) {
      copyDir();
    }

    const output = resolve(outputBasePath, file);
    await copyFile(input, output);
  }

  // Package.json
  const packageJsonPath = resolve(outputBasePath, "package.json");
  const prevJson = await readFile(packageJsonPath, { encoding: "utf-8" });
  const packageData = JSON.parse(prevJson);
  packageData.name = projectName;
  const nextJson = JSON.stringify(packageData);
  await writeFile(packageJsonPath, nextJson, { encoding: "utf-8", flag: "w" });
}
interface CopyDirParams {
  projectName: string;
  framework: string;
}

function toIoPath(params: ToIoPathParams): [string, string] {
  // ** Params
  const { projectName, framework } = params;

  const __dirname = getDirname();
  const inputBasePath = resolve(__dirname, "../templates");
  const input = resolve(inputBasePath, framework);

  const output = resolve(process.cwd(), projectName);
  return [input, output];
}
interface ToIoPathParams {
  projectName: string;
  framework: string;
}

function getDirname() {
  return fileURLToPath(dirname(import.meta.url));
}

function getChoices(): prompts.Choice[] {
  return [
    {
      title: "React MUI",
      value: "react-mui",
      description: "React + MUI",
    },
    {
      title: "React CRX",
      value: "react-crx",
      description: "React + CRX",
    },
    {
      title: "Vue Wordpress",
      value: "vue-wordpress",
      description: "Vue Wordpress",
    },
  ];
}
