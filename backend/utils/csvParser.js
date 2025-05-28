const csv = require('csv-parser');
const fs = require('fs');
const XLSX = require('xlsx');

function parseCSV(filePath, ext) {
  return new Promise((resolve, reject) => {
    const data = [];

    if (ext === '.csv') {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', () => resolve(data))
        .on('error', reject);
    } else if (ext === '.xlsx' || ext === '.xls') {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      resolve(sheetData);
    } else {
      reject(new Error('Unsupported file format.'));
    }
  });
}

module.exports = { parseCSV };
