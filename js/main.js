var looperAsk = prompt('Give me a letter!');

var number;

var i;

for (number = 0; number < 10; number++) {
  for (i = 0; i < number; i++) {
    document.write(looperAsk);
  }
  document.write('<br>');
}
