$(document).ready(function() {
  // Inicializa o carousel
  $('#carouselExampleControls').carousel();
});

const contactButton = document.querySelector('#contact')
const buttonCloseModal = document.querySelector('.close')
const modal = document.querySelector('dialog')
buttonCloseModal.onclick = function() {
  modal.close()
}
contactButton.onclick = function() {
  modal.showModal()
}




document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("arrow-back");
  const forwardButton = document.getElementById("arrow-forward");
  const projetoImagem = document.getElementById("projeto-imagem");
  const projetoTexto = document.getElementById("projeto-texto");

  // Array com os conteúdos dos slides
  const slides = [
    {
      imagem: "../assets/placa-solar.jpg",
      texto: "Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide 1Texto do Slide ",
    },
    {
      imagem: "../assets/placa-solar2.jpg",
      texto: "Texto do Slide 2",
    },
    // Adicione mais slides conforme necessário
  ];

  let currentSlide = 0;

  function showSlide(index) {
    const slide = slides[index];
    projetoImagem.classList.remove("fade-in");
    projetoImagem.style.transform = "scale(0.8)";
  
    setTimeout(() => {
      projetoImagem.src = slides[index].imagem;
      projetoTexto.textContent = slides[index].texto;
      projetoImagem.classList.add("fade-in");
      projetoImagem.style.transform = "scale(1)";
    }, 300); // 300ms é o mesmo tempo que a duração da transição CSS
  }

  showSlide(currentSlide);

  backButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  forwardButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

// Função para lidar com a rolagem suave
function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop - 50, // Subtrai a altura do cabeçalho
  });
}

// Selecione todos os links âncora com o atributo href começando com #
const links = document.querySelectorAll('a[href^="#"]');

// Adicione um evento de clique a cada link
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    const targetId = link.getAttribute('href').substring(1); // Remove o #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      scrollToElement(targetElement);
    }
  });
});


// Função para rolar suavemente para o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Selecione o botão "scroll-to-top" pelo ID
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Adicione um evento de clique ao botão
scrollToTopBtn.addEventListener('click', scrollToTop);


// Selecione o elemento <h1> pelo ID
const pageTitle = document.getElementById('pageTitle');

// Adicione um evento de clique ao <h1> e chame a função scrollToTop()
pageTitle.addEventListener('click', scrollToTop);