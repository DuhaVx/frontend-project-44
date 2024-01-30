import readlineSync from 'readline-sync';

const startMainGame = () => {
  console.log('Welcome to the Brain Games!');
  const usName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${usName}!`);
};

export default startMainGame;