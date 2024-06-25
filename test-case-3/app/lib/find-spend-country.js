exports.findMostSpendCountry = (data) => {
  const countryCount = {}; // Objek untuk menyimpan jumlah kemunculan setiap negara
  let maxCount = 0; // Variabel untuk menyimpan jumlah kemunculan maksimum
  let mostSpendCountry = null; // Variabel untuk menyimpan negara dengan kemunculan maksimum

  // Menghitung jumlah kemunculan setiap negara
  for (let i = 0; i < data.length; i++) {
    const country = data[i].country;
    countryCount[country] = (countryCount[country] || 0) + 1;

    // Memperbarui negara dengan kemunculan maksimum
    if (countryCount[country] > maxCount) {
      maxCount = countryCount[country];
      mostSpendCountry = country;
    }
  }

  return { mostSpendCountry, maxCount };
};
