let body = document.querySelector("body");
let botonColorMode = document.querySelector(".color-mode"); //Como la clase del boton es color mode, la pongo con un punto por delante

botonColorMode.addEventListener("click",() => {

    //Aqui dentro pongo lo que quiero que suceda al hacer click
    body.classList.toggle("dark-mode"); //al hacer click en la lunita, se le agregara la clase dark mode al body.Lo que hace toogle es agregar la clase al body en caso de que no la tenga, y si la tiene se la quita tambien al hacer click

})