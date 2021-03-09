/*var lista = ["maçã", "pera"];
lista.push("uva");
lista.pop();
console.log(lista);*/

function clicou(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"; 
}

function redirecionar(){
   window.open("https://www.google.com.br");//outra aba
   window.location.href = "https://www.google.com.br"//mesma janela

}

function trocar(elemento){
   //alert("Trocar texto");
   //document.getElementById("mousemove").innerHTML = "Troquei texto";
   elemento.innerHTML = "Troquei texto";
   
}

function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Troquei texto";
   elemento.innerHTML = "Passe mouse aqui"
}

function load(){
      alert("pagina carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}
