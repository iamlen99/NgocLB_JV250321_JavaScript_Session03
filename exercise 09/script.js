let letter = "0123456789abcdef";
for (let i = 1; i <= 10; i++) {
  let color = "#";
  for (let j = 1; j <= 6; j++) {
    color += letter.charAt(Math.floor(Math.random() * 16));
  }
  console.log(`%cMàu sắc đã được thay đổi`, `color: ${color};`);
}
