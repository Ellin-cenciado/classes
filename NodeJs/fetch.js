/* const data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data)) */


/* async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
loadData() 

Con la nueva sintaxis puedo simplificar esto a

*/

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
} catch (error) {
    console.log(error);
}
//Para nuevas sintaxis buscar ecmascript 2024