import fs from "fs";
import { promisify } from "util";
import { createSyntax } from "./createSyntax.mjs";
import { createSemantics } from "./createSemantics.mjs";
/**
 *
 *
 * @param {string} path
 * @param {object} syntaxColors
 * @param {Function} themeWorkbench
 * @param {string} themeName
 * @returns {void}
 */
export async function buildTheme(path, syntaxColors, themeWorkbench, themeName) {
   let syntaxWithColors = createSyntax(syntaxColors);
   let semanticsWithColors = createSemantics(syntaxColors);
   const writeFileAsync = promisify(fs.writeFile);
   const theme = themeWorkbench(syntaxWithColors, semanticsWithColors);
   try {
      await writeFileAsync(path, JSON.stringify(theme, null, 3));
      console.log(`✔  ${themeName} theme built`);
   }
   catch (error) {
      console.error(`❗  ${error}`);
   }
}
