var caminho = "images/tela/";
var Imagens = ["Login.png","principal.png", "funcionario_teste.png"];
var NomeImagens = ["Tela de login","Tela principal","Tela de busca de funcionario"];
var index = 0;

function redirecionamento(){
    window.alert("Voce sera redirecionado a uma nova aba para realizar o contanto.");
    window.open("https://luizoliveira134.wixsite.com/hotelogix/blank-2", "_blanck");
}

function anterior(){
    index--;
    if(index<0){
        index = Imagens.length - 1;
    }
    updateImage();
}

function proximo(){
    index++;
    if(index >= Imagens.length){
        index = 0;
    }
    updateImage();
}

function updateImage(){
    document.getElementById("picture").src = (caminho+Imagens[index]);
    document.getElementById("picture").alt = ""+(NomeImagens[index])
}

// Codigo para executar slide auto
$(document).ready(
    function(){
        $('._slide').slick({
            autoplay: true, 
            //slidesToShow: 1,
            //slidesToScroll: 1,
            //autoplaySpeed: 2000,
            //cssEase: 'Linear'
    });
});