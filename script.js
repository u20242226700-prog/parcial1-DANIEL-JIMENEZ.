let carrito = 0

function cambiarTexto(){
document.getElementById("descripcion").innerHTML =
"Ahora estás viendo nuestras ofertas"
}

function agregarCarrito(){

carrito++

document.getElementById("contenidoModal").innerHTML =
"Productos agregados: " + carrito

let modal = new bootstrap.Modal(document.getElementById('modalInfo'))
modal.show()

}

function cambiarModo(){

let body = document.body
let btn = document.getElementById("modoBtn")

body.classList.toggle("modoOscuro")

if(btn.innerText == "Modo oscuro"){
btn.innerText = "Modo claro"
}
else{
btn.innerText = "Modo oscuro"
}

}

function enviarFormulario(){

let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let edad = document.getElementById("edad").value
let telefono = document.getElementById("telefono").value
let correo = document.getElementById("correo").value

let regexNombre = /^[a-zA-Z ]+$/
let regexCorreo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
let regexTelefono = /^[0-9]{7,10}$/

if(!regexNombre.test(nombre)){
alert("Nombre inválido")
return false
}

if(!regexCorreo.test(correo)){
alert("Correo inválido")
return false
}

if(!regexTelefono.test(telefono)){
alert("Teléfono inválido")
return false
}

document.getElementById("contenidoModal").innerHTML =
`
Nombre: ${nombre}<br>
Apellido: ${apellido}<br>
Edad: ${edad}<br>
Telefono: ${telefono}<br>
Correo: ${correo}
`

let modal = new bootstrap.Modal(document.getElementById('modalInfo'))
modal.show()

return false

}