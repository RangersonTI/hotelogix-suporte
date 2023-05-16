var caminho = "images/tela/";
var Imagens = ["Login.png","principal.png", "funcionario_teste.png"];
var NomeImagens = ["Tela de login","Tela principal","Tela de busca de funcionario"];
var index = 0;
let currentImageIndex = 0;

function redirecionamento(){
    window.alert("Voce sera redirecionado a uma nova aba para realizar o contanto.");
    window.open("https://suportehotelogix.wixsite.com/hotelogix/blank-2", "_blanck");
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

function StartSlider(){
    max=3;
    min=1;
    order=min;
    animation=true;
    loadImage(caminho+"image1.jpg");
    document.getElementById("moldura").addEventListener("transitionend",EndAnimation());
}

function EndAnimation(){
    animation=true
}

function loadImage(image){
    document.getElementById("moldura").style.backgroundImage="URL("+image+")";
}

function Next(){
    if(animation){
        animation=false
        order++;
        if(order>max){
            order=min;
        }
        loadImage(caminho+"image"+order+".jpg");
    }
}

function Before(){
    if(animation){
        animation=false
        order--;
        if(order<max){
          order=max;
        }
        loadImage(caminho+"image"+order+".jpg");
    }
}