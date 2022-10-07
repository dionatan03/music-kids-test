let audio = document.querySelectorAll("audio")[0];
let listaMusica = new Array();
let atual = 0;

listaMusica[0] = "./audio/boi.mp3";
listaMusica[1] = "./audio/bolofofos.mp3";
listaMusica[2] = "./audio/carro.mp3";
listaMusica[3] = "./audio/criancas.mp3";
listaMusica[4] = "./audio/elefante.mp3";
listaMusica[5] = "./audio/gato.mp3";
listaMusica[6] = "./audio/leao.mp3";
listaMusica[7] = "./audio/peixe.mp3";
listaMusica[8] = "./audio/sol.mp3";
listaMusica[9] = "./audio/tigre.mp3";

function selecionaMusica(posicao) {
  atual = posicao;
  iniciaMusica();
}

function trocaMusica() {
  atual++;
  if (atual >= listaMusica.length) {
    atual = 0;
  }
  iniciaMusica();
}

function iniciaMusica() {
    audio.src = listaMusica[atual];
    audio.load();
    audio.play();
  }

  audio.addEventListener("ended", trocaMusica, false);
  audio.addEventListener("error", trocaMusica, true);
