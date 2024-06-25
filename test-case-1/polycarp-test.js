// Fungsi untuk memeriksa apakah sebuah angka disukai oleh Polycarp
function isLikedNumber(n) {
  // Angka disukai jika tidak habis dibagi 3 dan tidak berakhir dengan digit 3
  return n % 3 !== 0 && n % 10 !== 3;
}

// Fungsi untuk menghasilkan angka-angka yang disukai sampai batas tertentu
function generateLikedNumbers(limit) {
  const likedNumbers = []; // Array untuk menyimpan angka-angka yang disukai
  let num = 1; // Mulai dari angka 1
  while (likedNumbers.length < limit) { // Teruskan hingga kita memiliki jumlah angka yang disukai sebanyak 'limit'
    if (isLikedNumber(num)) { // Jika angka disukai
      likedNumbers.push(num); // Tambahkan ke array likedNumbers
    }
    num++; // Periksa angka berikutnya
  }
  return likedNumbers; // Kembalikan array angka-angka yang disukai
}

// Fungsi untuk menemukan elemen ke-k dari array angka-angka yang disukai
function findKthElement(k, likedNumbers) {
  return likedNumbers[k - 1]; // Kembalikan elemen ke-k (dengan indeks 0-based)
}

// Fungsi utama yang memproses input dan menghasilkan output
function main(input) {
  const t = parseInt(input[0]); // Jumlah kasus uji
  const testCases = input.slice(1).map(Number); // Mengambil angka k dari input dan mengonversinya menjadi array angka

  // Menghasilkan angka yang disukai hingga jumlah maksimal dari k dalam kasus uji
  const maxK = Math.max(...testCases);
  const likedNumbers = generateLikedNumbers(maxK);

  // Menghasilkan output untuk setiap kasus uji
  const results = testCases.map(k => findKthElement(k, likedNumbers));
  results.forEach(result => console.log(result)); // Cetak hasilnya
}

// Membaca dan memproses input
const input = [
  '10', '1', '2',
  '3', '4', '5',
  '6', '7', '8',
  '9', '1000'
];

// Memanggil fungsi utama dengan input yang diberikan
main(input);
