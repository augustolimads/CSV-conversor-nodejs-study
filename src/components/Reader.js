const { readFile } = require("fs");
const { promisify } = require("util");

class Reader {
  constructor() {
    this.readFile = promisify(readFile);
  }

  async read(filepath) {
    try {
      return await this.readFile(filepath, "utf8");
    } catch (err) {
      console.error(err);
      return "error";
    }
  }
}

module.exports = Reader;
