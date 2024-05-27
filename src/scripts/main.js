//Comportamento do nav

const navbar = document.querySelector('.nav');
const isHidden = document.querySelector('.element--hidden')
const button1 = document.querySelector('.button--1')

document.addEventListener("scroll", function() {
    const posicaoy = window.pageYOffset;

    if (posicaoy == 0) {
        navbar.style.backgroundColor = "transparent";
        isHidden.style.display = "none";
        button1.style.display = "none";

    } else {
        navbar.style.backgroundColor = "#0e0b14";
        isHidden.style.display = "block";
        button1.style.display = "block";
    }
});

/*
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var fundo = document.querySelector('.hero');
    var opacidade = scrollTop / 200; // Ajuste conforme necessário
    var corParametro = 'rgba(26, 29, 41, 0.7)'; // Defina a cor do parâmetro aqui (no formato hexadecimal)
    if (scrollTop < 500) { // Defina a posição para a mudança de cor
        fundo.style.backgroundColor = `rgba(26, 29, 41, ${opacidade})`;
        fundo.style.opacity = '0.7'
    } else {
      fundo.style.backgroundColor = corParametro; // Altera para a cor do parâmetro
    }
});
*/