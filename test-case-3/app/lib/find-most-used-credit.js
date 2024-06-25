exports.findMostUsedCreditCard = (data) => {
  const cardTypeCount = {}; // Objek untuk menyimpan jumlah penggunaan setiap tipe kartu kredit
  let maxCount = 0; // Variabel untuk menyimpan jumlah penggunaan maksimum
  let mostUsedCardType = null; // Variabel untuk menyimpan tipe kartu kredit yang paling sering digunakan

  // Menghitung jumlah penggunaan setiap tipe kartu kredit
  for (let i = 0; i < data.length; i++) {
    const cardType = data[i].credit_card_type;

    cardTypeCount[cardType] = (cardTypeCount[cardType] || 0) + 1;

    // Memperbarui tipe kartu kredit yang paling sering digunakan
    if (cardTypeCount[cardType] > maxCount) {
      maxCount = cardTypeCount[cardType];
      mostUsedCardType = cardType;
    }
  }

  return { mostUsedCardType, maxCount };
};
