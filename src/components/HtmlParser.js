const ejs = require("ejs");

class HtmlParser {
  static async Parse({header, rows}) {
    return await ejs.renderFile("src/table.ejs", {header, rows});
  }
}

module.exports = HtmlParser;
