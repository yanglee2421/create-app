import { readFile, writeFile, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";

export async function editGitignore(params: EditGitignoreParams) {
  const { filePath } = params;

  const text = await readFile(filePath, "utf-8");

  const nextPath = resolve(dirname(filePath), ".gitignore");
  await writeFile(nextPath, text, "utf-8");
  await rm(filePath);
}

interface EditGitignoreParams {
  filePath: string;
}
