const styles = "\\.(css)$";

module.exports = {
  moduleNameMapper: {
    [styles]: "<rootDir>/src/__mocks__/style.js",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};
