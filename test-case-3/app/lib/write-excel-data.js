exports.writeExcelData = (filePath, newData) => {
  // Baca data yang sudah ada dari file Excel
  const existingData = readExcelData(filePath);

  // Gabungkan data yang sudah ada dengan data baru
  const combinedData = [...existingData, newData];

  // Buat worksheet baru dari data yang telah digabungkan
  const worksheet = xlsx.utils.json_to_sheet(combinedData);

  // Buat workbook baru dan tambahkan worksheet
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, worksheet, "Sheet1");

  // Tulis workbook baru ke file Excel
  xlsx.writeFile(newWorkbook, filePath);
};
