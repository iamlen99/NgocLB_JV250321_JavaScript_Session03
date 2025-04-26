let n = +prompt("Nhập một số nguyên lớn hơn 1 bất kì:");
let isValidIntegerNumber = false;
let oddSum = 0;
if (Number.isInteger(n) && n > 1) {
  isValidIntegerNumber = true;
}

if (isValidIntegerNumber) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddSum += i;
    }
  }
  console.log(`Tổng các số lẻ trong khoảng từ 1 đến ${n} là: ${oddSum}`);
} else {
  console.log("Dữ liệu nhập vào không hợp lệ");
}
