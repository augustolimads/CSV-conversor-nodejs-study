const HtmlParser = require("./src/components/HtmlParser");
const Processor = require("./src/components/Processor");
const Reader = require("./src/components/Reader");
const Table = require("./src/components/Table");
const Writer = require("./src/components/Writer");
const PDFWriter = require("./src/components/PDFWriter");

async function main() {

  try {
    const reader = new Reader();

    const data = await reader.read("src/public/english_words.csv");
    const processedData = Processor.Process(data);

    const {rowCount, columnCount, getHeaderAndRows} = new Table(processedData);
    const html = await HtmlParser.Parse(getHeaderAndRows)

    const writer = new Writer();
    writer.write(`dist/html/${Date.now()}.html`, html)
    PDFWriter.writePDF(`dist/pdf/${Date.now()}.pdf`, html)

  } catch (err) {
    console.error(err);
  }

}

main();
