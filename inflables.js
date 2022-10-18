//PAGINA INICIO CARD: VARIEDAD DE JUEGOS

let variedadJuegos = []
const juegosCard= document.getElementById('variedadJuegos')

class juegosVariedad{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let metegol = new juegosVariedad('metegol', 3700)
let sapo = new juegosVariedad('sapo', 4500)
let arcade = new juegosVariedad('arcade', 8500)

variedadJuegos.push(metegol)
variedadJuegos.push(sapo)
variedadJuegos.push(arcade)

variedadJuegos.forEach(juegosVariedad=>{
    const option = document.createElement('option')
    option.innerText = `${juegosVariedad.nombre}: $${juegosVariedad.precio}`
    juegosCard.append(option)
})

//PAGINA iNICIO CARD: PLAZA BLANDA

let plazaBlanda = []
const plazaCard= document.getElementById('plazaBlanda')

class plaza{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let tobogan = new plaza('tobogan', 3500)
let saltarin = new plaza('saltarin', 2600)
let circuito = new plaza('circuito', 7500)

plazaBlanda.push(tobogan)
plazaBlanda.push(saltarin)
plazaBlanda.push(circuito)

plazaBlanda.forEach(plaza=>{
    const option = document.createElement('option')
    option.innerText = `${plaza.nombre}: $${plaza.precio}`
    plazaCard.append(option)
})

//PAGINA INICIO  CARD: INFLABLES

let inflables = []
const inflablesCard= document.getElementById('inflables')

class inflable{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let castillo = new inflable('castillo', 8000)
let ring = new inflable('ring',12000)
let barco = new inflable('barco', 13500)

inflables.push(castillo)
inflables.push(ring)
inflables.push(barco)

inflables.forEach(inflable=>{
    const option = document.createElement('option')
    option.innerText = `${inflable.nombre}: $${inflable.precio}`
    inflablesCard.append(option)
})

const btnConcurso = document.getElementById('btnConcurso')
const lista = document.getElementById('lista')

btnConcurso.onclick = () =>{
     fetch('https://rickandmortyapi.com/api/character')
    .then(response=>response.json())
    .then(info=>{
        const ganadores = info.results
        ganadores.splice(5)
        console.log(ganadores.length)
        lista.innerHTML = ''
        ganadores.forEach(ganador => {
            const li = document.createElement('li')
            li.innerHTML = `<h3>${ganador.name}</h3>
                            <p>${ganador.species}</p>`
        lista.append(li)
        }) 
    })
}
