/* ========================================
   LANDING PAGE DINCO INMOBILIARIA & CONSTRUCTORA
   Archivo: script.js
   
   DESCRIPCIÓN:
   Este archivo contiene toda la interactividad de la página:
   - Navbar que cambia al hacer scroll
   - Carrusel del hero que rota automáticamente
   - Contador de urgencia que parpadea
   - Funcionalidad de WhatsApp
   - Scroll suave a secciones
   - Validación de formulario
   
   COMENTARIOS EDUCATIVOS:
   Cada función está explicada con detalles sobre qué hace
   y cómo puedes modificarla.
   ======================================== */

// ========================================
// 1. CONFIGURACIÓN INICIAL - VARIABLES GLOBALES
// ========================================

// Array de imágenes de las 5 zonas del hero
// EDITA ESTO: Cambia las URLs por imágenes de verdad de Unsplash, Pexels, etc.
const imagenes_zonas = [
    {
        zona: "Puerto Plata",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop",
        subtitulo: "Playas doradas y clima tropical perfecto"
    },
    {
        zona: "Sosúa",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
        subtitulo: "Buceo de clase mundial y vida nocturna vibrante"
    },
    {
        zona: "Cabarete",
        url: "https://images.unsplash.com/photo-1527004760902-c2b83cf0f1ad?w=1200&h=600&fit=crop",
        subtitulo: "Kitesurf y windsurf en aguas cristalinas"
    },
    {
        zona: "Samaná",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
        subtitulo: "Ballenas jorobadas y cascadas espectaculares"
    },
    {
        zona: "Monte Cristi",
        url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&h=600&fit=crop",
        subtitulo: "Paisajes únicos y tranquilidad absoluta"
    }
];

const propiedadesData = [
    {
        titulo: "Villa de Lujo Frente al Mar",
        ubicacion: "Sosúa, Puerto Plata",
        precioActual: "$725,000",
        precioAnterior: "$850,000",
        descripcion: "Casa de 4 habitaciones con vista panorámica al Caribe, piscina privada y acceso directo a la playa.",
        textoGeneral: "Una residencia exclusiva diseñada para disfrutar de vistas al mar, privacidad total y un estilo de vida premium en una de las zonas más cotizadas del Caribe.",
        habitaciones: "4",
        banos: "3",
        metros: "350",
        parqueo: "2",
        amenidades: [
            "Piscina privada",
            "Terraza panorámica",
            "Cocina gourmet",
            "Sistema de seguridad"
        ],
        imagenes: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop"
        ],
        mapa: "https://www.google.com/maps?q=19.4517,-70.6970&z=15&output=embed"
    },
    {
        titulo: "Apartamento de Lujo Moderno",
        ubicacion: "Cabarete, Puerto Plata",
        precioActual: "$550,000",
        precioAnterior: "$650,000",
        descripcion: "Penthouse de 3 habitaciones con diseño contemporáneo, terraza de 120 m² y gimnasio privado.",
        textoGeneral: "Un apartamento premium con acabados contemporáneos, luz natural abundante y una ubicación estratégica para el turismo y la inversión de alto rendimiento.",
        habitaciones: "3",
        banos: "2",
        metros: "280",
        parqueo: "1",
        amenidades: [
            "Gimnasio privado",
            "Terraza con vista al mar",
            "Cocina integrada",
            "Seguridad 24/7"
        ],
        imagenes: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=800&fit=crop"
        ],
        mapa: "https://www.google.com/maps?q=19.7544,-70.4089&z=15&output=embed"
    },
    {
        titulo: "Resort de Playa 5 Estrellas",
        ubicacion: "Samaná, República Dominicana",
        precioActual: "$7,200,000",
        precioAnterior: "$8,500,000",
        descripcion: "Inversión turística con 20 suites, restaurant gourmet, spa y marina privada de 100 amarraderos.",
        textoGeneral: "Un proyecto hotelero de alto potencial que combina confort, diseño premium y operaciones turísticas con proyección internacional.",
        habitaciones: "20",
        banos: "24",
        metros: "5000",
        parqueo: "100",
        amenidades: [
            "Spa y wellness",
            "Restaurant gourmet",
            "Marina privada",
            "Centro de eventos"
        ],
        imagenes: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop"
        ],
        mapa: "https://www.google.com/maps?q=19.204,-69.337&z=13&output=embed"
    }
];

// Índice actual del carrusel
let indice_zona_actual = 0;
// indice_zona_actual: Controla qué imagen del hero se muestra. Comienza en 0 (primera imagen)

// Número de personas viendo propiedades (para el badge)
let contador_personas_viendo = 27;
// contador_personas_viendo: Cambia este número para que el badge muestre otro contador

let indiceGaleriaActual = 0;
let propiedadActual = 0;

// ========================================
// 2. FUNCIÓN PRINCIPAL: INICIALIZAR AL CARGAR LA PÁGINA
// ========================================

// Se ejecuta cuando la página termina de cargar
document.addEventListener("DOMContentLoaded", function() {
    inicializar_navbar();
    inicializar_hero();
    inicializar_contador_urgencia();
    inicializarGaleriaPropiedades();
    cargarNoticiasMercado();
    cargarDetallePropiedad(0);
    console.log("🚀 Landing Page DINCO inicializada correctamente");
});

// ========================================
// 3. NAVBAR LÍQUIDA - CAMBIA AL HACER SCROLL
// ========================================

function inicializar_navbar() {
    // Función: Configura la navbar para cambiar de transparente a blanca al scroll
    
    // Obtener elemento navbar del HTML
    const navbar = document.querySelector(".navbar");
    // document.querySelector(): Busca el elemento con clase "navbar"
    
    // Escuchar el evento de scroll en la ventana
    window.addEventListener("scroll", function() {
        // scroll event: Se dispara cada vez que el usuario scrollea
        
        // Obtener la distancia scrolleada desde el top
        const scroll_distancia = window.scrollY;
        // window.scrollY: Número de píxeles scrolleados hacia abajo
        
        // Si ha scrolleado más de 50px, agregar clase "scrolled"
        if (scroll_distancia > 50) {
            // > 50: Cambiar de transparente a blanco después de 50px (puedes cambiar este número)
            
            navbar.classList.add("scrolled");
            // classList.add(): Agrega la clase "scrolled" que cambia estilos en CSS
        } else {
            // Si scrollea menos de 50px
            
            navbar.classList.remove("scrolled");
            // classList.remove(): Quita la clase "scrolled" para volver a transparente
        }
    });
}

// ========================================
// 4. CARRUSEL DEL HERO - ROTA AUTOMÁTICAMENTE
// ========================================

function inicializar_hero() {
    // Función: Configura el carrusel que cambia imágenes cada X segundos
    
    // Cargar la primera imagen al iniciar
    actualizar_fondo_hero();
    // actualizar_fondo_hero(): Muestra la primera imagen
    
    // Cambiar imagen automáticamente cada 6 segundos
    setInterval(function() {
        // setInterval(): Ejecuta función repetidamente cada 6000 milisegundos (6 segundos)
        // EDITA: Cambia 6000 a 4000 para cambiar más rápido, 10000 para más lento
        
        indice_zona_actual++;
        // indice_zona_actual++: Incrementa el índice para pasar a la siguiente imagen
        
        // Si llegó al final, volver al inicio
        if (indice_zona_actual >= imagenes_zonas.length) {
            // imagenes_zonas.length: Número total de imágenes (5)
            
            indice_zona_actual = 0;
            // Resetea a 0 para volver a empezar
        }
        
        actualizar_fondo_hero();
        // Actualizar la imagen mostrada
        
    }, 6000); // 6000 milisegundos = 6 segundos
}

function actualizar_fondo_hero() {
    // Función: Cambia la imagen de fondo del hero
    
    // Obtener elemento con la imagen de fondo
    const hero_fondo = document.getElementById("heroFondo");
    // getElementById(): Busca el elemento con id "heroFondo"
    
    // Obtener la imagen actual del array
    const imagen_actual = imagenes_zonas[indice_zona_actual];
    // imagen_actual: Objeto con propiedades: zona, url, subtitulo
    
    // Cambiar la imagen de fondo con CSS
    hero_fondo.style.backgroundImage = `url('${imagen_actual.url}')`;
    // style.backgroundImage: Cambia la imagen. Las comillas invertidas permiten insertar variables
    
    // Actualizar los puntos indicadores (dots)
    actualizar_dots();
    // actualizar_dots(): Marca el punto activo
}

function actualizar_dots() {
    // Función: Marca qué punto del carrusel está activo
    
    // Obtener todos los puntos
    const todos_dots = document.querySelectorAll(".dot");
    // querySelectorAll(): Obtiene lista de todos los elementos con clase "dot"
    
    // Recorrer cada punto
    todos_dots.forEach((dot, indice) => {
        // forEach(): Ejecuta función para cada punto
        // indice: Número de cada punto (0, 1, 2, 3, 4)
        
        // Si es el punto actual, agregar clase "activo"
        if (indice === indice_zona_actual) {
            // === : Comparación exacta
            
            dot.classList.add("activo");
            // Marca el punto como activo (cambia color en CSS)
        } else {
            // Si no es el actual
            
            dot.classList.remove("activo");
            // Quita clase "activo"
        }
    });
}

function cambiarZona(indice) {
    indice_zona_actual = indice;
    actualizar_fondo_hero();
}

function inicializarGaleriaPropiedades() {
    const botones = document.querySelectorAll(".tarjeta-btn-detalles");
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const indice = Number(boton.getAttribute("data-propiedad-index"));
            cargarDetallePropiedad(indice);
            document.getElementById("detallePropiedad")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function cargarDetallePropiedad(indice) {
    const propiedad = propiedadesData[indice];
    if (!propiedad) return;

    propiedadActual = indice;
    indiceGaleriaActual = 0;

    document.getElementById("detalleTitulo").textContent = propiedad.titulo;
    document.getElementById("detalleUbicacion").textContent = propiedad.ubicacion;
    document.getElementById("detallePrecioActual").textContent = propiedad.precioActual;
    document.getElementById("detallePrecioAnterior").textContent = propiedad.precioAnterior;
    document.getElementById("detalleDescripcion").textContent = propiedad.descripcion;
    document.getElementById("detalleHabitaciones").textContent = propiedad.habitaciones;
    document.getElementById("detalleBanos").textContent = propiedad.banos;
    document.getElementById("detalleMetros").textContent = propiedad.metros;
    document.getElementById("detalleParqueo").textContent = propiedad.parqueo;
    document.getElementById("detalleTextoGeneral").textContent = propiedad.textoGeneral;
    document.getElementById("detalleMapa").src = propiedad.mapa;

    const amenidades = document.getElementById("detalleAmenidades");
    amenidades.innerHTML = "";
    propiedad.amenidades.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `✅ ${item}`;
        amenidades.appendChild(li);
    });

    const galeriaPrincipal = document.getElementById("galeriaImagenPrincipal");
    const miniaturas = document.getElementById("galeriaMiniaturas");
    miniaturas.innerHTML = "";

    propiedad.imagenes.forEach((imagen, index) => {
        const img = document.createElement("img");
        img.src = imagen;
        img.alt = `${propiedad.titulo} ${index + 1}`;
        img.className = index === 0 ? "activo" : "";
        img.addEventListener("click", () => {
            indiceGaleriaActual = index;
            actualizarGaleria();
        });
        miniaturas.appendChild(img);
    });

    actualizarGaleria();
}

function actualizarGaleria() {
    const propiedad = propiedadesData[propiedadActual];
    if (!propiedad) return;

    const galeriaPrincipal = document.getElementById("galeriaImagenPrincipal");
    const miniaturas = document.querySelectorAll("#galeriaMiniaturas img");

    galeriaPrincipal.src = propiedad.imagenes[indiceGaleriaActual];
    miniaturas.forEach((img, index) => {
        img.classList.toggle("activo", index === indiceGaleriaActual);
    });
}

function cambiarImagenGaleria(direccion) {
    const propiedad = propiedadesData[propiedadActual];
    if (!propiedad) return;
    indiceGaleriaActual = (indiceGaleriaActual + direccion + propiedad.imagenes.length) % propiedad.imagenes.length;
    actualizarGaleria();
}

async function cargarNoticiasMercado() {
    const noticiasContainer = document.getElementById("noticiasMercado");
    const feeds = [
        "https://api.rss2json.com/v1/api.json?rss_url=https://listindiario.com/rss",
        "https://api.rss2json.com/v1/api.json?rss_url=https://hoy.com.do/feed/",
        "https://api.rss2json.com/v1/api.json?rss_url=https://elnuevodiario.com.do/feed/"
    ];

    const noticiasFallback = [
        {
            title: "El mercado inmobiliario dominicano mantiene ritmo de crecimiento en zonas turísticas",
            link: "#",
            pubDate: "2026-06-20",
            thumbnail: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop"
        },
        {
            title: "Aumento de inversión extranjera impulsa compra de propiedades premium",
            link: "#",
            pubDate: "2026-06-18",
            thumbnail: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=300&fit=crop"
        },
        {
            title: "Proyectos frente al mar lideran la demanda en la costa norte",
            link: "#",
            pubDate: "2026-06-15",
            thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop"
        }
    ];

    for (const feed of feeds) {
        try {
            const response = await fetch(feed);
            if (!response.ok) continue;
            const data = await response.json();
            const items = data.items || [];
            const noticiasFiltradas = items
                .filter((item) => /inmobili|propiedad|mercado|turismo|real estate|construcc/i.test(item.title + " " + item.description))
                .slice(0, 5);

            if (noticiasFiltradas.length > 0) {
                renderizarNoticias(noticiasFiltradas);
                return;
            }
        } catch (error) {
            console.warn("No se pudieron cargar noticias desde el feed:", error);
        }
    }

    renderizarNoticias(noticiasFallback);
}

function renderizarNoticias(noticias) {
    const noticiasContainer = document.getElementById("noticiasMercado");
    noticiasContainer.innerHTML = "";

    noticias.forEach((noticia) => {
        const item = document.createElement("article");
        item.className = "noticia-item";
        item.innerHTML = `
            <img src="${noticia.thumbnail || 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=300&fit=crop'}" alt="${noticia.title}">
            <div>
                <h4>${noticia.title}</h4>
                <span>${new Date(noticia.pubDate || Date.now()).toLocaleDateString('es-DO')}</span>
            </div>
        `;
        noticiasContainer.appendChild(item);
    });
}

// ========================================
// 5. SCROLL SUAVE A SECCIONES
// ========================================

function scrollToContacto() {
    // Función: Hace scroll suave hacia la sección de contacto
    // Se ejecuta cuando clickeas el botón "Contacto Directo" en navbar
    
    // Obtener la sección de contacto
    const seccion_contacto = document.getElementById("contacto");
    // getElementById(): Busca el elemento con id "contacto"
    
    // Hacer scroll suave (ya configurado en CSS con scroll-behavior: smooth)
    seccion_contacto.scrollIntoView({ behavior: "smooth" });
    // scrollIntoView(): Lleva la página hasta ese elemento
    // behavior: "smooth" hace que el scroll sea suave, no instantáneo
}

function scrollToBuscador() {
    // Función: Hace scroll suave hacia el buscador
    // Se ejecuta cuando clickeas "Explorar Propiedades" en el hero
    
    const seccion_buscador = document.getElementById("buscador");
    // Obtener la sección del buscador
    
    seccion_buscador.scrollIntoView({ behavior: "smooth" });
    // Hacer scroll suave
}

// ========================================
// 6. CONTADOR DE URGENCIA - BADGE FLOTANTE
// ========================================

function inicializar_contador_urgencia() {
    // Función: Configura el badge que muestra personas viendo propiedades
    
    // Actualizar el contador cada 3-8 segundos de forma realista
    setInterval(function() {
        // setInterval(): Ejecuta cada 5000 milisegundos (5 segundos)
        // EDITA: Cambia 5000 a 2000 para cambios más frecuentes
        
        // Generar número aleatorio de cambio (-2 a +3)
        let cambio = Math.floor(Math.random() * 6) - 2;
        // Math.random(): Número entre 0 y 1
        // * 6: Multiplica por 6 (0-6)
        // - 2: Resta 2 para obtener rango (-2 a +4)
        
        // Cambiar el contador (mínimo 20, máximo 50)
        contador_personas_viendo += cambio;
        // Incrementa o decrementa el contador
        
        if (contador_personas_viendo < 20) {
            contador_personas_viendo = 20;
        }
        // Si cae por debajo de 20, establece a 20 mínimo
        
        if (contador_personas_viendo > 50) {
            contador_personas_viendo = 50;
        }
        // Si sube por encima de 50, establece a 50 máximo
        
        // Actualizar el texto del badge
        const badge_urgencia = document.getElementById("badgeUrgencia");
        // Obtener el elemento del badge
        
        badge_urgencia.innerHTML = `<span class="badge-punto-rojo"></span><span class="badge-texto">${contador_personas_viendo} personas viendo propiedades en Sosúa hoy</span>`;
        // innerHTML: Cambia el contenido HTML
        // ${contador_personas_viendo}: Inserta el número actualizado
        
    }, 5000); // 5000 milisegundos = 5 segundos
}

// ========================================
// 7. FUNCIONALIDAD DE FILTROS EN BUSCADOR
// ========================================

function filtrarProvincia(provincia) {
    // Función: Marca la provincia seleccionada como activa
    // provincia: Nombre de la provincia (string)
    
    // Obtener todos los botones de provincia
    const provincias_botones = document.querySelectorAll(".provincia-btn");
    // querySelectorAll(): Obtiene lista de todos los botones
    
    // Recorrer cada botón
    provincias_botones.forEach((boton) => {
        // forEach(): Ejecuta función para cada botón
        
        // Si el botón contiene el texto de la provincia
        if (boton.textContent.includes(provincia)) {
            // textContent.includes(): Busca si contiene el texto
            
            boton.classList.add("activo");
            // Marca como activo
        } else {
            // Si es otro botón
            
            boton.classList.remove("activo");
            // Quita clase activo
        }
    });
    
    // Mostrar mensaje de información
    console.log(`🏘️ Filtrando propiedades en ${provincia}`);
    // console.log(): Mensaje en consola para verificar
}

function realizarBusqueda() {
    // Función: Se ejecuta cuando clickeas el botón "Buscar"
    
    // Obtener los valores de los filtros
    const operacion = document.getElementById("filtroOperacion").value;
    // .value: Obtiene el valor seleccionado del select
    
    const tipo = document.getElementById("filtroTipo").value;
    // Obtener tipo de inmueble
    
    const presupuesto = document.getElementById("filtroPresupuesto").value;
    // Obtener presupuesto
    
    // Mostrar resultado de búsqueda
    console.log(`🔍 Búsqueda: ${operacion} - ${tipo} - ${presupuesto}`);
    // console.log(): Mensaje con los filtros seleccionados
    
    // Aquí puedes agregar lógica para conectar con una base de datos
    // Por ahora solo mostramos un mensaje
    alert(`Buscando propiedades de ${operacion} tipo ${tipo} con presupuesto ${presupuesto}\n\nEn una versión real, esto consultaría nuestra base de datos.`);
    // alert(): Muestra un cuadro de diálogo
}

// ========================================
// 8. CONTACTAR POR WHATSAPP
// ========================================

function contactarWhatsApp(nombre_propiedad) {
    // Función: Abre WhatsApp con mensaje preformateado
    // nombre_propiedad: Nombre de la propiedad (string)
    
    // Número de teléfono de WhatsApp (sin + ni espacios)
    const numero_whatsapp = "18293761886";
    // EDITA: Cambia este número por el tuyo
    
    // Mensaje preformateado
    const mensaje = `Hola DINCO, me interesa la propiedad: ${nombre_propiedad}. ¿Puedes brindarme más información?`;
    // mensaje: Texto que se enviará. Puedes cambiar el contenido
    
    // Codificar el mensaje para URL (espacios y caracteres especiales)
    const mensaje_codificado = encodeURIComponent(mensaje);
    // encodeURIComponent(): Convierte espacios en %20, etc.
    
    // Crear URL de WhatsApp
    const url_whatsapp = `https://wa.me/${numero_whatsapp}?text=${mensaje_codificado}`;
    // wa.me: Servicio de WhatsApp que abre la conversación
    
    // Abrir en nueva pestaña
    window.open(url_whatsapp, "_blank");
    // window.open(): Abre URL
    // "_blank": Nueva pestaña
    
    // Log para verificar
    console.log(`💬 Abriendo WhatsApp para: ${nombre_propiedad}`);
}

// ========================================
// 9. VALIDACIÓN Y ENVÍO DE FORMULARIO
// ========================================

function enviarFormulario(evento) {
    // Función: Se ejecuta cuando envías el formulario de contacto
    // evento: Objeto del evento (contiene información del formulario)
    
    // Prevenir comportamiento por defecto (recargar página)
    evento.preventDefault();
    // preventDefault(): Detiene la acción por defecto del formulario
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    // value: Obtiene el texto ingresado
    
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const interes = document.getElementById("interes").value;
    const mensaje = document.getElementById("mensaje").value;
    
    // Validar que los campos obligatorios no estén vacíos
    if (!nombre || !email || !interes) {
        // !nombre: Si está vacío
        
        alert("⚠️ Por favor, completa los campos obligatorios (Nombre, Email, Qué te interesa)");
        // alert(): Muestra advertencia
        
        return;
        // return: Detiene la función sin hacer nada más
    }
    
    // Validar formato de email
    const email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/: Expresión regular que verifica email válido
    // .test(): Devuelve true si cumple el patrón
    
    if (!email_valido) {
        // Si email no es válido
        
        alert("⚠️ Por favor, ingresa un email válido");
        return;
    }
    
    // Si todo es válido, mostrar mensaje de éxito
    console.log("✅ Formulario válido. Datos a enviar:", {
        nombre: nombre,
        email: email,
        telefono: telefono,
        interes: interes,
        mensaje: mensaje
    });
    // console.log(): Muestra los datos en consola
    
    // Aquí enviarías los datos a un servidor con fetch() o AJAX
    // Por ahora mostramos un mensaje
    alert(`✅ ¡Gracias por tu consulta, ${nombre}!\n\nNos pondremos en contacto a través de ${email} en las próximas 24 horas.`);
    
    // Limpiar el formulario (vaciar campos)
    document.querySelector(".contacto-formulario").reset();
    // reset(): Borra todos los valores del formulario
    
    // Log de confirmación
    console.log("📧 Formulario enviado correctamente");
}

// ========================================
// 10. FUNCIÓN AUXILIAR: SIMULAR ENVÍO A SERVIDOR
// ========================================

async function enviarDatosAlServidor(datos) {
    // Función: Ejemplo de cómo enviar datos a un servidor (no usado ahora)
    // async: Permite usar await para esperar respuestas
    
    try {
        // try: Intenta ejecutar el código
        
        const respuesta = await fetch("/api/contacto", {
            // fetch(): Realiza solicitud HTTP
            // "/api/contacto": URL del servidor (cambiar según tu backend)
            
            method: "POST",
            // method: "POST": Envía datos al servidor
            
            headers: {
                "Content-Type": "application/json"
                // Indicar que enviamos JSON
            },
            
            body: JSON.stringify(datos)
            // body: Datos convertidos a JSON
        });
        
        const resultado = await respuesta.json();
        // respuesta.json(): Obtener respuesta del servidor
        
        console.log("✅ Respuesta del servidor:", resultado);
        
    } catch (error) {
        // catch: Si hay error
        
        console.error("❌ Error al enviar datos:", error);
        // console.error(): Muestra error en rojo en consola
    }
}

// ========================================
// 11. FUNCIONES AUXILIARES ADICIONALES
// ========================================

// Función para obtener la hora actual y mostrar saludo personalizado
function saludarPorHora() {
    // Función: Crea saludos diferentes según la hora del día
    
    const hora = new Date().getHours();
    // new Date().getHours(): Obtiene la hora actual (0-23)
    
    let saludo = "";
    // saludo: Variable para almacenar el saludo
    
    if (hora < 12) {
        saludo = "Buenos días";
    } else if (hora < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }
    
    return saludo;
    // Devuelve el saludo
}

// ========================================
// 12. CONFIGURACIÓN DE EVENTOS GLOBALES
// ========================================

// Detectar cuando el usuario intenta irse de la página (opcional)
window.addEventListener("beforeunload", function(evento) {
    // beforeunload: Se dispara cuando el usuario cierra/cambia de página
    
    // Aquí podrías guardar datos en localStorage
    // localStorage.setItem("ultima_seccion", document.querySelector("section").id);
    
    console.log("👋 Usuario abandonando la página");
});

// Manejar errores no capturados en toda la página
window.addEventListener("error", function(evento) {
    // error event: Cuando hay un error en JavaScript
    
    console.error("❌ Error detectado:", evento.error);
    // Registra el error para debugging
});

// ========================================
// 13. NOTAS FINALES Y DEBUGGING
// ========================================

/*
CÓMO USAR LA CONSOLA DEL NAVEGADOR PARA DEBUGGING:
1. Presiona F12 o Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
2. Ve a la pestaña "Console"
3. Aquí verás todos los console.log() con información útil

CAMBIOS COMUNES QUE QUERRÁS HACER:
- Cambiar número de teléfono WhatsApp: línea ~230 (numero_whatsapp)
- Cambiar velocidad del carrusel: línea ~85 (setInterval 6000)
- Cambiar punto en el que navbar cambia: línea ~72 (scroll_distancia > 50)
- Cambiar imágenes de zonas: línea ~22-45 (imagenes_zonas array)
- Cambiar velocidad del contador de urgencia: línea ~160 (setInterval 5000)

CONECTAR CON BASE DE DATOS:
- En realizarBusqueda(): Cambiar alert() por fetch() a tu API
- En enviarDatosAlServidor(): Descomentar y configurar URL del servidor
- En contactarWhatsApp(): Los datos ya se envían automáticamente a WhatsApp

SEGURIDAD:
- Nunca guardes contraseñas en JavaScript (son visibles)
- Valida SIEMPRE los datos en el servidor también
- No confíes en validación solo del lado del cliente
*/

// ========================================
// Fin del archivo script.js
// ========================================
