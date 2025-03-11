import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintComments from "eslint-plugin-eslint-comments";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
	{ ignores: ["dist", ".astro", "coverage"] },
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		plugins: {
			"simple-import-sort": simpleImportSort,
			"eslint-comments": eslintComments,
		},
		rules: {
			...eslintComments.configs.recommended.rules,
			"eslint-comments/require-description": "error",

			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
);
