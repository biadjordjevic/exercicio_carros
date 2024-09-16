function Enviar(){
    const marca = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value
    const cor = document.getElementById('cor').value

    const carros = {
        marca: marca,
        modelo: modelo,
        cor: cor
    }

    localStorage.setItem('carros', JSON.stringify(carros))

}