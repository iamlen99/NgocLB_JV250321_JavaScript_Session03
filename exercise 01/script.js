let N = +prompt("Nhập một số nguyên lớn hơn 1 bất kì:");
let isValidIntegerNumber = false;
let sum = 0;
if (Number.isInteger(N) && N > 1) {
  isValidIntegerNumber = true;
}

if (isValidIntegerNumber) {
  for (let i = 1; i <= N; i++) {
    sum = sum + i;
  }
  console.log(`Tổng tất cả số nguyên từ 1 đến N: ${sum}`);
} else {
  console.log("Dữ liệu nhập vào không hợp lệ");
}
