function mifuncion(){
    console.log("Funcion 1");
}

function mifuncion2(){
    console.log("Funcion 2");
}
mifuncion();
mifuncion2();

//Funcion tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(resultado); //Es una funcion que luego se pasa como parametro
}


sumar(5,3,imprimir);

//Llamadas asincronas con uso setTimeout
function mifuncionCallback(){
    console.log("saludo asincrono desp. de 3 seg");
}

setTimeout(mifuncionCallback,3000);
setTimeout( function(){console.log("Saludo desp de 3 seg")},3000);
setTimeout( () => console.log("whatever"),3000);