let cabecero = document.getElementById("cabecero");
let parrafos = document.getElementsByTagName("p");
console.log(`cabecero: ${cabecero.innerHTML}`);
console.log(`parrafo: ${parrafo.innerHTML}`);

const timeout = async (numeroParrafo) => {
  cabecero.innerHTML = `Nuevo Cabecero`;
  await setTimeout(() => {
    parrafos[numeroParrafo].innerHTML = `Nuevo parrafo ${numeroParrafo + 1}`;
    console.log(
      `Se ha cambiado el parrafo ${numeroParrafo} a '${parrafos[numeroParrafo].innerHTML}'`
    );
  }, numeroParrafo * 3000 + 3000);
};

for (let i = 0; i < parrafos.length; i++) {
  timeout(i);
  console.log(i);
}

console.log("terminado");

console.log(parrafos);
