let randomInteger;
let integerSequence = "";
do {
  randomInteger = +prompt("Nhập số nguyên bất kỳ: ");
  if (!Number.isInteger(randomInteger)) {
    alert("Số bạn nhập không hợp lệ, hãy nhập lại!");
  }
} while (!Number.isInteger(randomInteger));

if (randomInteger === 0) {
  console.log("Ước số của số 0 là tất cả số nguyên");
} else {
  for (let i = 1; i <= Math.abs(randomInteger); i++) {
    if (randomInteger % i === 0) {
      integerSequence += i + ", ";
    }
  }
  integerSequence = integerSequence.slice(0, integerSequence.length - 2);
  console.log(`Tất cả ước số của ${randomInteger} là: ${integerSequence}`);
}
