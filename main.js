// Variavéis
const Screen1 = document.querySelector(".screen1");
const Screen2 = document.querySelector(".screen2");
const Biscoito = document.querySelector("#Biscoito");
const BiscoitoQuebrado = document.querySelector("#Biscoito-quebrado");
const BntTryAgay = document.querySelector("#btnBiscoito");
const Sort = document.querySelector('.Sort');
let RandomSorte = Math.round(Math.random() * 7);
const BilhetesDaSorte = [
  {
    p: "Se alguém está tão cansado que <br> não possa te dar um sorriso,  <br> deixa-lhe o teu."
  },
  {
    p: "Procure acender uma vela em vez <br> de amaldiçoar a escuridao."
  },
  {
    p: "Não posso te ajudar, sou <br> apenas uma frase no biscoito."
  },
  {
    p: "A maior barreira para o sucesso <br> é o medo do fracasso."
  },
  {
    p: "Seja o tipo de energia <br> que deseja atrair."
  },
  {
    p: "Sorria, com os dentes, <br> com os lábios e com a alma."
  },
  {
    p: "As platas também precisam de <br> chuva para crescer."
  },
  {
    p: "Há tanta gente <br> querendo te ver bem."
  },
];

// CallBack
function HandleClick() {
  Screen1.classList.toggle('hide');
  Screen2.classList.toggle('hide');
  Sort.innerHTML = `
    <p id="Sorte">
      ${BilhetesDaSorte[RandomSorte].p}
    </p>
  `
};

function TryAgain() {
  Screen1.classList.toggle('hide');
  Screen2.classList.toggle('hide');
  RandomSorte = Math.round(Math.random() * 7);
};

function TryAgainButton(e) {
  if(e.key == 'Enter' && Screen1.classList.contains('hide')) {
    TryAgain()
  }
};

// Botões e clicks: Eventos
Biscoito.addEventListener('click', HandleClick);
BntTryAgay.addEventListener('click', TryAgain);
document.addEventListener('keypress', TryAgainButton)