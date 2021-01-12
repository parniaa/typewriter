// moves heeey to the start of the line by using \r
// process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 900);


const sentence = "|/-\\|";
let i = 0;
let sentenceArray = sentence.split("");
console.log(sentenceArray);
setTimeout(function run() {
  if (i < sentenceArray.length) {
    // console.log(sentenceArray[i]);
    process.stdout.write(sentenceArray[i]);
    i++;
    setTimeout(run, 150);
  }
}, 150);