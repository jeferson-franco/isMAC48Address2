function solution(inputString) {
    return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(inputString);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isMAC48Address2

// alternative solution
