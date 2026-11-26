/* =====================================================================
   CONFIG.JS · AQUÍ EDITAS LO NECESARIO: WhatsApp, fotos, textos y servicios.
   Para poner una foto: sube la imagen a la carpeta img/fotos/ y escribe su
   ruta en "foto", por ejemplo  foto: "img/fotos/bodas.jpg"
   Si "foto" está vacío ("") se muestra un recuadro elegante de ejemplo.
   ===================================================================== */

const CONFIG = {
  whatsapp: "526561757458",            // 52 + número a 10 dígitos, sin + ni espacios
  direccion: "Ciudad Juárez, Chihuahua, México",
  mapa: "https://maps.app.goo.gl/J4qZSEomV7iguKec6",                            // enlace de Google Maps
  instagram: "https://www.instagram.com/hlosmonroy?jplx=MWNyMHp6cHhndXp3NA%3D%3D&utm_source=qr",                       // ej. "https://instagram.com/tu_cuenta"
  facebook: "https://www.facebook.com/share/1ChGCuQNE2/",                        // ej. "https://facebook.com/tu_pagina"

  // Foto grande de la portada (recomendado vertical, ~1000×1300 px)
  portada: { foto: "img/fotos/PORTADA.jfif" },

  // Eventos, momentos y servicios. hot:true = etiqueta "Más solicitados"
  catalogo: {
    eventos: { titulo: "Eventos", intro: "Celebraciones completas, a la medida de tu historia.", items: [
      { n: "Bodas", d: "Un “sí, acepto” entre arcos y jardines, con ambiente cálido y atemporal.", hot: true, foto: "" },
      { n: "XV", d: "Una noche de gala para quienes cumplen quince, con montaje a su estilo.", hot: true, foto: "" },
      { n: "Baby shower", d: "Reuniones tiernas y relajadas para recibir a tu bebé.", hot: false, foto: "" },
      { n: "Bautizos", d: "Celebraciones familiares íntimas, con espacio y tranquilidad.", hot: false, foto: "" },
      { n: "Graduaciones", d: "Brinda por el logro con comida, música y buena compañía.", hot: false, foto: "" },
      { n: "Cumpleaños", d: "Desde reuniones pequeñas hasta fiestas completas.", hot: false, foto: "" }
    ]},
    momentos: { titulo: "Momentos especiales", intro: "Instantes únicos que merecen un escenario único.", items: [
      { n: "Gender reveal", d: "El escenario perfecto para una sorpresa que se recordará.", hot: false, foto: "" },
      { n: "Pedidas", d: "Un rincón con encanto para la pregunta más importante.", hot: true, foto: "" },
      { n: "Sesiones fotográficas", d: "Arcos, jardines y luz natural para tus fotografías.", hot: false, foto: "" }
    ]},
    servicios: { titulo: "Servicios para tu evento", intro: "Comida y detalles para que no te preocupes de nada.", items: [
      { n: "Charcutería y canapés", d: "Tablas y bocados para recibir a tus invitados con elegancia.", hot: false, foto: "" },
      { n: "Cena de tiempos", d: "Menú servido por tiempos para una experiencia de cena formal.", hot: true, foto: "" },
      { n: "Buffet de pizzas", d: "Opción práctica y deliciosa para todos los gustos.", hot: false, foto: "" },
      { n: "Taquiza", d: "El clásico que nunca falla, listo para disfrutar.", hot: true, foto: "" }
    ]}
  },

  // Línea signature Ámbar
  ambar: {
    texto: "Tres detalles pensados para que tu evento tenga un toque distinto y memorable. Combínalos o elígelos por separado.",
    items: [
      { n: "Carrito de elotes", d: "Elotes preparados al momento, con toppings a elegir.", foto: "" },
      { n: "Carrito de coctelería", d: "Barra móvil con bebidas y coctelería para brindar.", foto: "" },
      { n: "Espejo", d: "Un detalle visual para fotos y convivencia.", foto: "" }
    ]
  },

  // Espacios (cap = capacidad; cámbiala por la real)
  espacios: [
    { n: "Jardín", d: "Ideal para recepción y convivencia al aire libre.", cap: "Capacidad: por confirmar", foto: "" },
    { n: "Área de ceremonia", d: "Un fondo con carácter para tus momentos más importantes.", cap: "Capacidad: por confirmar", foto: "" },
    { n: "Arcos y salón", d: "Espacio versátil para cena, baile y brindis.", cap: "Capacidad: por confirmar", foto: "" }
  ],

  // Pasos "Cómo funciona"
  pasos: [
    { t: "Elige", d: "Explora eventos y servicios y agrega lo que te guste." },
    { t: "Cuéntanos", d: "Llena el cotizador: fecha, invitados y tu idea." },
    { t: "Reserva", d: "Te respondemos por WhatsApp con disponibilidad y precios." }
  ]
};
