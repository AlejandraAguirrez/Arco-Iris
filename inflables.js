let juegosVarios = []
let carrito = []

const juegosVariosCard = document.getElementById('juegosVarios')

class juegosPlazaInflables{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let metegol = new juegosPlazaInflables('metegol', 3700, 0)
let sapo = new juegosPlazaInflables('sapo', 4500, 1)
let arcade = new juegosPlazaInflables('arcade', 8500, 2)

let tobogan = new juegosPlazaInflables('tobogan', 3500, 3)
let saltarin = new juegosPlazaInflables('saltarin', 2600, 4)
let circuito = new juegosPlazaInflables('circuito', 7500, 5)

let castillo = new juegosPlazaInflables('castillo', 8000, 6)
let ring = new juegosPlazaInflables('ring',12000, 7)
let barco = new juegosPlazaInflables('barco', 13500, 8)

juegosVarios.push(metegol)
juegosVarios.push(sapo)
juegosVarios.push(arcade)
juegosVarios.push(tobogan)
juegosVarios.push(saltarin)
juegosVarios.push(circuito)
juegosVarios.push(castillo)
juegosVarios.push(ring)
juegosVarios.push(barco)

juegosVarios.forEach(juegosPlazaInflables=>{
    const option = document.createElement('option')
    option.innerText = `${juegosPlazaInflables.nombre}: $${juegosPlazaInflables.precio}`
    juegosVariosCard.append(option)
})

const botonCarrito = document.createElement('button')
botonCarrito.innerText = 'Agregar producto'
document.body.append(botonCarrito)

const botonAlquilar = document.createElement('button')
botonAlquilar.innerText = 'Alquilar'
document.body.append(botonAlquilar)

botonCarrito.onclick = () =>{
    const eleccion = juegosVarios[juegosVariosCard.selectedIndex]
    console.log(eleccion)
    carrito.push(eleccion)
    console.log(carrito.length)
}

botonAlquilar.onclick = () =>{
    console.log(carrito)
    let totalAlquiler = 0
    carrito.forEach((juegosVarios)=>{
    totalAlquiler = totalAlquiler + juegosVarios.precio
    })
alert(`El total del alquiler es ${totalAlquiler}`) 
}
