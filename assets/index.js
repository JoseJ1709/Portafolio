const enlacesNavegacion = document.querySelectorAll("[data-nav-link]");
const paginas = document.querySelectorAll("[data-page]");

for (let i = 0; i < enlacesNavegacion.length; i++) {
  enlacesNavegacion[i].addEventListener("click", function () {
      paginas.forEach(pagina => pagina.classList.remove("activo"));

      const paginaSeleccionada = this.textContent.toLowerCase().trim().replace("mí", "mi");

      paginas.forEach(pagina => {
          if (pagina.dataset.page.toLowerCase().trim() === paginaSeleccionada) {
              pagina.classList.add("activo");
              window.scrollTo(0, 0);
          }
      });
  });
}
