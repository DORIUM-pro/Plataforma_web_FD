/* main.js
   Funcionalidad: animaciones, parallax, interacciones, validación de formularios, modales de detalle de Luna, etc.
*/

console.log("¡Bienvenido a Glamping Levitar! El archivo main.js está enlazado correctamente.");

// Scroll suave para botón 'Reservar ahora'
document.addEventListener('DOMContentLoaded', function() {
  const btnReservar = document.querySelector('.btn-reservar');
  if(btnReservar) {
    btnReservar.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // MODAL DETALLE LUNA
  // Mapeo de datos por Luna
  const lunaData = {
    'Moon': {
      titulo: "Luna Moon",
      imagen: "https://placehold.co/600x400/3686da/ffffff?text=Luna+Moon",
      desc: "Luna ideal para parejas.<br>Cama king size, jacuzzi privado y vista panorámica al bosque.",
      detalles: [
        "Cama King Extra Confort",
        "Jacuzzi Privado con Hidromasaje",
        "Vista panorámica 180°",
        "Desayuno incluido en la cápsula",
        "Kit de bienvenida especial"
      ]
    },
    'Sky': {
      titulo: "Luna Sky",
      imagen: "https://placehold.co/600x400/39b16a/ffffff?text=Luna+Sky",
      desc: "Experiencia de altura máxima y relax.<br>Malla catamarán exterior y cine bajo las estrellas.",
      detalles: [
        "Cama Queen",
        "Malla Catamarán suspendida",
        "Cine privado bajo cielo nocturno",
        "Promo especial temporada",
        "Vista directa a la montaña"
      ]
    },
    'Forest': {
      titulo: "Luna Forest",
      imagen: "https://placehold.co/600x400/e3c072/ffffff?text=Luna+Forest",
      desc: "Rodeada de vegetación nativa y privacidad.<br>Avistamiento de aves y baño ecológico.",
      detalles: [
        "Avistamiento guiado de aves",
        "Ducha ecológica interior/exterior",
        "Sendero a bosque privado",
        "Desayuno orgánico local",
        "Privacidad total"
      ]
    }
  };

  // Inyectar handlers a botones 'Ver más'
  document.querySelectorAll('.btn-vermas').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.getAttribute('onclick') ? this.getAttribute('onclick').replace(/.*'(.+?)'.*/, '$1') : '';
      mostrarDetalle(id);
    });
    btn.removeAttribute('onclick'); // Para prevenir doble invocación
  });

  // Mostrar modal de detalle de Luna
  function mostrarDetalle(lunaId) {
    const modal = document.getElementById('modal-luna');
    const modalBody = document.getElementById('modal-luna-body');
    const luna = lunaData[lunaId];
    if(!luna) return;

    modalBody.innerHTML = `
      <h2 style="margin-bottom:8px;">${luna.titulo}</h2>
      <img src="${luna.imagen}" alt="${luna.titulo}" style="width:100%;border-radius:10px;margin-bottom:18px;">
      <div style="font-size:1.07em;margin-bottom:12px">${luna.desc}</div>
      <ul style="margin:0 0 14px 16px;padding-left:0;list-style:disc;color:#3686da;">
        ${luna.detalles.map(item=>`<li style="color:#28323b">${item}</li>`).join("")}
      </ul>
    `;
    modal.style.display = 'flex';
    // Focus de accesibilidad o añadir animación si se desea.
  }

  // Cerrar modal en X o al clickear fondo
  const cerrar = document.getElementById('modal-cerrar');
  const modalLuna = document.getElementById('modal-luna');
  if(cerrar && modalLuna) {
    cerrar.addEventListener('click', ()=> {
      modalLuna.style.display = 'none';
      document.getElementById('modal-luna-body').innerHTML = "";
    });
    modalLuna.addEventListener('click',(e)=>{
      if(e.target === modalLuna) { // click fondo oscuro
        modalLuna.style.display = 'none';
        document.getElementById('modal-luna-body').innerHTML = "";
      }
    });
  }
});