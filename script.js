const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");
const erro = document.getElementById("erro");
const musicaSim = document.getElementById("musicaSim");
const musicaNao = document.getElementById("musicaNao");
const container = document.getElementById("container");

let tremorTimeout;

botaoSim.addEventListener("click", () => {
  // Cancela ação do NÃO
  clearTimeout(tremorTimeout);
  container.classList.remove("tremor");
  erro.style.display = "none";
  musicaNao.pause();
  musicaNao.currentTime = 0;

  // Ação do SIM
  musicaSim.play();
  mensagem.style.display = "block";
  botaoSim.disabled = true;
  botaoNao.disabled = true;
});

botaoNao.addEventListener("click", () => {
  musicaNao.play();
  erro.style.display = "block";
  container.classList.add("tremor");

  tremorTimeout = setTimeout(() => {
    erro.style.display = "none";
    container.classList.remove("tremor");
  }, 9000); // 9 segundos
});