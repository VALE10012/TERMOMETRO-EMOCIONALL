
function cargarpagina(pagina) {
    fetch('pages/' + pagina)
    .then(response => {
        if(!response.ok) {
            throw new Error ('Error al cargar la pagina');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenido').innerHTML = data;
        localStorage.setItem("paginaActual", pagina);
    })
    .catch(error => {
        document.getElementById('contenido').innerHTML = 
         "<p>Error cargando el contenido</p>";
        console.error(error);
    });
     
}

document.addEventListener("DOMContentLoaded" , function () {

  const paginaGuardada = localStorage.getItem("paginaActual");
  if(paginaGuardada) {
    cargarpagina(paginaGuardada);
  } else {
    cargarpagina("home.html");
  }
});
document.addEventListener("DOMContentLoaded" , function () {

  const paginaGuardada = localStorage.getItem("paginaActual");
  if(paginaGuardada) {
    cargarpagina(paginaGuardada);
  } else {
    cargarpagina("inicio.html");
  }
});

document.addEventListener("DOMContentLoaded", () => {

    const loginScreen = document.getElementById("loginScreen");
    const appContent = document.getElementById("appContent");

    const nombreGuardado = localStorage.getItem("nombreUsuario");

    if (nombreGuardado) {

        loginScreen.style.display = "none";
        appContent.style.display = "block";

    }
// LOGIN
document.getElementById("formLogin").addEventListener("submit", function(e) {

  e.preventDefault();

  const nombre = document.getElementById("inputNombre").value.trim();

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if(nombre === "" || !regex.test(nombre)) {

    alert("Ingrese un nombre válido");
    const alertContainer = document.getElementById("alertContainer");

  alertContainer.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Ingrese un nombre válido
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;

  // Ocultar automáticamente
  setTimeout(() => {
    alertContainer.innerHTML = "";
  }, 3000);

  }else{

    document.getElementById("nombre").innerHTML =
    ", " + nombre;

  // Guardar nombre
  localStorage.setItem("nombreUsuario", nombre);

  // Ocultar login
  document.getElementById("loginScreen").style.display = "none";

  // Mostrar app
  document.getElementById("appContent").style.display = "block";
  
  }

});

});
document.addEventListener("DOMContentLoaded", function () {
    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const videoTitle = document.getElementById("videoModalTitle");

    if (videoModal) {
        videoModal.addEventListener("show.bs.modal", function (event) {
            const button = event.relatedTarget;

            const videoUrl = button.getAttribute("data-video");
            const title = button.getAttribute("data-title");

            videoTitle.textContent = title;

            let separator = videoUrl.includes("?") ? "&" : "?";
            videoFrame.src = videoUrl + separator + "autoplay=1";
        });

        videoModal.addEventListener("hidden.bs.modal", function () {
            videoFrame.src = "";
        });
    }
});


 function girarTarjeta(boton) {
            const tarjeta = boton.closest(".flashcard");
            tarjeta.classList.toggle("girada");
        }

