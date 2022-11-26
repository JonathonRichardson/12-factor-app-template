/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  //preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  //extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    //'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
  // projects: [
  //   '<rootDir>/lib/ts/packages/*'
  // ],
  // transform: {
  //   '.ts?$': 'ts-jest',
  // },
  // transformIgnorePatterns: ['<rootDir>/node_modules/']
};