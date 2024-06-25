const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
const { findMostSpendCountry } = require("../lib/find-spend-country");
const { findMostUsedCreditCard } = require("../lib/find-most-used-credit");
const { readExcelData } = require("../lib/read-excel-data");
const { ViewDataIndex } = require("../lib/view-data-index");

exports.index = async (req, res) => {
  const excelFilePath = path.join(__dirname, "..", "data", "data.xlsx");
  const data = readExcelData(excelFilePath);
  const mostSpendCountry = await findMostSpendCountry(data);
  const mostUsedCreditCard = await findMostUsedCreditCard(data);
  const html = ViewDataIndex(mostSpendCountry, mostUsedCreditCard);

  res.send(html);
};

exports.getData = (req, res) => {
  const excelFilePath = path.join(__dirname, "..", "data", "data.xlsx");
  const data = readExcelData(excelFilePath);
  res.json(data);
};

exports.getDataCountry = (req, res) => {
  const excelFilePath = path.join(__dirname, "..", "data", "data.xlsx");
  const data = readExcelData(excelFilePath);
  const mostSpendCountry = findMostSpendCountry(data);
  res.json(mostSpendCountry);
};

exports.getDataCreditCard = (req, res) => {
  const excelFilePath = path.join(__dirname, "..", "data", "data.xlsx");
  const data = readExcelData(excelFilePath);
  const mostUsedCreditCard = findMostUsedCreditCard(data);
  res.json(mostUsedCreditCard);
};

// Tambahkan fungsi addData untuk menambah data ke Excel
exports.addData = (req, res) => {
  const excelFilePath = path.join(__dirname, "..", "data", "data.xlsx");
  const { country, credit_card_type, credit_card, first_name, last_name } =
    req.body;

  // Baca file Excel yang sudah ada atau buat workbook baru
  let workbook;
  if (fs.existsSync(excelFilePath)) {
    workbook = xlsx.readFile(excelFilePath);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Baca atau buat sheet pertama
  const sheetName = workbook.SheetNames[0] || "Sheet1";
  const worksheet = workbook.Sheets[sheetName] || xlsx.utils.aoa_to_sheet([]);

  // Konversi worksheet ke format array of arrays
  const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  const id = Math.floor(Math.random() * 100000) + 1;

  // Tambahkan data baru
  existingData.push([
    id,
    country,
    credit_card_type,
    credit_card,
    first_name,
    last_name,
  ]);

  // Update worksheet dengan data baru
  const newWorksheet = xlsx.utils.aoa_to_sheet(existingData);
  workbook.Sheets[sheetName] = newWorksheet;
  if (!workbook.SheetNames.includes(sheetName)) {
    xlsx.utils.book_append_sheet(workbook, newWorksheet, sheetName);
  }

  // Tulis ulang file Excel
  xlsx.writeFile(workbook, excelFilePath);

  res.status(200).send("Data berhasil ditambahkan ke Excel");
};
