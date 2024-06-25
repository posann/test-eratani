function isPalindrome(str) {
  // Menghilangkan spasi dan mengubah string menjadi huruf kecil agar tidak case-sensitive
  str = str.replace(/\s+/g, '').toLowerCase();

  // Menghitung panjang string
  const len = str.length;

  // Membandingkan karakter dari awal dan akhir string hingga mencapai tengah
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // Jika ada karakter yang tidak sama, maka bukan palindrome
    }
  }
  
  return true; // Jika semua karakter sama, maka string adalah palindrome
}

// Contoh penggunaan
console.log(isPalindrome('kodokkodok')); // true
console.log(isPalindrome('jinggaaku')); // false
console.log(isPalindrome('123321')); // true
console.log(isPalindrome('A man a plan a canal Panama')); // true (contoh dengan spasi dan huruf besar)
