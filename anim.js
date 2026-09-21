const audio = document.getElementById("music");
const lyrics = document.getElementById("lyrics");

const lyricsData = [
  { text: "Bueno... quería mostrarte algo.", time: 8 },
  { text: "Espero que te guste.", time: 20 },
  { text: "Lo hice con bastante cariño.", time: 34 },
  { text: "A veces una pequeña sorpresa alegra el día.", time: 61 },
  { text: "Así que pensé: ¿por qué no?", time: 74 },
  { text: "No es nada complicado.", time: 88 },
  { text: "Solo quería hacer algo diferente.", time: 101 },
  { text: "Espero que esto te saque una sonrisa.", time: 117 },
  { text: "Aunque sea una pequeñita.", time: 130 },
  { text: "Disfruta el momento.", time: 146 },
  { text: "Y mira las flores 🌻", time: 159 },
  { text: "Por cierto...", time: 176 },
  { text: "Todo esto tiene un pequeño motivo.", time: 207 },
  { text: "Pero eso te lo dejo descubrir.", time: 222 },
  { text: "Espero que hayas disfrutado la sorpresa.", time: 242 },
  { text: "Y gracias por llegar hasta aquí.", time: 258 },
  { text: "Ahora sí...", time: 278 },
  { text: "disfruta la canción. 🎶", time: 292 }
];

let currentLine = -1;

function updateLyrics() {
  if (!audio || !lyrics) return;

  const time = audio.currentTime;
  let index = -1;

  for (let i = 0; i < lyricsData.length; i++) {
    const current = lyricsData[i];
    const next = lyricsData[i + 1];
    const endTime = next ? next.time : current.time + 8;

    if (time >= current.time && time < endTime) {
      index = i;
      break;
    }
  }

  if (index === currentLine) return;

  currentLine = index;

  if (index === -1) {
    lyrics.classList.remove("lyrics-visible");
    lyrics.classList.add("lyrics-hidden");
    return;
  }

  lyrics.textContent = lyricsData[index].text;
  lyrics.classList.remove("lyrics-hidden");
  lyrics.classList.add("lyrics-visible");
}

audio.addEventListener("timeupdate", updateLyrics);
audio.addEventListener("seeked", updateLyrics);
audio.addEventListener("play", updateLyrics);

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }


setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
