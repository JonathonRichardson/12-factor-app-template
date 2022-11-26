/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/lib/js/misc/__mocks__/fileMock.js",
        "\\.(s?css|less)$": "<rootDir>/lib/js/misc/__mocks__/styleMock.js",
    },
    // Ignore the compiled *.spec.js files because they're the same as their *.ts counterparts.  You could
    // just to prevent the *.spec.ts files from compiling, but then you run into issues with intellisense,
    // since VS Code will think they don't need to be compiled.  It also might be necessary in the future
    // to run the *.js files as a fallback if ts-jest stops working well.
    //
    // https://github.com/kulshekhar/ts-jest/issues/1102#issuecomment-493625418
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    // For some reason, projects don't seem to work, but they also don't seem to be necessary, so leaving
    // this commented out for now.  It would probably be ideal to run the tests in project batches if we
    // were actually publishing them individually.
    //
    // See here for more info: https://github.com/kulshekhar/ts-jest/issues/1648
    // projects: [
    //   '<rootDir>/lib/ts/packages/config'
    // ],
};
