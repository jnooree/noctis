import fs from "fs";
/**
 *
 *
 * @param {array} themesArray
 * @returns {array}
 */
export function makeThemePath(themesArray) {
   fs.mkdirSync("./themes", { recursive: true });

   const PATHS = [];
   themesArray.forEach(theme => {
      let path = `./themes/${Object.keys(theme)}.json`;
      if (fs.existsSync(path)) {
         fs.unlinkSync(path);
      }
      PATHS.push(path);

   });
   return PATHS;
}
