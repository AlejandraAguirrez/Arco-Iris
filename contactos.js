const datos = document.getElementById('datos')
const formulario = document.getElementById('form') 

formulario.onsubmit = (event) => {
    event.preventDefault()
    const informacionArray = []
    for (const input of event.target.children){
        const obj = {}
        obj ['tipo'] = input.name
        obj ['valor'] = input.value
        informacionArray.push(obj) 
    }
        console.log(informacionArray)
        localStorage.setItem('info',JSON.stringify(informacionArray))
}

const informacion = JSON.parse(localStorage.getItem('info'))

let nombre = ''
let apellido = ''
informacion.forEach(dato=>{
    if (dato.tipo==='name'){
        nombre = dato.valor  
    }
    if (dato.tipo==='lastname'){
        apellido = dato.valor
    }
})
console.log('name', nombre)
console.log ('lastname',apellido)
if(nombre!=='' ||apellido!==''){
datos.innerText = `Hola ${nombre} ${apellido}, Bienvenido a inflables Arco Iris!`
}


