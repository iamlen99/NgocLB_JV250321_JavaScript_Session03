let randomInteger = null;
let evenSum = 0;
let integerSequence = "";

for (let i = 1; i <= 7; i++) {
  while (true) {
    randomInteger = +prompt(`Nhập số nguyên bất kỳ thứ ${i}:`);
    if (!Number.isInteger(randomInteger)) {
      alert("Dữ liệu nhập vào không hợp lệ, hãy nhập lại");
    } else {
      break;
    }
  }
  integerSequence += randomInteger + " ";
  if (randomInteger % 2 === 0) {
    evenSum += randomInteger;
  }
}
console.log(`Dãy số bạn vừa nhập là: ${integerSequence.trim()}`);
console.log(`Tổng các số chẵn trong 7 số nguyên đã nhập là: ${evenSum}`);
