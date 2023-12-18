//Home section Start
var swiper = new Swiper(".home-slider", {
  loop:true,
    centeredSlides:true,
    autoplay:{
        display:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

//Featured section Start
var swiper = new Swiper(".featured-slider", {
  spaceBetween:20,
  loop:true,
  centeredSlides:true,
  autoplay:{
      display:9500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
//Newin section Start
var swiper = new Swiper(".newin-slider", {
  spaceBetween:20,
  loop:true,
  centeredSlides:true,
  autoplay:{
      display:9500,
      disableOnInteraction:false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
//Deal of the day section Start
// document.addEventListener('DOMContentLoaded', function() {
//   var fechaActual = new Date();

//   var dia = fechaActual.getDate();
//   var mes = fechaActual.getMonth() + 1;
//   var año = fechaActual.getFullYear();

//   var fechaFormateada = dia + '/' + mes + '/' + año;

//   document.getElementById('fecha-container').textContent = 'Fecha Actual: ' + fechaFormateada;
// });
document.addEventListener('DOMContentLoaded', function() {
  // Función para formatear un número a dos dígitos (por ejemplo, 03)
  function formatTwoDigits(number) {
      return number < 10 ? '0' + number : number;
  }

  // Función para obtener la hora y el tiempo restante
  function actualizarHora() {
      var horaActual = new Date();

      var horas = formatTwoDigits(horaActual.getHours());
      var minutos = formatTwoDigits(horaActual.getMinutes());
      var segundos = formatTwoDigits(horaActual.getSeconds());

      var horaFormateada = horas + ':' + minutos + ':' + segundos;

      // Obtener la medianoche del día siguiente
      var medianocheSiguiente = new Date(horaActual);
      medianocheSiguiente.setHours(24, 0, 0, 0);

      // Calcular el tiempo restante hasta la medianoche del día siguiente
      var tiempoRestante = medianocheSiguiente - horaActual;

      var horasRestantes = Math.floor(tiempoRestante / (60 * 60 * 1000));
      var minutosRestantes = Math.floor((tiempoRestante % (60 * 60 * 1000)) / (60 * 1000));
      var segundosRestantes = Math.floor((tiempoRestante % (60 * 1000)) / 1000);

      var tiempoRestanteFormateado = formatTwoDigits(horasRestantes) + ':' + formatTwoDigits(minutosRestantes) + ':' + formatTwoDigits(segundosRestantes);

      document.getElementById('hora-container').textContent ='Tiempo restante: ' + tiempoRestanteFormateado;
  }

  // Actualiza la hora cada segundo
  setInterval(actualizarHora, 1000);
});
