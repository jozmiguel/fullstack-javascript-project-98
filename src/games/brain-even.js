#!/usr/bin/env node

import logicaJuego from '../index.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const juegoMental = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    const pregunta = numeroAleatorio.toString();
    const respuestaCorrecta = (numeroAleatorio % 2 === 0) ? 'yes' : 'no';
    return { pregunta, respuestaCorrecta };
};

const startBrainEven = () => {
    logicaJuego(description, juegoMental);
};

export default startBrainEven;logicaJuego(description, juegoMental);


