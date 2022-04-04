module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '@splitsoftware/splitio-react': '<rootDir>/__mocks__/splitio-react.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' + '|@testing-library/jest-dom' + ')/?)',
  ],
  coverageReporters: [
    'json-summary', // plus any other reporters, e.g. 'lcov', 'text', 'text-summary'
    'html',
    'text-summary',
    'text',
  ],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      functions: 50,
      branches: 50,
      lines: 50,
      statements: 50,
    },
  },
};
