const slides = [
  {
    eyebrow: "um carinho para você",
    title: "Uma mensagem do coração",
    message: "Sabia que você me faz feliz mesmo de longe? Até mesmo quando você não manda mensagem, ou quando não conversamos fora da escola, sempre penso em você, e isso melhora meu dia muito! A cada segundinho que eu passo com você, meu mundo vai ficando mais colorido, Agatha. Eu amo muito você.",
    button: "Próxima mensagem"
  },
  {
    eyebrow: "uma pausa para sorrir",
    title: "Se eu fosse o Ekko…",
    message: "Se eu fosse o Ekko, voltaria no tempo só para te encontrar mais cedo.",
    button: "Próxima mensagem"
  },
  {
    eyebrow: "com todo meu carinho",
    title: "Tenha um ótimo dia!",
    message: "Tenha um ótimo dia, minha WhiteWolf! Saiba que eu estou aqui, mesmo enviando mensagem ou não, estou sempre pensando em você e amando você cada vez mais. Que dias de mediações venham mais para que possamos ficar juntos mais uma vez como na quinta-feira.",
    button: "Ir para a musiquinha"
  },
  {
    eyebrow: "agora é só curtir",
    title: "Essa é para você, Agatha",
    message: "",
    button: "Voltar ao começo"
  }
];

const cardContent = document.querySelector(".card-content");
const eyebrow = document.querySelector("#eyebrow");
const title = document.querySelector("#title");
const messageArea = document.querySelector("#message-area");
const message = document.querySelector("#message");
const musicArea = document.querySelector("#music-area");
const nextButton = document.querySelector("#next-button");
const buttonText = nextButton.querySelector("span");
const progress = document.querySelector("#progress");
const progressDots = [...progress.querySelectorAll(".progress-dot")];

let currentSlide = -1;

function showSlide(index) {
  const slide = slides[index];
  currentSlide = index;

  cardContent.classList.remove("is-transitioning");
  void cardContent.offsetWidth;
  cardContent.classList.add("is-transitioning");

  eyebrow.textContent = slide.eyebrow;
  title.replaceChildren(document.createTextNode(slide.title));
  message.textContent = slide.message;
  messageArea.hidden = index === 3 ? false : !slide.message;
  musicArea.hidden = index !== 3;
  buttonText.textContent = slide.button;
  progress.setAttribute("aria-label", `Etapa ${index + 1} de ${slides.length}`);
  progressDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function showIntro() {
  currentSlide = -1;
  cardContent.classList.remove("is-transitioning");
  void cardContent.offsetWidth;
  cardContent.classList.add("is-transitioning");
  eyebrow.textContent = "uma surpresa especial";
  title.replaceChildren(
    document.createTextNode("Surpresa para "),
    Object.assign(document.createElement("span"), { textContent: "Renata Agatha" }),
    Object.assign(document.createElement("small"), { textContent: "feito por Lucas" })
  );
  messageArea.hidden = true;
  musicArea.hidden = true;
  buttonText.textContent = "Prosseguir";
  progress.setAttribute("aria-label", "Abertura");
  progressDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === 0);
  });
}

nextButton.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) {
    showIntro();
    return;
  }
  showSlide(currentSlide + 1);
});
