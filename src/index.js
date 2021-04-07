const HtmlParser = require("./HtmlParser");
const Processor = require("./Processor");
const Reader = require("./Reader");
const Table = require("./Table");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

async function main() {
  try {

    const reader = new Reader();

    const data = await reader.read("./english_words.csv");
    const processedData = Processor.Process(data);

    const {rowCount, columnCount, getHeaderAndRows} = new Table(processedData);
    const html = await HtmlParser.Parse(getHeaderAndRows)

    const writer = new Writer();
    writer.write(`${Date.now()}.html`, html)
    PDFWriter.writePDF(`${Date.now()}.pdf`, html)

  } catch (err) {
    console.error(err);
  }
}

main();
