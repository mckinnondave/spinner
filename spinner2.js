let arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let count = 0;
for (const element of arr) {
  count += 200;
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, 300 + count);
}




