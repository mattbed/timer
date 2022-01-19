const timer = process.argv.slice(2);
let timerGoodValues = [];
// sort out the values below 0 and NaN values
for (let element of timer) {
  if (element >= 0 && !isNaN(element)) {
    timerGoodValues.push(element);
  }
}

for (let time of timerGoodValues) {
  setTimeout(() => {
    process.stdout.write('\x07' + 'beep\n');
  }, (time * 1000));
}