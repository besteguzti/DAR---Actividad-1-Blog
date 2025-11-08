// script.js
// Proyecto: "Come y Crece"
// Descripción: Controla la interactividad de la web (menú, buscador, anuncios, etc.)

// Espera a que el contenido HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  /* MENÚ DESPLEGABLE */
  const menuBtn = document.getElementById("BotonMenu"); // Botón del menú
  const menu = document.getElementById("menu");         // Contenedor del menú

  // Si ambos existen, añade un evento al botón
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      // Alterna la clase "show" para mostrar u ocultar el menú
      menu.classList.toggle("show");
    });
  }

  /* ROTADOR DE ANUNCIOS AUTOMÁTICO */
  const anunciosDiv = document.getElementById("anuncios"); // Div donde aparecen los anuncios

  if (anunciosDiv) {
    // Lista de anuncios a rotar
    const anunciosList = ["Anuncio 1:", "Anuncio 2:", "Anuncio 3: "];
    let i = 0; // Índice actual

    // Cambia el texto del anuncio cada 3 segundos
    setInterval(() => {
      i = (i + 1) % anunciosList.length; // Reinicia el índice al final
      anunciosDiv.textContent = anunciosList[i];
    }, 3000);
  }

  /* BUSCADOR DE ENTRADAS */
  const buscador = document.getElementById("buscador");

  if (buscador) {
    buscador.addEventListener("keyup", () => {
      const filter = buscador.value.toLowerCase(); // Convierte texto del buscador a minúsculas
      const entradas = document.querySelectorAll(".entrada"); // Todas las entradas del blog

      entradas.forEach(entrada => {
        // Compara el texto de cada entrada con el filtro
        const text = entrada.textContent.toLowerCase();
        // Si coincide, se muestra; si no, se oculta
        entrada.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }

  /* RESUMEN DE ENTRADAS (primeros 50 caracteres) */
  const entradas = document.querySelectorAll(".entrada");

  entradas.forEach(entrada => {
    // Obtiene el texto completo desde el atributo "data-text"
    const fullText = entrada.getAttribute("data-text");
    const resumen = fullText.slice(0, 50) + "..."; // Corta el texto y añade puntos suspensivos
    // Inserta el resumen en el párrafo con clase "EntradaFin"
    entrada.querySelector(".EntradaFin").textContent = resumen;
  });

  /* CUADRO EXPANDIDO (LEER MÁS) */
  const expandedPost = document.getElementById("EntradaExpandida"); // Contenedor del cuadro
  const expandedImg = document.getElementById("EntradaImagen");     // Imagen del cuadro
  const expandedTitle = document.getElementById("EntradaTitulo");   // Título del cuadro
  const expandedText = document.getElementById("EntradaTexto");     // Texto del cuadro
  const closeBtn = document.getElementById("CerrarEntradaExpandida"); // Botón "Leer menos"

  // Recorre todos los botones "Seguir leyendo"
  document.querySelectorAll(".BotonLeer").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const entrada = e.target.closest(".entrada"); // Busca el artículo más cercano

      // Extrae los datos del artículo
      const img = entrada.getAttribute("data-img");
      const title = entrada.getAttribute("data-title");
      const text = entrada.getAttribute("data-text");

      // Inserta los datos en el cuadro expandido
      expandedImg.src = img;
      expandedTitle.textContent = title;
      expandedText.textContent = text;

      // Muestra el cuadro expandido y oculta la cuadrícula de entradas
      expandedPost.style.display = "flex";
      document.querySelector(".GridEntradas").style.display = "none";
    });
  });

  // Cierra el cuadro expandido y vuelve a mostrar las entradas
  closeBtn.addEventListener("click", () => {
    expandedPost.style.display = "none";
    document.querySelector(".GridEntradas").style.display = "grid";
  });

  /* EFECTO HOVER EN IMÁGENES DE ENTRADAS */
  document.querySelectorAll(".entrada img").forEach(img => {
    // Cuando el ratón entra, añade la clase "active" para agrandar la imagen
    img.addEventListener("mouseenter", () => img.classList.add("active"));
    // Cuando el ratón sale, elimina la clase "active"
    img.addEventListener("mouseleave", () => img.classList.remove("active"));
  });

});
