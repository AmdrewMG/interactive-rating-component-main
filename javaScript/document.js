//DECLARACION DE LAS CONST PARA SU USO
const contentStart = document.getElementById('content_star') //declarar variable del contenido1 section
const selecButton = document.getElementById('button')//se llama al boton submit con este, para usar en JS
const numberSelected = document.getElementById('numbers') //para el span 
const contentEnd = document.getElementById('content_end') //declarar variable del contenido final section 

    contentEnd.style.display = 'none'
    selecButton.addEventListener('click', selecOptions)

function selecOptions(){
    let seleccionada = document.querySelector('input[name="indoor-outdoor"]:checked').value;
    numberSelected.innerHTML = seleccionada //inyecta el valor en el span de HTML
    contentFinal()
}

function contentFinal(){
    contentEnd.style.display = 'block'
    contentStart.style.display = 'none' 
}



