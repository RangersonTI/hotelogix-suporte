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
const images = document.querySelectorAll('.imagens-objetivo');
setInterval(() =>{
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex+1)%images.length;
    images[currentImageIndex].classList.add('active');
}, 1000);