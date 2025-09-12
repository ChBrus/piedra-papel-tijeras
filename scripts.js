// Obtener referencias a los elementos del DOM
const botonPiedra = document.getElementById('piedra');
const botonPapel = document.getElementById('papel');
const botonTijeras = document.getElementById('tijeras');
const mensajeJugador = document.getElementById('mensaje-jugador');
const mensajeComputadora = document.getElementById('mensaje-computadora');
const resultado = document.getElementById('resultado');

// Lógica del juego
function jugar(jugadaJugador) {
    const jugadas = ['piedra', 'papel', 'tijeras'];
    const jugadaComputadora = jugadas[Math.floor(Math.random() * jugadas.length)];

    // Mostrar las jugadas
    mensajeJugador.textContent = `Tú elegiste: ${jugadaJugador}`;
    mensajeComputadora.textContent = `La computadora eligió: ${jugadaComputadora}`;

    // Determinar el resultado
    let resultadoJuego = '';
    if (jugadaJugador === jugadaComputadora) {
        resultadoJuego = '¡Empate!';
    } else if (
        (jugadaJugador === 'piedra' && jugadaComputadora === 'tijeras') ||
        (jugadaJugador === 'papel' && jugadaComputadora === 'piedra') ||
        (jugadaJugador === 'tijeras' && jugadaComputadora === 'papel')
    ) {
        resultadoJuego = '¡Ganaste!';
    } else {
        resultadoJuego = '¡Perdiste!';
    }

    // Actualizar el texto del resultado
    resultado.textContent = resultadoJuego;
}

// Añadir eventos a los botones
botonPiedra.addEventListener('click', () => jugar('piedra'));
botonPapel.addEventListener('click', () => jugar('papel'));
botonTijeras.addEventListener('click', () => jugar('tijeras'));