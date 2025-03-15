// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

//Funcion para agregar amigos
function agregarAmigo(){
   //1. Capturar el valor del campo de entrada
   let inputAmigo = document.getElementById("amigo");
   let nombreamigo = inputAmigo.value;
   
   //2. Validar la entrada
   if(!nombreamigo){
      alert ("Por favor, inserte un nombre");
      return;
   }
   //3. Actualizar el array de amigos
   amigo.push(nombreamigo);
   //4. Limpiar el campo de entrada
   inputAmigo.value = "";
   inputAmigo.focus();

   MostrarAmigos()
}

//Funcion para actualizar la lista de amigos
function MostrarAmigos(){
   //1. Obtener el elemento de la lista
   let listaAmigos = document.getElementById("listaAmigos");
   //2. Limpiar la lista existente
   listaAmigos.innerHTML = "";

   //Iterar sobre el arreglo
   for (let i=0; i < amigo.length; i++){
      let item = document.createElement("li");
      //Agregar elementos a la lista
      item.textContent = amigo[i];
      listaAmigos.appendChild(item);
   }
}