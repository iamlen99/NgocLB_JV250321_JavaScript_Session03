let integerSequence = "";
let addWord = null;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    addWord = i % 5 === 0 ? "FizzBuzz" : "Fizz";
  } else {
    addWord = i % 5 === 0 ? "Buzz" : i;
  }
  integerSequence += addWord + " ";
}
console.log(`Dãy số nguyên từ 1 đến 100 cần in là: ${integerSequence.trim()}`);
