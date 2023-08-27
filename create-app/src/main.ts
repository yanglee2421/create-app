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
  mkdir,
} from "node:fs/promises";

// Prompt Imports
import prompts from "prompts";

init();

async function init() {
  const answer = await prompt();
  handleFile(answer);
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

async function handleFile(params: HandleFileParams) {
  // ** Params
  const { projectName } = params;

  // Get filenames
  const [input, output] = toIoPath(params);

  // Copy Files
  await copyDir({ input, output });

  // Package.json
  const packageJsonPath = resolve(output, "package.json");
  const prevJson = await readFile(packageJsonPath, { encoding: "utf-8" });
  const packageData = JSON.parse(prevJson);
  packageData.name = projectName;
  const nextJson = JSON.stringify(packageData, null, "\t");
  await writeFile(packageJsonPath, nextJson, { encoding: "utf-8", flag: "w" });
}
interface HandleFileParams {
  projectName: string;
  framework: string;
}

async function copyDir(params: CopyDirParams) {
  // ** Params
  const { input, output } = params;

  // Output must can be accessed
  try {
    await access(output, constants.R_OK);
  } catch {
    await mkdir(output);
  }

  // List Directory Contents
  const list = await readdir(input);
  for (const item of list) {
    const neoInput = resolve(input, item);
    const neoOutput = resolve(output, item);

    const states = await stat(neoInput);
    const isDir = states.isDirectory();

    // Is Directoy
    if (isDir) {
      await copyDir({
        input: neoInput,
        output: neoOutput,
      });
      continue;
    }

    // Is File
    await copyFile(neoInput, neoOutput);
  }
}
interface CopyDirParams {
  input: string;
  output: string;
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
