var caminho = "images/tela/";
var Imagens = ["Login.png","principal.png", "funcionario_teste.png"];
var NomeImagens = ["Tela de login","Tela principal","Tela de busca de funcionario"];
var index = 0;
let currentImageIndex = 0;

function redirecionamento(){
    window.alert("Voce sera redirecionado a uma nova aba para realizar contato.");
    window.open("https://suportehotelogix4.wixsite.com/hotelogix/blank-2", "_blanck");
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
    document.getElementById("screenload").src = (caminho+Imagens[index]);
    document.getElementById("screenload").alt = ""+(NomeImagens[index])
}

// Codigo para executar slide auto

function StartSlider(){
    max=3;
    min=1;
    order=min;
    animation=true;
    loadImage(caminho+"image1.jpg");
    setInterval(imageReplace, 5000);
}

function imageReplace(){
    order++;
    if(order>max){
        order=min;
    }
    loadImage(caminho+"image"+order+".jpg");
}

function loadImage(image){
    document.getElementById("moldura").src=image;
    document.getElementById("moldura").alt = "Imagem "+order;
    //document.getElementById("moldura").addEventListener("transitionend",EndAnimation);
}

/*function Next(){
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
        if(order<min){
          order=max;
        }
        loadImage(caminho+"image"+order+".jpg");
    }
}*/