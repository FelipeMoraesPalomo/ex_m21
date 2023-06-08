document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-faq-question]');

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'curiosities__list__item--is-open';
    const elementoPai= elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}