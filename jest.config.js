/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(s?css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // For some reason, projects don't seem to work, but they also don't seem to be necessary, so leaving
  // this commented out for now.  It would probably be ideal to run the tests in project batches if we
  // were actually publishing them individually.
  // 
  // See here for more info: https://github.com/kulshekhar/ts-jest/issues/1648
  // projects: [
  //   '<rootDir>/lib/ts/packages/config'
  // ],
};