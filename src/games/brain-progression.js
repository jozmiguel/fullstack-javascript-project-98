#!/usr/bin/env node

import logicaJuego from '../index.js';

const description = '¿Qué número falta en la progresión?';


const juegoMental = () => {
    const inicio = Math.floor(Math.random() * 51);
    const paso = Math.floor(Math.random() * 5) + 2; 
    const indiceFaltante = Math.floor(Math.random() * 10);
    const progresion = [];


    for (let i = 0; i < 10; i++) {
        progresion.push(inicio + i * paso);
    }
    

    const respuestaCorrecta = String(progresion[indiceFaltante]);
    const progresionOculta = [...progresion];
    progresionOculta[indiceFaltante] = '..';

    const pregunta = progresionOculta.join(' ');

    return { pregunta, respuestaCorrecta };
};

const startBrainProgression = () => {
    logicaJuego(description, juegoMental);
};

export default startBrainProgression;

startBrainProgression();
