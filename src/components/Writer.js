const { writeFile } = require("fs");
const { promisify } = require("util");

class Writer {
  constructor() {
    this.writer = promisify(writeFile);
  }

  async write(filename, data) {
    try {
      await this.writer(filename, data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = Writer;
