class Processor {

  static Process(data) {
    const dataLines = data.split("\r\n");
    let rows = [];

    dataLines.forEach((row) => {
      let singleArray = row.split(",");
      rows.push(singleArray);
    });

    return rows
  }

}

module.exports = Processor;
