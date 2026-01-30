//promises
let myPromises = new Promise((resolve,reject) => {
    let iscakeavailable = true;

    if (iscakeavailable){
        resolve("promise resolve");
    }else{
        reject("promise rejected");
    }
});
myPromises.then((msg) =>{
    console.log(msg);
});