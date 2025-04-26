let randomInteger = null;
let evenCount = 0;
let oddCount = 0;
let integerSequence = "";

for (let i = 1; i <= 7; i++) {
  do {
    randomInteger = +prompt(`Nhập số nguyên bất kỳ thứ ${i}:`);
    if (!Number.isInteger(randomInteger)) {
      alert("Dữ liệu nhập vào không hợp lệ, hãy nhập lại");
    }
  } while (!Number.isInteger(randomInteger));

  integerSequence += randomInteger + " ";

  if (randomInteger % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}
console.log(`Dãy số bạn vừa nhập là: ${integerSequence.trim()}`);
console.log(`Số lượng số chẵn bạn nhập là: ${evenCount}`);
console.log(`Số lượng số lẻ bạn nhập là: ${oddCount}`);
