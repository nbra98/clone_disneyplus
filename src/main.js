document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      hiddenHeaderElements();
    } else {
      visibleHeaderElements();
    }
  })

  function hiddenHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
  }
  
  function visibleHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
  }

  // Seção de Atrações - Programação das Abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(button) {
      const abaAlvo = button.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      esconderAbas();
      aba.classList.add('shows__list--is-active');
      removeBotaoAtivo();
      button.target.classList.add('shows__tabs__button--is-active');
    })
  }

  // Seção FAQ - Accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
})

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function esconderAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}

function abreOuFechaResposta(elemento) {
  const classe = 'faq__questions__item--is-open';
  const elementoPai = elemento.target.parentNode;
  console.log(elementoPai);

  elementoPai.classList.toggle(classe);
}