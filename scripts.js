// Variavel para avisar quando clicar no botão
const form = document.querySelector(".formulario")

// Variavel da mascara
const mascara = document.querySelector(".mascara-formulario")

// Função para avisar quando clicar no botão e puxar o form
function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
//Esconder form, cincando na mascara.
function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

