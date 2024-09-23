document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de manera tradicional
    
    // Obtener los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;
    var email = document.getElementById("email").value; 
    
    // Crear el enlace de WhatsApp
    var whatsappLink = "https://wa.me/5493513067000?text=Hola,%20me%20llamo%20" + encodeURIComponent(nombre) + "%20mi%20medio%20de%20contacto%20es%20" + encodeURIComponent(email) + "%20" + encodeURIComponent(mensaje);
    
    // Redirigir al enlace de WhatsApp
    window.location.href = whatsappLink;
  });



var velocidad = 0.5;
// Esta función se ejecuta cada vez que el usuario desplaza la página
window.onscroll = function() {
    // Obtenemos la posición vertical del scroll
    var scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
    var contenedor = document.getElementById("barraNavegacion");
  
    // Actualizamos la posición vertical del contenedor para que se mueva junto al usuario
    contenedor.style.top = nuevoDesplazamiento + "%";
    var nuevoDesplazamiento = 50 + (scrollPosY * velocidad);


  };


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = 100; // Ajuste de 50 píxeles
          var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#Seccion2"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = 8; // Ajuste de 50 píxeles
          var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#Seccion5"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = -10; // Ajuste de 50 píxeles
          var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#Seccion4"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var offset = -1; // Ajuste de 50 píxeles
          var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    var botones = document.querySelectorAll('#INICIO, #quienessomos, #nuestrosServicios, #empresasConfian, #contactos');
    var secciones = document.querySelectorAll('#portada1, #Seccion2, #Seccion3, #Seccion4, #Seccion5');
  
    // Función para verificar la sección visible y actualizar los estilos de los botones
    function actualizarBotones() {
           secciones.forEach(function(seccion) {
        var idSeccion = seccion.getAttribute('id');
        var botonCorrespondiente = document.querySelector('[href="#' + idSeccion + '"]');
  
        if (seccion.getBoundingClientRect().top < window.innerHeight / 1 && seccion.getBoundingClientRect().bottom > window.innerHeight / 1) {
          botones.forEach(function(boton) {
            boton.classList.remove('active');
          });
          
        }
      });
    }
  
    // Escucha el evento scroll para actualizar los botones
    window.addEventListener('scroll', actualizarBotones);
  
    // Actualiza los botones cuando la página se carga por primera vez
    actualizarBotones();
  });


botones.forEach(function(boton) {
  boton.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento por defecto del enlace
      var destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
          destino.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia la sección
      }
  });
});

// Escucha el evento de desplazamiento para actualizar los botones
window.addEventListener('scroll', actualizarBotones);

// Actualiza los botones al cargar la página
actualizarBotones();


function mostrarPanel(numeroPanel) {
  // Obtener todos los paneles
  var paneles = document.querySelectorAll('.Capa1, .Capa2, .Capa3, .Capa31, .Capa32, .Capa33');

  // Ocultar todos los paneles
  for (var i = 0; i < paneles.length; i++) {
      paneles[i].style.display = 'none';
  }

  // Mostrar el panel seleccionado
  document.getElementById('Capa' + numeroPanel).style.display = 'block';

}


function mostrarPanelesCam(numeroPanel) {
  // Obtener todos los paneles de cámaras
  var panelesCam = document.querySelectorAll('.Capa4, .Capa5, .Capa6');

  // Ocultar todos los paneles de cámaras
  for (var i = 0; i < panelesCam.length; i++) {
      panelesCam[i].style.display = 'none';
  }

  // Mostrar el panel seleccionado
  document.getElementById('Capa' + numeroPanel).style.display = 'block';
}

function mostrarPanelesAlarma(numeroPanel) {
  // Obtener todos los paneles de cámaras
  var panelesAlarma = document.querySelectorAll('.Capa7, .Capa8');

  // Ocultar todos los paneles de cámaras
  for (var i = 0; i < panelesAlarma.length; i++) {
      panelesAlarma[i].style.display = 'none';
  }

  // Mostrar el panel seleccionado
  document.getElementById('Capa' + numeroPanel).style.display = 'block';
}


function mostrarPanelesEquipo(numeroPanel) {
  // Obtener todos los paneles de cámaras
  var panelEqupo = document.querySelectorAll('.Capa10, .Capa11');

  // Ocultar todos los paneles de cámaras
  for (var i = 0; i < panelEqupo.length; i++) {
    panelEqupo[i].style.display = 'none';
  }

  // Mostrar el panel seleccionado
  document.getElementById('Capa' + numeroPanel).style.display = 'block';

}



// ABRIR Y CERRAR PANEL DE CERCOS ELECTRICOS//
var contenedor1 = document.querySelector('#FondoPanel1');
var contenedor2 = document.querySelector('#Capa1');
var contenedor3 = document.querySelector('#Capa2');
var contenedor4 = document.querySelector('#Capa3');
var contenedor4A = document.querySelector('#Capa31');
var contenedor4B = document.querySelector('#Capa32');
var contenedor4C = document.querySelector('#Capa33');
var imagen = document.getElementById('cercopf');
var CloseCerco1= document.getElementById('CerrarCerco1');
var CloseCerco2= document.getElementById('CerrarCerco2');
var CloseCerco3= document.getElementById('CerrarCerco3');
var CloseCerco4= document.getElementById('CerrarCerco4');
var CloseCerco5= document.getElementById('CerrarCerco5');
var CloseCerco6= document.getElementById('CerrarCerco6');

// ABRIR//
imagen.addEventListener('click', function() {
    contenedor1.style.zIndex = '999'; 
    contenedor2.style.zIndex = '998'; 
    contenedor3.style.zIndex = '998'; 
    contenedor4.style.zIndex = '998'; 
    contenedor4A.style.zIndex = '998';
    contenedor4B.style.zIndex = '998'; 
    contenedor4C.style.zIndex = '998'; 
});
// CERRAR
CloseCerco1.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999';
})
CloseCerco2.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999';
})
CloseCerco3.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999'
})
CloseCerco4.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999';
})
CloseCerco5.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999';
})
CloseCerco6.addEventListener('click', function(){
  contenedor1.style.zIndex = '-999';
})

// ABRIR Y CERRAR PANEL DE CAMARAS
var contenedor5 = document.querySelector('#FondoPanel2');
var contenedor6 = document.querySelector('#Capa4');
var contenedor7 = document.querySelector('#Capa5');
var contenedor8 = document.querySelector('#Capa6');
var imagen2 = document.getElementById('camarapf');
var CloseCamara1= document.getElementById('BTNCerrarImou');
var CloseCamara2= document.getElementById('BTNCerrarDahua');
var CloseCamara3= document.getElementById('BTNCerrarEzviz');

// Función para abrir un contenedor y ajustar los z-index
function abrirContenedor(contenedor) {
  contenedor.style.display = "block";
  contenedor.style.zIndex = '999';
}

// Función para cerrar un contenedor y ajustar los z-index
function cerrarContenedor(contenedor) {
  contenedor.style.display = "none";
  contenedor.style.zIndex = '-999';
}

// Evento de clic para abrir y cerrar la ventana flotante
imagen2.addEventListener('click', function() {
  abrirContenedor(contenedor6);
  abrirContenedor(contenedor5);

});

// Evento de clic para cerrar CloseCamara1
CloseCamara1.addEventListener('click', function(){
  cerrarContenedor(contenedor6);
  cerrarContenedor(contenedor5);
});

// Evento de clic para cerrar CloseCamara2
CloseCamara2.addEventListener('click', function(){
  cerrarContenedor(contenedor7);
  cerrarContenedor(contenedor5);
});

// Evento de clic para cerrar CloseCamara3
CloseCamara3.addEventListener('click', function(){
  cerrarContenedor(contenedor8);
  cerrarContenedor(contenedor5);
});

// ABRIR Y CERRAR PANEL DE CAMARAS
var contenedor9 = document.querySelector('#FondoPanelAlarma');
var contenedor10 = document.querySelector('#Capa7');
var contenedor11 = document.querySelector('#Capa8');
var imagen3 = document.getElementById('alarmapf');
var CloseAlarma1= document.getElementById('BTNCerrarAlarma1');
var CloseAlarma2= document.getElementById('BTNCerrarAlarma2');

// Función para abrir un contenedor y ajustar los z-index
function abrirContenedor(contenedor) {
  contenedor.style.display = "block";
  contenedor.style.zIndex = '999';
}

// Función para cerrar un contenedor y ajustar los z-index
function cerrarContenedor(contenedor) {
  contenedor.style.display = "none";
  contenedor.style.zIndex = '-999';
}

// Evento de clic para abrir y cerrar la ventana flotante
imagen3.addEventListener('click', function() {
  abrirContenedor(contenedor9);
  abrirContenedor(contenedor10);
});

// Evento de clic para cerrar CloseCamara1
CloseAlarma1.addEventListener('click', function(){
  cerrarContenedor(contenedor10);
  cerrarContenedor(contenedor9);
});

// Evento de clic para cerrar CloseCamara2
CloseAlarma2.addEventListener('click', function(){
  cerrarContenedor(contenedor11);
  cerrarContenedor(contenedor9);
});


var contenedor12 = document.querySelector('#FondoPanelServis');
var contenedor13 = document.querySelector('#Capa9');
var imagen4 = document.getElementById('servispf');
var CloseServis= document.getElementById('BTNCerrarServis');

// Función para abrir un contenedor y ajustar los z-index
function abrirContenedor(contenedor) {
  contenedor.style.display = "block";
  contenedor.style.zIndex = '999';
}

// Función para cerrar un contenedor y ajustar los z-index
function cerrarContenedor(contenedor) {
  contenedor.style.display = "none";
  contenedor.style.zIndex = '-999';
}

// Evento de clic para abrir y cerrar la ventana flotante
imagen4.addEventListener('click', function() {
  abrirContenedor(contenedor12);
  abrirContenedor(contenedor13);
});

// Evento de clic para cerrar CloseCamara1
CloseServis.addEventListener('click', function(){
  cerrarContenedor(contenedor12);
  cerrarContenedor(contenedor13);
});


var contenedor14 = document.querySelector('#FondoPanelequipos');
var contenedor15 = document.querySelector('#Capa11');
var contenedor16 = document.querySelector('#Capa10');
var imagen5 = document.getElementById('equipopf');
var CloseEquipos1= document.getElementById('BTNCerrarEquipo1');
var CloseEquipos2= document.getElementById('BTNCerrarEquipo2');


function abrirContenedor(contenedor) {
  contenedor.style.display = "block";
  contenedor.style.zIndex = '999';
}

function cerrarContenedor(contenedor) {
  contenedor.style.display = "none";
  contenedor.style.zIndex = '-999';
}


imagen5.addEventListener('click', function() {
  abrirContenedor(contenedor14);
  abrirContenedor(contenedor15);

});


CloseEquipos1.addEventListener('click', function(){
  cerrarContenedor(contenedor14);
  cerrarContenedor(contenedor16);
});

CloseEquipos2.addEventListener('click', function(){
  cerrarContenedor(contenedor14);
  cerrarContenedor(contenedor15);
});






var indiceImagenActual = 0; // Índice de la imagen actual
var imagenes = document.querySelectorAll('.cercoCasa3'); // Todas las imágenes del carrusel

// Función para mostrar la imagen en la posición especificada
function mostrarImagen(indice) {
    // Oculta todas las imágenes
    imagenes.forEach(imagen => {
        imagen.style.display = 'none';
    });
    // Muestra la imagen en la posición especificada
    imagenes[indice].style.display = 'block';
}

// Controlador de evento para el botón de avanzar
function avanzarImagen() {
  // Avanzar al índice de imagen siguiente
  indiceImagenActual++;
  // Si el índice excede la longitud de las imágenes, volver al inicio
  if (indiceImagenActual >= imagenes.length) {
      indiceImagenActual = 0;
  }
  // Mostrar la imagen actual
  mostrarImagen(indiceImagenActual);
};

// Controlador de evento para el botón de retroceder
function retrocederImagen() {
    // Retroceder al índice de imagen anterior
    indiceImagenActual--;
    // Si el índice es menor que 0, volver al final
    if (indiceImagenActual < 0) {
        indiceImagenActual = imagenes.length - 1;
    }
    // Mostrar la imagen actual
    mostrarImagen(indiceImagenActual);
};

// Mostrar la primera imagen al cargar la página
mostrarImagen(indiceImagenActual);








var indiceImagenActual2 = 0; // Índice de la imagen actual
var imagenes2 = document.querySelectorAll('.cercoCasa4'); // Todas las imágenes del carrusel

// Función para mostrar la imagen en la posición especificada
function mostrarImagen2(indice) {
    // Oculta todas las imágenes
    imagenes2.forEach(imagen => {
        imagen.style.display = 'none';
    });
    // Muestra la imagen en la posición especificada
    imagenes2[indice].style.display = 'block';
}

// Controlador de evento para el botón de avanzar
function avanzarImagen2() {
  // Avanzar al índice de imagen siguiente
  indiceImagenActual2++;
  // Si el índice excede la longitud de las imágenes, volver al inicio
  if (indiceImagenActual2 >= imagenes2.length) {
      indiceImagenActual2 = 0;
  }
  // Mostrar la imagen actual
  mostrarImagen2(indiceImagenActual2);
};

// Controlador de evento para el botón de retroceder
function retrocederImagen2() {
    // Retroceder al índice de imagen anterior
    indiceImagenActual2--;
    // Si el índice es menor que 0, volver al final
    if (indiceImagenActual2 < 0) {
        indiceImagenActual2 = imagenes2.length - 1;
    }
    // Mostrar la imagen actual
    mostrarImagen2(indiceImagenActual2);
};

// Mostrar la primera imagen al cargar la página
mostrarImagen2(indiceImagenActual2);

var indiceImagenActual3 = 0; // Índice de la imagen actual
var imagenes3 = document.querySelectorAll('.cercoCasa5'); // Todas las imágenes del carrusel

// Función para mostrar la imagen en la posición especificada
function mostrarImagen3(indice) {
    // Oculta todas las imágenes
    imagenes3.forEach(imagen => {
        imagen.style.display = 'none';
    });
    // Muestra la imagen en la posición especificada
    imagenes3[indice].style.display = 'block';
}

// Controlador de evento para el botón de avanzar
function avanzarImagen3() {
  // Avanzar al índice de imagen siguiente
  indiceImagenActual3++;
  // Si el índice excede la longitud de las imágenes, volver al inicio
  if (indiceImagenActual3 >= imagenes3.length) {
      indiceImagenActual3 = 0;
  }
  // Mostrar la imagen actual
  mostrarImagen3(indiceImagenActual3);
};

// Controlador de evento para el botón de retroceder
function retrocederImagen3() {
    // Retroceder al índice de imagen anterior
    indiceImagenActual3--;
    // Si el índice es menor que 0, volver al final
    if (indiceImagenActual3 < 0) {
        indiceImagenActual3 = imagenes3.length - 1;
    }
    // Mostrar la imagen actual
    mostrarImagen3(indiceImagenActual3);
};

// Mostrar la primera imagen al cargar la página
mostrarImagen3(indiceImagenActual3);








function mostrarPDF() {
  // Hacer clic en el enlace del PDF
  document.getElementById('pdfLink').click();
}


document.addEventListener('DOMContentLoaded', () => {
  const seccion = document.querySelectorAll('.FondoPanelServis');

  let ultimaPosicion = window.pageYOffset; // Variable para almacenar la última posición de scroll
  let scrolling = false; // Evitar múltiples scrolls al mismo tiempo

  // Función para manejar el evento de scroll
  function manejarScroll(evento) {
      if (scrolling) return; // Evita la ejecución si ya está en scroll
      scrolling = true;

      const posicionActual = window.pageYOffset;
      const direccion = posicionActual > ultimaPosicion ? 'abajo' : 'arriba';
      ultimaPosicion = posicionActual;

      seccion.forEach(seccion => {
          const distancia = seccion.offsetTop - window.scrollY;

          if ((direccion === 'abajo' && distancia > 0 && distancia < window.innerHeight / 2) ||
              (direccion === 'arriba' && distancia < 0 && Math.abs(distancia) < window.innerHeight / 2)) {

              window.scrollTo({
                  top: seccion.offsetTop,
                  behavior: 'smooth'
              });

              // Reinicia el scroll después de un tiempo
              setTimeout(() => {
                  scrolling = false;
              }, 1000); // Tiempo ajustable para la duración del scroll
          }
      });
  }

  // Agregar el evento de scroll
  window.addEventListener('scroll', manejarScroll);
});




let scrollBloqueado = false; // Variable para controlar si el scroll está bloqueado

// Función para posicionar la página en la sección objetivo y bloquear el scroll hacia abajo
function bloquearScrollEnFondoPanel2() {
  // Verificar si la clase FondoPanelCam tiene display block
  const paneles = [
    document.querySelector('.FondoPanelCam'),
    document.querySelector('.FondoPanelAlarma'),
    document.querySelector('.FondoPanelServis'),
    document.querySelector('.FondoPanelequipos'),
  ];
  
  // Encontrar el primer panel visible
  const fondoPanel = paneles.find(panel => panel && getComputedStyle(panel).display === 'block');

  if (fondoPanel) {
    // Obtener la sección en la que deseas posicionar la página
    document.body.style.overflowY = 'hidden';
    const seccionObjetivo2 = document.getElementById('Seccion3'); 

    // Desplazar la ventana suavemente hasta la parte superior de la sección objetivo
    window.scrollTo({
      top: seccionObjetivo2.offsetTop,
      behavior: 'smooth'
    });

    // Bloquear el scroll después de un segundo para evitar desplazamientos continuos
    setTimeout(() => {
      scrollBloqueado = true;
    }, 100); 
  }else{
    document.body.style.overflowY = '';
  }
}

// Función para bloquear el scroll hacia abajo
function bloquearScroll(event) {
  if (scrollBloqueado && event.deltaY > 0) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del scroll hacia abajo
  }
}

// Verificar el estado de la clase FondoPanelCam cada cierto intervalo
setInterval(bloquearScrollEnFondoPanel2, 1000); // Ajusta el intervalo según sea necesario

// Agregar un event listener para el evento de scroll
window.addEventListener('wheel', bloquearScroll);


/////////////////////////////////////////////////////////////////////







let scrollBloqueadoCerco = false; // Variable para controlar si el scroll está bloqueado

// Función para posicionar la página en la sección objetivo y bloquear el scroll hacia abajo
function bloquearScrollEnFondoPanel() {
  // Verificar si el zIndex de la clase FondoPanelCam es 999
  const fondoPanel = document.querySelector('.FondoPanel');
  if (fondoPanel && getComputedStyle(fondoPanel).zIndex === '999') {
    // Obtener la sección en la que deseas posicionar la página
    const seccionObjetivo = document.getElementById('Seccion3'); // Reemplaza 'seccionObjetivo' con el ID de tu sección
    document.body.style.overflowY = 'hidden';
    // Posicionar la página en la sección objetivo
    window.scrollTo({
      top: seccionObjetivo.offsetTop,
      behavior: 'smooth' // Para un desplazamiento suave
    });

    // Bloquear el scroll hacia abajo después de un breve retraso
    setTimeout(() => {
      scrollBloqueadoCerco = true;
    }, 1000); // Cambia el valor según sea necesario

  }
}

// Función para bloquear el scroll hacia abajo
function bloquearScroll(event) {
  if (scrollBloqueadoCerco && event.deltaY > 0) {
    event.preventDefault();
  }
}

// Verificar el zIndex de la clase FondoPanelCam cada cierto intervalo
setInterval(bloquearScrollEnFondoPanel, 500); // Ajusta el intervalo según sea necesario

// Agregar un event listener para el evento de scroll
window.addEventListener('wheel', bloquearScroll);


function enviarWhatsapp() {
  var nombre = document.getElementById("NombreCliente").value;
  var telefono = document.getElementById("Telefono").value;
  var direccion = document.getElementById("Direccion").value;
  var descripcion = document.getElementById("Informacion").value;
  var opcionesServicio = obtenerOpcionesServicio();

  // Construir el mensaje para WhatsApp
  var mensaje = `Hola buenos dias `;
  mensaje += `soy ${nombre}\n`;
  mensaje += `mi numero de contacto es ${telefono}\n`;
  mensaje += `mi direccion es ${direccion}\n`;
  mensaje += `tengo instalado un ${opcionesServicio}\n`;
  mensaje += `${descripcion}`;

  // Codificar el mensaje para usar en un enlace
  var mensajeCodificado = encodeURIComponent(mensaje);

  // Abrir WhatsApp con el mensaje preparado
  window.open(`https://wa.me/5493513067000?text=${mensajeCodificado}`, '_blank');
}


function obtenerOpcionesServicio() {
  var checkboxes = document.getElementsByName("opcionServicio");
  var opcionesSeleccionadas = [];

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          opcionesSeleccionadas.push(checkbox.value);
      }
  });

  return opcionesSeleccionadas.join(", ");
}

document.getElementById('menu-icon1').addEventListener('change', function() {
  var menu = document.getElementById('MenuCelular');
  if (this.checked) {
      menu.style.display = 'block'; // Asignar display block
  } else {
      menu.style.display = 'none'; // Asignar display none
  }
});













