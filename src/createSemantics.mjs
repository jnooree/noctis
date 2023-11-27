import SEMANTICS from "./semantics.mjs";
/**
 *
 *
 * @param {object} semanticsColors
 * @returns {object}
 */
export function createSemantics(semanticsColors) {
    let semanticsWithColors = {};

    for (let tokenType in SEMANTICS) {
        let setting = semanticsWithColors[tokenType] = { ...SEMANTICS[tokenType] };
        let fg = setting.foreground;
        if (fg === undefined) {
            continue;
        }

        let name = fg.toLowerCase();
        setting.foreground = semanticsColors[name];
    }

    for (let tokenType in SEMANTICS) {
        if (tokenType.endsWith(":cpp")) {
            semanticsWithColors[tokenType.replace(":cpp", ":c")] = semanticsWithColors[tokenType];
        }
    }

    return semanticsWithColors;
}
