import {
  copyFile,
  access,
  readdir,
  constants,
  stat,
  mkdir,
} from "node:fs/promises";
import { resolve } from "node:path";

export async function copyDir(params: Params) {
  const { input, output } = params;

  try {
    await access(output, constants.R_OK);
  } catch {
    await mkdir(output);
  }

  const list = await readdir(input);
  for (const item of list) {
    const neoInput = resolve(input, item);
    const neoOutput = resolve(output, item);

    const states = await stat(neoInput);
    const isDir = states.isDirectory();

    if (isDir) {
      await copyDir({
        input: neoInput,
        output: neoOutput,
      });
      continue;
    }

    await copyFile(neoInput, neoOutput);
  }
}
interface Params {
  input: string;
  output: string;
}
