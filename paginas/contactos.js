const datos = document.getElementsByClassName('datos')
const formulario = document.getElementsByClassName('form')

formulario.onsubmit = (event) => {
    event.preventDefault()
    for (const input of event.target.children){
        const obj = {}
        obj ['tipo'] = input.name
        obj ['valor'] =input.value
        console.log(obj)
        localStorage.setItem(obj.tipo,obj.valor)
    }
}