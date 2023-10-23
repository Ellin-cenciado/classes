//async indica que una funcion devuelve una promesa
async function miFuncionPromesa() {
    return "Funcion con async";
}

//miFuncionPromesa().then(valor => console.log(valor));

//Await es para esperar el resultado de una promesa

//async/await
/* async function funcionConPromesaYAwait(){
    promesa = new Promise(resolver => {
        setTimeout(() => {resolver('Promesa con await');
    },3000)});
    console.log(await promesa);
}

funcionConPromesaYAwait(); */

//promesas, await, async y setTimeout

/* This didn't work out

async function funcionAsync(){
    let valor = false;
    let promesa = new Promise((resolved,rejected) => {
        setTimeout(() =>{
            if(!valor) {
            for(let i = 0; i < 4 && !valor; i++){
                valor = true;
                console.log(`Changing value, attempt: ${i}\n`);
            }}
            valor = false;
            if(!valor){
                rejected('something went wrong...');
            }
            else{
                resolved("Everything's fine");
            }},3000);
    });
    console.log(await promesa);
} */

/* 
So, this piece of code is a simulation of an asyncronous task, whereas "value" is a boolean, it emulates
multiple attempts at changing this value to true, if it succedes, then "everything's fine" is going to be printed
if it fails, it will try again 4 times before giving up and printing an error message.
*/
async function AsyncFun(value) {
    let trueValue = value;
    const promesa = new Promise((resolve, reject) => {
        let i = 0;
        const attemptChangeValue = () => {
            if (i < 4 && !trueValue) {
                console.log(`Attempting to change value: ${i + 1}/4 att.`);
                trueValue = false; //Change this to true and everything's gonna be fine
                i++;
                setTimeout(attemptChangeValue, 1000);
            } else {
                if (!trueValue) {
                    reject("Something went wrong");
                } else {
                    resolve("Everything is fine!");
                }
            }
        };
        setTimeout(attemptChangeValue, 0);
    });
    try {
        console.log(await promesa);
    } catch (error) {
        console.log(error);
    }
}
AsyncFun(false);
//OH MY FUCKING GOD, I'VE SPENT IRRECUPERABLE HOURS WORKING ON THIS SHIT AND FINALLY WORKED, IM SO FUCKING HAPPY
