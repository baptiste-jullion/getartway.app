import pluginJs from "@eslint/js";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import type { Linter } from "eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    // 🔸 Ignore folders
    {
        ignores: ["node_modules", "dist", "public", ".nuxt", "front/.nuxt"],
    },

    // 🔸 Global language options (browser & node)
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // 🔸 Base JavaScript rules
    pluginJs.configs.recommended,

    // 🔸 TypeScript support
    ...tseslint.configs.recommended,

    // 🔸 Vue support (Essential rules only)
    ...pluginVue.configs["flat/essential"],

    // 🔸 Prettier integration (disables ESLint formatting rules that conflict with Prettier)
    eslintConfigPrettier,

    // 🔸 Common rules (applies everywhere)
    {
        plugins: {
            prettier: pluginPrettier,
            "simple-import-sort": pluginSimpleImportSort,
            "@stylistic/ts": stylisticTs,
        },
        rules: {
            // Run Prettier through ESLint
            "prettier/prettier": [
                "warn",
                {
                    semi: true,
                    singleQuote: false,
                    tabWidth: 4,
                    trailingComma: "all",
                },
            ],

            "simple-import-sort/imports": [
                "error",
                {
                    groups: [],
                },
            ],

            eqeqeq: ["error"],

            "comma-dangle": ["warn", "always-multiline"],
        },
    },

    // 🔸 TypeScript-specific rules (optional extra customization)
    {
        files: ["**/*.ts"],
        rules: {
            // Add TypeScript-specific rules here if needed later
        },
    },

    // 🔸 Vue-specific rules
    {
        files: ["**/*.vue"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            // Enforce kebab-case in Vue templates
            "vue/attribute-hyphenation": ["error", "always"],
            // Add more Vue rules here if needed
            "vue/component-name-in-template-casing": [
                "error",
                "PascalCase",
                {
                    registeredComponentsOnly: false,
                },
            ],

            "vue/html-self-closing": [
                "error",
                {
                    html: {
                        void: "always",
                        normal: "never",
                        component: "always",
                    },
                    svg: "always",
                    math: "always",
                },
            ],

            "vue/multi-word-component-names": "off",

            "no-undef": "off",
        },
    },
] as Linter.Config;
