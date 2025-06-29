const jukebox = {
  margaret: {
    videoId: "ZRJY0Xp_BuA",
    msg: `Essa música é muito especial para mim. Além de ser uma das minhas favoritas da vida,
  ela me lembra a você - na primeira frase do refrão: "when you know, you know".
  Com você, eu tive certeza de algo que nunca tive na vida inteira.
  Eu nunca quis ser nada de ninguém... 
  Com você, foi diferente.`
  },
  heres_to: {
    videoId: "XCf_kdmmVNE",
    msg: `Além de ser uma música do meu filme favorito, essa frase sempre me tocou: "here's to the fools who dream, 
    foolish as they may seem". Você é o maior exemplo dessa frase para mim. Eu te admiro muito
    por sonhar tão alto, mesmo que as pessoas achem que é algo impossível. E eu não tenho dúvidas
    que, se você não desistir e se esforçar cada vez mais, você vai conquistar tudo o que sonha, meu amor. `
  },
  scared_of_loving_you: {
    videoId: "Gtbhuuy1j7s",
    msg: "A letra fala por si só :)"
  },
  invisible_string: {
    videoId: "OuFnpmGwg5k",
    msg: `Acredito que Deus nos uniu por um motivo, que foi destino nós nos encontrarmos. Você é o meu invisible string. De um jeito ou
    de outro nossos caminhos iriam se cruzar porque estavámos sempre conectados. Era só uma questão de tempo.`
  },
  lover: {
    videoId: "cvUAzpn48xA",
    msg: `A letra dessa música fala sobre um futuro juntos e é isso que eu vejo com você. 
    Seja em NY ou em Portugal, quero estar com você. Vamos viajar o mundo juntos, conhecer o Japão, a Coreia, o México, o EGITO... Eu te amo tanto 
    que posso até considerar ir para a India só por você. Quero viver todos esse sonhos com você.`
  },
  those_eyes: {
    videoId: "b_CpWmkhwq0",
    msg: `Eu te amo meu amor. Eu sou completamente apaixonada por você desde o primeiro dia que a gente ficou,
    me dá até um pouquinho de medo. 
    Ps: A letra também fala por si só.`
  }
};

// Carrega a API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '300',
    width: '480',
    videoId: '', // inicia vazio
    events: {}
  });
}

// Essa função é chamada pelos botões no HTML
function tocar(estilo) {
  const musica = jukebox[estilo];

  if (!player) {
    console.warn("O player ainda não está pronto.");
    return;
  }

  if (musica) {
    document.getElementById("player").classList.remove("oculto");
    player.loadVideoById(musica.videoId);
    document.getElementById("mensagem").textContent = musica.msg;
  } else {
    console.warn("Estilo não encontrado:", estilo);
  }
}
