function print1ToN(n) {
  if (n < 1) return;
  print1ToN(n - 1);
  console.log(n);
}

function printAToB(a, b) {
  console.log(a);
  if (a === b) return;
  if (a < b) {
    printAToB(a + 1, b);
  } else {
    printAToB(a - 1, b);
  }
}

function isPowerOfTwo(n) {
  if (n === 1) return "YES";
  if (n < 1 || n % 2 !== 0) return "NO";
  return isPowerOfTwo(n / 2);
}

function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

function printDigitsRightToLeft(n) {
  if (n === 0) return;
  console.log(n % 10);
  printDigitsRightToLeft(Math.floor(n / 10));
}

function printDigitsLeftToRight(n) {
  if (n < 10) {
    console.log(n);
    return;
  }
  printDigitsLeftToRight(Math.floor(n / 10));
  console.log(n % 10);
}


console.log("1. Від 1 до 5:");
print1ToN(5);

console.log("\n2. Від 5 до 1:");
printAToB(5, 1);

console.log("\n3. Точна степінь двійки:");
console.log("8 ->", isPowerOfTwo(8));
console.log("3 ->", isPowerOfTwo(3));

console.log("\n4. Сума цифр числа 179:");
console.log(sumOfDigits(179));

console.log("\n5. Цифри числа 179 справа наліво:");
printDigitsRightToLeft(179);

console.log("\n6. Цифри числа 179 зліва направо:");
printDigitsLeftToRight(179);