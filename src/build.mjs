import lux from "./workbench/lux.mjs";
import minimus from "./workbench/minimus.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { lux: lux },
   { minimus: minimus },
];


buildAllThemes(THEMES);
