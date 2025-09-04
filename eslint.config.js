import { defineConfig } from "eslint/config";
import withNuxt from "./.nuxt/eslint.config.mjs";

import eslintPrettier from "eslint-plugin-prettier/recommended";

const config = withNuxt().append(
  defineConfig({
    extends: [eslintPrettier],
  }),
);

export default config;
