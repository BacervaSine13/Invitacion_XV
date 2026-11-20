const boton = document.getElementById("abrirInvitacion");
const intro = document.getElementById("intro");

boton.addEventListener("click", () => {

    intro.classList.add("ocultar");

});

const fechaEvento = new Date("June 14, 2027 18:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

},1000);