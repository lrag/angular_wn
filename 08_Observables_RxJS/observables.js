//npm install rxjs
var rxjs_1 = require("rxjs");
const Observable = require("rxjs").Observable

//PROMESAS//////////////////////////////////////////////
/*
let promesa = new Promise(function(resolve, reject){
    //código asociado a la promesa

    //Resolve es la función que se pasa en el 'then'
    resolve("OK (promesa)")
    //reject es la función que se pasa en el 'catch'
    //reject("ZASCA!")
})

promesa.then( mensaje => console.log(mensaje) )
promesa.catch( err => { console.log(err)} )
*/

//OBSERVABLES///////////////////////////////////////////
/*
let observable = new Observable(function(subscribers){
    console.log("procesando....")
    subscribers.next("OK (observable)")
    //subscribers.error("ZASCA TARRASCA!")
    subscribers.complete()
})

observable.subscribe(
    //Esta función es subscriber.next
    mensaje => console.log(mensaje),
    //Esta funcion es subscriber.error
    error => console.log("Error:"+error) 
)
*/

/*
//Un observable puede invocar 'next' várias veces
function movida(){
    return new Observable(function(subscriber){
        subscriber.next(1)
        subscriber.next(2)
        subscriber.next(3)
        subscriber.next(4)
        subscriber.next(5)
        subscriber.next(6)
        subscriber.complete()
    })
}

movida().subscribe(
    numero => console.log("Subscriptor:"+numero)    
)
*/

//Idéntico al anterior, pero más efectista...
let observable3 = new Observable(function(subscriber){

    subscriber.next(1)
    
    setTimeout(function(){
        subscriber.next(2)
    }, 1000)
    setTimeout(function(){
        subscriber.next(3)
    }, 2000)
    setTimeout(function(){
        subscriber.next(4)
    }, 3000)
    setTimeout(function(){
        subscriber.next(5)
    }, 4000)
    setTimeout(function(){
        subscriber.next(6)
    }, 5000)
    setTimeout(function(){
        subscriber.next(7)
    }, 6000)
    setTimeout(function(){
        subscriber.next(8)
    }, 7000)

    setTimeout(function(){
        subscriber.complete()
    }, 8000)
    
})

//A un observable se puede subscribir vários subscriptores
observable3.subscribe(
    numero => console.log("Subscriptor 1:"+numero)    
)
observable3.subscribe(
    numero => console.log("Subscriptor 2:"+numero)    
)
observable3.subscribe(
    numero => console.log("Subscriptor 3:"+numero)  
)
