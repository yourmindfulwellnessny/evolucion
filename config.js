/* =====================================================
   CONFIGURACIÓN DE EVOLUCIÓN — solo cambia lo que está aquí
   ===================================================== */
window.CONFIG = {
  // PRECIO del programa completo (en dólares)
  precio: 600,

  // PAGO EN CUOTAS (opcional). Si "activo" es false, la opción no aparece en la página.
  //   numero = cuántas cuotas · monto = valor de cada cuota
  cuotas: { activo: false, numero: 2, monto: 300 },

  // ENLACES DE PAGO DE STRIPE (Payment Links)
  //   completo = pago único de $600
  //   cuotas   = enlace del plan en cuotas (solo si activaste las cuotas arriba)
  // Si un enlace está vacío "", el botón de tarjeta abre WhatsApp para coordinar el pago.
  // En Stripe, en "After payment" elige "Don't show confirmation page" y pon esta dirección:
  //   https://yourmindfulwellnessny.github.io/evolucion/gracias.html?session_id={CHECKOUT_SESSION_ID}
  stripe: {
    completo: "",
    cuotas: ""
  },

  // Zelle
  zelle: { nombre: "Mindful Wellness & Coaching LLC", numero: "201-679-9969" },

  // URL de Google Apps Script para registrar solicitudes e inscripciones en Google Sheets (termina en /exec).
  // Déjala vacía "" si todavía no hay una hoja para Evolución.
  sheetUrl: "",

  // WhatsApp de Mindful Wellness (solo números, con 1 al inicio)
  whatsapp: "12016799969"
};
