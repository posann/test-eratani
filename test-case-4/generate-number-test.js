function quickSort(arr) {
  // Basis kasus: jika array kosong atau hanya memiliki satu elemen, kembalikan array tersebut
  if (arr.length <= 1) {
    return arr;
  }

  // Pilih pivot (elemen tengah array)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Partisi array menjadi tiga bagian: kurang dari pivot, sama dengan pivot, dan lebih dari pivot
  const less = [];
  const equal = [];
  const greater = [];

  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  // Rekursi: sortir bagian 'less' dan 'greater', lalu gabungkan hasilnya
  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Fungsi untuk menghasilkan bilangan acak dalam rentang tertentu
function generateRandomNumbers(size, min = 1, max = 100) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

// Contoh penggunaan
const randomNumbers = generateRandomNumbers(10);
console.log('Bilangan Acak:', randomNumbers);

const sortedNumbers = quickSort(randomNumbers);
console.log('Bilangan Setelah Disortir:', sortedNumbers);
