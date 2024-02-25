function mifuncion(){
    console.log("Mi funcion");
}

// let mifuncionflecha = () => {
//     console.log("Mi funcion flecha");
// }

mifuncion();
// mifuncionflecha();

const saludar = () => {
    return 'hola';
}

console.log(saludar());

const regresaObjeto = () => ({nombre : 'Juan',
                              apellido: 'Perez'});

console.log(regresaObjeto());

const funcionConParametros = (mensaje) => {console.log(mensaje);}

funcionConParametros('hola');

const funcionConParametros2 = (param1,param2) => {
    let resultado = param1 + param2;
    return `El resultado es: ${resultado}`;
}

console.log(funcionConParametros2(1,2));
