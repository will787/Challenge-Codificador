var TextInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");



function criptografar() {
    var texto = TextInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/, "ufat");

    document.getElementById('output').innerHTML = '<textarea id="input-texto">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    
}

function descriptografar() {
    var texto = TextInput.value;
     
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea id="input-texto">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' 

}


function copiar() {
    var textoCop = document.getElementById('input-texto');
    textoCop.select();
    document.execCommand('copy');

    alert('Seu texto foi copiado');
}

function apagarTexto() {
     var TextInput = document.querySelector('#input-texto'); 
     TextInput.value = '';
     window.location.reload(true); 
};


	

