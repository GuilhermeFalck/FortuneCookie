let lucks = [
  "nothing",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

const cookie = document.querySelector(".cookie");
const tryAgain = document.querySelector(".tryAgain");
const text = document.querySelector("#text");

function number() {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
}
let randomNumber = number();

cookie.addEventListener("click", function () {
  document.querySelector(".cookieHome").classList.add("hide");
  document.querySelector(".cookieLuke").classList.remove("hide");
  text.innerText = lucks[randomNumber];
});

tryAgain.addEventListener("click", function () {
  document.querySelector(".cookieHome").classList.remove("hide");
  document.querySelector(".cookieLuke").classList.add("hide");
  randomNumber = number();
});
