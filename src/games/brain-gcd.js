#!/usr/bin/env node

import logicaJuego from '../index.js';

const description = 'Encuentra el máximo común divisor de los números dados.';

const calcularMCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const juegoMental = () => {
    const numeroAleatorio1 = Math.floor(Math.random() * 51);
    const numeroAleatorio2 = Math.floor(Math.random() * 51);

    const pregunta = numeroAleatorio1 + " " + numeroAleatorio2;
    const respuestaCorrecta = calcularMCD(numeroAleatorio1, numeroAleatorio2).toString();

    return { pregunta, respuestaCorrecta };
};

const startBrainGcd = () => {
    logicaJuego(description, juegoMental);
};

export default startBrainGcd;logicaJuego(description, juegoMental);