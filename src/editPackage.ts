import { readFile, writeFile } from "node:fs/promises";

export async function editPackage(params: EditPackageNameParams) {
  const { jsonPath, ...restParams } = params;

  const prevJson = await readFile(jsonPath, { encoding: "utf-8" });
  const data = JSON.parse(prevJson);

  Object.assign(data, restParams);
  const nextJson = JSON.stringify(data, null, "\t");

  await writeFile(jsonPath, nextJson, { encoding: "utf-8", flag: "w" });
}
interface EditPackageNameParams {
  jsonPath: string;
  name: string;
}
