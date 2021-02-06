const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
let num;

const sw = n => {
  switch (n) {
    case 1:
        let miNumero = Number(prompt("Dime tu número"));
        for(let i=0; i<= miNumero;i++){
            console.log(i);    
        }
        break;
    case 2:
        let respuesta = ""
        do{
            respuesta = prompt("¿De qué color es el caballo blanco de Napoleón?");
        }while (!(respuesta.trim().toLowerCase() === "blanco"));
        break;
    case 3:
        let matematica = Number(prompt("Anota tu promedio de matemática"));
        let fisica = Number(prompt("Anota tu promedio de Fisica"));
        let ciencias = Number(prompt("Anota tu promedio de Ciencias"));
        let promedio=[matematica,fisica,ciencias];
        let resultado = 0.0;
          console.log(matematica,fisica,ciencias);
          for(let i= 0; i < promedio.length;i++) { 
            resultado = resultado + (promedio [i]);
        }
            resultado = Math.round(resultado / (promedio.length));
                     alert(`Tu promedio de notas es: ${resultado}`);
        break;
    case 4:
        let fruta1= prompt("Escribe tu primera fruta");
        let fruta2= prompt("Escribe tu segunda fruta");
        let fruta3= prompt("Escribe tu tercera fruta");
        let frutas=[fruta1,fruta2,fruta3];
        for(let i= 0; i < frutas.length;i++){
          if(frutas[i]=="manzana"){
        console.log("");}else{
        console.log(frutas[i]); 
              }
              }
              break;

    case 5:
        let nombre= prompt("Escribe tu nombre");
        function numeroVocales(texto) {
        return texto.replace(/[^aeiou]/g, '').length;  //El método replace() devuelve una nueva cadena con algunas o todas las coincidencias 
           }
              alert(`Cantidad de vocales de tu nombre:${numeroVocales(nombre)}`);
        let numeroTotal= nombre.match(/[a-z]/gi).length
        let numeroConsonante = numeroTotal - numeroVocales(nombre)
        alert(`Cantidad de Consonantes de tu nombre: ${numeroConsonante}`);
        break;

  }
}

uno.addEventListener("click", () => {
  num = 1
  sw(num);
});
dos.addEventListener("click", () => {
  num = 2
  sw(num);
});
tres.addEventListener("click", () => {
  num = 3
  sw(num);
});
cuatro.addEventListener("click", () => {
  num = 4
  sw(num);
});
cinco.addEventListener("click", () => {
    num = 5
    sw(num);
  });




