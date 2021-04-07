class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
  }

  get getHeaderAndRows(){
    const header = this.header;
    const rows = this.rows;
    return {header, rows}
  }

  get rowCount(){
    return this.rows.length;
  }

  get columnCount(){
    return this.header.length;
  }
}

module.exports = Table;
