// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

function agregarAmigo(){
   //Capturar el valor del campo de entrada
   let inputAmigo = document.getElementById("amigo");
   let nombreamigo = inputAmigo.value;
   
   //Validar la entrada
   if(!nombreamigo){
      alert ("Por favor, inserte un nombre");
      return;
   }
   //Actualizar el array de amigos
   amigo.push(nombreamigo);
   //Limpiar el campo de entrada
   inputAmigo.value = "";
   inputAmigo.focus();
}