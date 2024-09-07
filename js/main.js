// Selección del ícono de hamburguesa y del menú
const burger = document.getElementById("navbarBurger");
const menu = document.getElementById("navbarMenu");

// Evento al hacer clic en el ícono de hamburguesa
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
