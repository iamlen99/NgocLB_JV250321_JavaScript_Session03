let randomInteger;
let isPrime = true;
do {
  randomInteger = +prompt("Nhập số nguyên bất kỳ: ");
  if (!Number.isInteger(randomInteger)) {
    alert("Dữ liệu bạn nhập không hợp lệ, hãy nhập lại!");
  }
} while (!Number.isInteger(randomInteger));

if (randomInteger > 1) {
  for (let i = 2; i <= Math.sqrt(randomInteger); i++) {
    if (randomInteger % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  console.log(`${randomInteger} là số nguyên tố!`);
} else {
  console.log(`${randomInteger} không phải là số nguyên tố!`);
}
