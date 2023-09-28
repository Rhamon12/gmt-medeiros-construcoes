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
      imagem: "../assets/infraestrutura.jpg",
      titulo: "Oportunidades na Infraestrutura Viária",
      texto: "Se você é apaixonado por infraestrutura viária e deseja contribuir para a melhoria das estradas, temos estágios disponíveis para trabalhar em desafios como buracos, crateras, alagamentos, passagens molhadas, galerias de águas pluviais e bacias de captação, com uma remuneração de R$ 3.000,00.",
    },
    {
      imagem: "../assets/big-construction.jpg",
      titulo: "Desafios em Grandes Construções",
      texto: "Se você é um entusiasta das grandes construções e deseja ganhar experiência em projetos de pontes e estruturas impressionantes, oferecemos estágios com uma remuneração competitiva de R$ 4.500,00.",
    },
    {
      imagem: "../assets/construcao.jpg",
      titulo: "Projetos de Engenharia e Arquitetura em REVIT",
      texto: "Se você é fascinado pelo mundo do design e da modelagem tridimensional, temos estágios emocionantes na área de projetos de engenharia e arquitetura em REVIT, com uma remuneração de R$ 4.500,00.",
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
      projetoTexto.innerHTML = `<h2>${slide.titulo}</h2><p>${slide.texto}</p>`;
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