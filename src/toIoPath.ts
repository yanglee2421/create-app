import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Answer } from "./main";

export function toIoPath(params: Answer): [string, string] {
  const { projectName, framework } = params;

  const __dirname = getDirname();
  const inputBasePath = resolve(__dirname, "../templates");
  const input = resolve(inputBasePath, framework);

  const output = resolve(process.cwd(), projectName);

  return [input, output];
}

function getDirname() {
  return fileURLToPath(dirname(import.meta.url));
}
