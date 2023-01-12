process.stdin.on("data", (text) => {
  reverseText = text.toString().split('').reverse().join('');
  process.stdout.write(reverseText + "\n");
});
