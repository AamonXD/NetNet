let btn = document.querySelector('.btn-primary');

let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

function formulario (){
    let name = document.getElementById('inputName').value;
    let lastName = document.getElementById('inputLastName').value;
    let cel = document.getElementById('inputTel').value;
    let mail = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    let datosArray = [datos = {
        "nombre": `${name}`,
        "Apellido": `${lastName}`,
        "Teléfono": `${cel}`,
        "email": `${mail}`,
        "contraseña": `${password}`
    }]; 
    localStorage.setItem('datosArray', JSON.stringify(datos));
    let timerInterval
Swal.fire({
  title: '¡¡Bien hecho!!',
  html: `hola ${datos.nombre}, bienvenido a NetNet <b></b> users.`,
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
});
    console.log(datosArray);
};

btn.addEventListener('click', (e) => {
    formulario();
});

function mostrarDatos(datosArray) {
    let frag = document.createDocumentFragment();
    let capturaRespuesta = document.querySelector('#respuesta');
    let mostrar = localStorage.getItem('datosArray');
    mostrar = JSON.parse(mostrar);
    console.log(mostrar);
    frag.textContent(mostrar);
    capturarRespuesta.appendChild(frag);
};