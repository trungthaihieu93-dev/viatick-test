module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/index.js',
    '!app/assets/*.js',
    '!app/**/styles.js',
    '!app/**/constants.js',
    '!app/**/messages.js',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    'jest-expect-message',
  ],
  setupFiles: ['raf/polyfill', '<rootDir>/internals/testing/enzyme-setup.js'],
  testRegex: '__tests__/.*\\.test\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: ['default'],
};