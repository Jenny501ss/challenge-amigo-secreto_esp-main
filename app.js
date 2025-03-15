// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

function agregarAmigo(){
   let inputAmigo = document.getElementById("amigo");
   let nombreamigo = inputAmigo.value;
   
   if(!nombreamigo){
      alert ("Debes ingresar un nombre por favor");
      return;
   }
   amigo.push(nombreamigo);
   inputAmigo.value = "";
   inputAmigo.focus();
}