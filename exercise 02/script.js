let N = +prompt("Nhập một số nguyên lớn hơn 1 bất kì:");
let isValidIntegerNumber = false;
let multipleOf5 = "";
if (Number.isInteger(N) && N > 1) {
  isValidIntegerNumber = true;
}

if (isValidIntegerNumber) {
  if (N < 5) {
    console.log(`Từ 1 đến ${N} không có số nào chia hết cho 5!`);
  } else {
    for (let i = 1; i <= N; i++) {
      if (i % 5 === 0) {
        multipleOf5 = multipleOf5 + i + ", ";
      }
    }
    multipleOf5 = multipleOf5.slice(0, multipleOf5.length - 2);
    console.log(`Các số chia hết cho 5 từ 1 đến ${N} là: ${multipleOf5}`);
  }
} else {
  console.log("Dữ liệu nhập vào không hợp lệ");
}
