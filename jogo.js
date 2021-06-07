import chalk from 'chalk';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const numeroDaSorte = randomNumber(2,12);

console.log(`Seu número da sorte é: ${chalk.bold.blue(numeroDaSorte)}`);
console.log('Jogando dados...')

const primeiroDado = randomNumber(1,6);
const segundoDado = randomNumber(1,6);

setTimeout(() => console.log(`Você tirou ${primeiroDado} no primeiro dado!`), 2000);

setTimeout(() => console.log(`Você tirou ${segundoDado} no segundo dado!`), 4000);

if (primeiroDado === segundoDado || primeiroDado + segundoDado === numeroDaSorte) {
    setTimeout(() => console.log(chalk.green(`Você venceu!`)), 5000);
} else {
    setTimeout(() => console.log(chalk.red(`Você perdeu!`)), 5000);

}