module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
    ],
    rules: {
        // Consider disabling this entirely
        "@typescript-eslint/no-empty-interface": ["warn"],
        // Don't forbid ' and " in literals, because they make the code way easier to read.
        "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
        // Typescript does a good enough job of this
        "react/prop-types": ["off"],
        // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        // "react-hooks/exhaustive-deps": "warn", // Checks effect
        "react/no-danger": ["error"],
        "prefer-const": ["warn"],
    },
    // Only override configuration for ts files: https://stackoverflow.com/a/64488474/4339894
    overrides: [
        {
            files: ["*.ts", "*.tsx"], // Your TypeScript file extensions

            // As mentioned in the comments, you should extend TypeScript plugins here,
            // instead of extending them outside the `overrides`.
            // If you don't want to extend any rules, you don't need an `extends` attribute.
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],

            rules: {
                // Consider disabling this entirely
                "@typescript-eslint/no-empty-interface": ["warn"],

                "@typescript-eslint/no-empty-function": ["warn"],
                // Don't forbid ' and " in literals, because they make the code way easier to read.
                "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
                // Typescript does a good enough job of this
                "react/prop-types": ["off"],
                // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
                // "react-hooks/exhaustive-deps": "warn", // Checks effect
                "react/no-danger": ["error"],
                "prefer-const": ["warn"],

                // "no-unused-vars": [
                //     "warn",
                //     { destructuredArrayIgnorePattern: "^_", varsIgnorePattern: "props" },
                // ],

                // We'll disable this in favor of the TypeScript version.
                "no-unused-vars": ["off"],

                "@typescript-eslint/no-unused-vars": [
                    "warn",
                    {
                        destructuredArrayIgnorePattern: "^_",
                        varsIgnorePattern: "[iI]gnored",
                        args: "none",
                    },
                ],

                //"sort-imports": ["warn"],

                // Disabling sort-keys.  Although it would help alleviate a few issues regarding
                // merge conflicts, in practice these are fairly few and far between.  In addition,
                // it's common to want to group "like" keys near each other (albeit you could argue
                // those "like" keys should be on a child object), and it's nicer to include keys in
                // the order they appear in interface declarations or documentation, which aren't
                // themselves easily orderable.
                //
                // The final nail in the coffin for using this rule is that there is no auto-fix,
                // so developer have to waste time and mental cycles manually sorting keys, which
                // is more of a waste of time than dealing with the merge conflicts.  I'd still
                // reccommend going alphabetical whenever possible, but enforcing it as a rule
                // is unnecessary.
                // "sort-keys": [
                //     "warn",
                //     "asc",
                //     {
                //         caseSensitive: false,
                //         natural: true,
                //     },
                // ],
                "react/jsx-sort-props": [
                    "warn",
                    {
                        ignoreCase: true,
                    },
                ],
                "import/order": ["warn"],
            },

            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ["lib/ts/packages/*/tsconfig.json", "services/*/tsconfig.json"],

                //project: ["./tsconfig.json"], // Specify it only for TypeScript files
            },
        },
    ],
    settings: {
        react: {
            //   "pragma": "React",  // Pragma to use, default to "React"
            //   "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            //   "flowVersion": "0.53" // Flow version
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // use an array of glob patterns
                project: ["lib/ts/packages/*/tsconfig.json", "services/*/tsconfig.json"],
            },
        },
    },
};
