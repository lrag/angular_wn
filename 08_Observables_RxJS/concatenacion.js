const https = require("https")
//npm install rxjs
const Observable = require("rxjs").Observable
const rxjs = require("rxjs")


let observable1 = new Observable(function(subscribers){
    subscribers.next(42)
    subscribers.complete()
})

let observable2 = new Observable(function(subscribers){
    subscribers.next(15)
    //subscribers.error("ZAS")
    subscribers.complete()
})

let observable3 = new Observable(function(subscribers){
    subscribers.next(23)
    subscribers.complete()
})

/*
let observable4 = new Observable(function(subscribers){
    subscribers.next(42)
    subscribers.next(15)
    subscribers.next(23)
    subscribers.complete()
})
*/

/*
rxjs.concat(observable1,observable2,observable3)
    .subscribe({ 
        next: rs => console.log(rs),
        error: err => console.log(err)
    })*/

//rxjs.of(11,22,33,44,55,66).subscribe(valor => console.log(valor))

//Lo mismo con un observable
let observable4 = new Observable(function(subscribers){
        subscribers.next("hola")
        subscribers.next("que")
        subscribers.next("andais")
        subscribers.next("haciendo")
        subscribers.next("un")
        subscribers.next("viernes")
        subscribers.next("por")
        subscribers.next("la")
        subscribers.next("tarde")
        subscribers.complete()
    })

observable4
    .pipe(
       rxjs.map( palabra => palabra.toUpperCase() ), 
       rxjs.filter( palabra => palabra.length>=5),
       rxjs.map( palabra => palabra +"-"+ palabra.length )
    )
    .subscribe(valor => console.log(valor))
   

observable1.pipe(
    rxjs.mergeMap( rs => {
        console.log(rs)
        return observable2
    }),
    rxjs.mergeMap( rs => {
        console.log(rs)
        return observable3
    })
    ).subscribe({ next: rs => console.log(rs), error: err => console.log(err)})



///////////////////////////////////

function buscarPorCorreoE(correoE){

    return new Observable(function(subscriber){
        let options = {
            host: 'reqres.in',
            path: '/api/users',
            port: '443',
            method: 'GET'
        }

        let req = https.request(options, function(respuesta){
            let json = ""
            respuesta.on("data", function(chunk){
                json+=chunk
            })
            respuesta.on("end", function(){
                let usuarios = JSON.parse(json).data
                let usuario = usuarios.find( u => u.email==correoE)
                subscriber.next(usuario)
                subscriber.complete()
            })
        })
        req.on("error", function(error){
            console.log(error)
            subscriber.error(error)
            subscriber.complete()
        })
        req.end()
    })

}

function enviarPeticionRegistrarUsuario(usuario){

    return new Observable(function(subscriber){
        let options = {
            host: 'reqres.in',
            path: '/api/register',
            port: '443',
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            }
        }

        let req = https.request(options, function(respuesta){
            let json = ""
            respuesta.on("data", function(chunk){
                json+=chunk
            })
            respuesta.on("end", function(){
                let respuesta = JSON.parse(json)
                subscriber.next(respuesta)
                subscriber.complete()
            })
        })
        req.on("error", function(error){
            console.log(error)
            subscriber.error(error)
            subscriber.complete()
        })
        req.write(JSON.stringify(usuario))
        req.end()
    })

}


function registrarUsuario(usuario){

    return buscarPorCorreoE(usuario.email)
    .pipe(
        rxjs.mergeMap(usuarioEncontrado => {
            if(usuarioEncontrado){
                throw new Error("Ya existe un usuario con ese correoE")
            }
            return enviarPeticionRegistrarUsuario(usuario)
        })
    )

}

let usuario = {
    "email": "eve.holta@reqres.in",
    "password": "pistol"
}

registrarUsuario(usuario)
.subscribe({
    next : rs  => console.log(rs),
    error: err => console.log("YEPA:",err.message)
})



