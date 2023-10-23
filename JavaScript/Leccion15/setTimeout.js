let promesa = new Promise((resolved,rejected) => {
    let expression = true;
    if (expression){
    setTimeout((resolved) => {
        resolved('la promesa ha sido resuelta');
    },3000);
    }
    else{
        rejected(error);
    }}
);
