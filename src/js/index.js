/*
Objetivo 1 -- Quando o user clicar no botão de veja trailer, devemos abrir a modal com o video do trailer.
    - Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando Js 
    - Passo 2 - dar um jeito de identificar quando o usuario clicar no botão
    - Passo 3 - dar um jeito de pegar o elemento da modal no js
    - Passo 4 - abrir modal na tela 

Objetivo 2 -- Quando o user clicar no X devemos fechar a modal
    - Passo 1 - dar um jeito de pegar o elemento de fechar modal usando js 
    - Passo 2 - dar um jeito de identificar quando o usuario clicar no x 
    - Passo 3 - fechar a modal 
*/


console.log(document);


const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

console.log(document.querySelector(".botao-trailer"));

function alternarModal(){
    modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {

    
    video.setAttribute("src", "");
    alternarModal();

});

