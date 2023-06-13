const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumbers = () => {
  let numbers = [];
  while (numbers.length < 3) {
    let RandomSetCount = Math.round(Math.random() * 9).toString();
    if (!numbers.includes(RandomSetCount)) {
      numbers = [...numbers, RandomSetCount];
    }
  }
  return numbers.join("");
};

const RandomSetCount = randomNumbers();
let count = 1;

const readlineAnswer = () => {
  rl.question(`${count}번째 시도 : `, (answer) => {
    console.log(choiceSetCount(answer, RandomSetCount));
    if (RandomSetCount === answer.toString()) {
      console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
      rl.close();
    } else if (count === 9) {
      console.log("게임을 종료합니다.");
      rl.close();
    } else {
      count++;
      readlineAnswer();
    }
  });
};

const choiceSetCount = (answer, randomCount) => {
  let strike = 0;
  let ball = 0;
  let a = answer
    .toString()
    .split("")
    .reduce((acc, cur, i) => {
      if (cur === randomCount[i]) {
        strike++;
      } else if (randomCount.split("").includes(cur)) {
        ball++;
      }
      return `${ball}B${strike}S`;
    }, "");

  return a;
};
console.log("숫자 3자리 맞혀바");
readlineAnswer();
