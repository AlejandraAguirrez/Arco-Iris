const productos= []
const carrito = []

const contenedorCarrito = document.getElementById('carrito-contenedor')
const listaCarrito = document.getElementById('carritoContenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const contador = document.getElementById('contador')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
// const cantidadTotal = document.getElementById('cantidadTotal')


class Juegos{
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    //creacion de cards
    desplegarJuegos(){ 
        const containerCard = `
        <div class="containerCard">
            <img src=${this.img} alt="">
            <h4>${this.nombre}</h4>
            <p>$${this.precio}</p>
            <button id=${this.id} class="btnAgregar">Agregar🛒</button>
            </div>
            `
            const container = document.getElementById('container')
            container.innerHTML += containerCard
    }
    agregarCarrito(){
        const agregar = document.getElementById(this.id)
        const juegoElegido = productos.find(product => product.id == this.id)
        agregar.addEventListener('click', () =>agregarAlCarrito(juegoElegido))
    }
}

let juegosdeMesa = new Juegos( '0','Juego de Mesa', 3700, '../imagenes/juegos.jpg')
let plaza= new Juegos( '1', 'Plaza', 18500, '../imagenes/peloterito-y-auto.jpg')
let castillo = new Juegos( '2','Castillo', 8000,'../imagenes/castillos.jpg')
let tobogan = new Juegos( '3','Tobogan', 23500, '../imagenes/tobogan.jpg')
let plazaBlanda = new Juegos( '4','Plaza Blanda', 36500,'../imagenes/plazablanda.jpg')
let tejo = new Juegos( '5','Tejo', 13500,'../imagenes/download.jpg')

productos.push(juegosdeMesa, plaza, castillo, tobogan, plazaBlanda, tejo)

console.log(productos)

productos.forEach(e => {
    e.desplegarJuegos()
})
productos.forEach(e => {
    e.agregarCarrito()
})


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

function agregarAlCarrito(producto) {
    const enCarrito = carrito.find(prod => prod.id == producto.id)
    if (!enCarrito) {
        carrito.push({...producto, cantidad: 1})
} else {
    const carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
    carrito = [
        ...carritoFiltrado,
        { ...enCarrito, cantidad: enCarrito.cantidad + 1}
    ]
}
actualizarCarrito()
console.log(carrito)
}   


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
//estructura de cada producto en el contenedor carrito
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
  
   contador.innerText = carrito.length //al vaciar carrito vuelve contador a 0
    console.log(carrito)
   precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)//muestra precio total 

    
}

const alquilar = document.getElementById('alquilar')

alquilar.onclick = () => {
    let totalAlquiler = 0
    carrito.forEach ((prod)=>{
    totalAlquiler = totalAlquiler + prod.precio
})

    swal.fire({
        title: 'El total del alquiler es de',
        text:`${'$'+totalAlquiler}`,
        timer:5000,
})
}




