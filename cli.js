import readlineSync from 'readline-sync';

export function saludoU() {
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
}
