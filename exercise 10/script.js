let n;
let f0 = 1;
let f1 = 1;
let f2;
let fibonacciSequence = "1 1 ";
do {
  n = +prompt("Nhập số số fibonacci n (n>=3): ");
  if (!Number.isInteger(n) || n < 3) {
    alert("Dữ liệu nhập vào không hợp lệ, xin hãy nhập lại");
  }
} while (!Number.isInteger(n) || n < 3);

for (let i = 1; i <= n - 2; i++) {
  f2 = f1 + f0;
  fibonacciSequence += f2 + " ";
  f0 = f1;
  f1 = f2;
}
console.log(`Dãy ${n} số fibonacci là: ${fibonacciSequence}`);
