#!/usr/bin/env node

import logicaJuego from '../index.js';

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".' 

const esPrimo = (n) => {
  if (n <= 1) return false; // Los números menores o iguales a 1 no son primos
  if (n === 2) return true; // 2 es el único número primo par
  if (n % 2 === 0) return false; // Excluye los números pares mayores que 2

  const limite = Math.sqrt(n); // Solo es necesario verificar hasta la raíz cuadrada de n
    for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false; // Si es divisible por i, no es primo
    } 
  return true; // Si no se encontraron divisores, es primo
}



const juegoMental = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    const pregunta = numeroAleatorio.toString();
    const respuestaCorrecta = esPrimo(numeroAleatorio) ? 'yes' : 'no';
    return { pregunta, respuestaCorrecta };
};

const startBrainPrime = () => {
    logicaJuego(description, juegoMental);
};

export default startBrainPrime;logicaJuego(description, juegoMental);
