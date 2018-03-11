module.exports = {
    "verbose": true,
    "automock": false,
    "transform": {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.*ss?$": "<rootDir>/node_modules/jest-css-modules"
    },
    "roots": [
        "<rootDir>/src"
    ],
    "moduleFileExtensions": [
        "js",
        "jsx",
        "json"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "collectCoverageFrom": [
        "src/components/**/LinkItem.jsx"
    ],
    "coverageReporters": [
        "cobertura",
        "html"
    ],
    "coverageDirectory": "target/coverage/",
    "coverageThreshold": {
        "global": {
            "statements": 100,
            "branches": 100,
            "functions": 100,
            "lines": 100
        }
    }
};