// ===================================================
// ESTUDIANTE A (Lider) — Mateo V. Herrera
// Rama: feature/estructura-base-dinamica
// ===================================================

var cromosMundial = [];

function crearJugador(id, nombre, pais, posicion, iniciales, colorFondoHex, goles, partidos, destacado, curiosidad) {
    return {
        id: id,
        nombre: nombre,
        pais: pais,
        posicion: posicion,
        iniciales: iniciales,
        colorFondoHex: colorFondoHex,
        estadisticas: { goles: goles, partidos: partidos },
        destacado: destacado,
        curiosidad: curiosidad,
        desbloqueado: false
    };
}

function renderizarAlbum(lista) {
    var album = document.getElementById("album");
    album.innerHTML = "";

    lista.forEach(function (jugador, indice) {
        var card = document.createElement("div");
        card.className = "card-cromo";
        card.style.animationDelay = (indice * 0.05) + "s";
        card.setAttribute("data-id", jugador.id);

        // fondo de color
        var bg = document.createElement("div");
        bg.className = "card-bg";
        bg.style.backgroundColor = jugador.colorFondoHex;
        card.appendChild(bg);

        // destacado
        if (jugador.destacado) {
            var estrella = document.createElement("span");
            estrella.className = "card-destacado";
            estrella.textContent = "⭐";
            card.appendChild(estrella);
        }

        // avatar
        var avatar = document.createElement("div");
        avatar.className = "card-avatar";
        avatar.style.backgroundColor = jugador.colorFondoHex;
        avatar.textContent = jugador.iniciales;
        card.appendChild(avatar);

        // bandera
        var bandera = document.createElement("div");
        bandera.className = "card-bandera";
        bandera.textContent = jugador.pais;
        card.appendChild(bandera);

        // nombre
        var nombre = document.createElement("div");
        nombre.className = "card-nombre";
        nombre.textContent = jugador.nombre;
        card.appendChild(nombre);

        // posicion
        var posicion = document.createElement("div");
        posicion.className = "card-posicion";
        posicion.textContent = jugador.posicion;
        card.appendChild(posicion);

        // estadisticas
        var stats = document.createElement("div");
        stats.className = "card-stats";
        stats.innerHTML = "<span>Goles: " + jugador.estadisticas.goles + "</span><span>Partidos: " + jugador.estadisticas.partidos + "</span>";
        card.appendChild(stats);

        // curiosidad
        var cur = document.createElement("div");
        cur.className = "card-curiosidad";
        cur.textContent = jugador.curiosidad;
        card.appendChild(cur);

        // boton desbloquear
        var btn = document.createElement("button");
        btn.className = "btn-desbloquear";
        btn.textContent = "Desbloquear Cromo";
        btn.addEventListener("click", function () {
            desbloquearCromo(jugador.id, card, btn);
        });
        card.appendChild(btn);

        album.appendChild(card);
    });

    actualizarContador();
}

// ===================================================
// ESTUDIANTE F (Gamificacion) — Camila A. Suarez
// Rama: feature/sistema-recompensas-animaciones
// ===================================================

var cromosDesbloqueados = 0;

function desbloquearCromo(id, card, btn) {
    var jugador = cromosMundial.find(function (j) { return j.id === id; });
    if (!jugador || jugador.desbloqueado) return;

    jugador.desbloqueado = true;
    card.classList.add("destello");
    btn.textContent = "Desbloqueado";
    cromosDesbloqueados++;

    setTimeout(function () {
        card.classList.remove("destello");
    }, 500);

    actualizarContador();
}

function actualizarContador() {
    var total = cromosMundial.length;
    var desbloqueados = cromosMundial.filter(function (j) { return j.desbloqueado; }).length;
    cromosDesbloqueados = desbloqueados;

    var porcentaje = total > 0 ? Math.round((desbloqueados / total) * 100) : 0;
    document.getElementById("porcentajeDesbloqueo").textContent = porcentaje + "%";
    document.getElementById("barraFill").style.width = porcentaje + "%";
}

// ===================================================
// ESTUDIANTE B — Lucia R. Fernandez
// Rama: feature/datos-dinamicos-grupo-ab
// ===================================================

cromosMundial.push(
    crearJugador(1, "Enner Valencia", "🇪🇨 Ecuador", "Delantero", "EV", "#FFDD00", 38, 82, true,
        "Maximo goleador historico de Ecuador en Copas del Mundo con 6 goles."),
    crearJugador(2, "Moises Caicedo", "🇪🇨 Ecuador", "Mediocampista", "MC", "#FFDD00", 4, 35, true,
        "Debutó en la Premier League con el Brighton a los 19 años."),
    crearJugador(3, "Cody Gakpo", "🇳🇱 Paises Bajos", "Delantero", "CG", "#FF6600", 9, 21, true,
        "Anoto 3 goles en la fase de grupos del Mundial 2022."),
    crearJugador(4, "Harry Kane", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", "Delantero", "HK", "#FFFFFF", 62, 89, true,
        "Ganador de la Bota de Oro del Mundial 2018 con 6 goles."),
    crearJugador(5, "Christian Pulisic", "🇺🇸 Estados Unidos", "Delantero", "CP", "#002868", 28, 64, false,
        "Primer estadounidense en jugar y ganar la Champions League."),
    crearJugador(6, "Mehdi Taremi", "🇮🇷 Iran", "Delantero", "MT", "#239F40", 42, 76, false,
        "Maximo goleador irani en la historia de la Champions League.")
);

// ===================================================
// ESTUDIANTE C — Santiago P. Gomez
// Rama: feature/datos-dinamicos-grupo-cd
// ===================================================

cromosMundial.push(
    crearJugador(7, "Lionel Messi", "🇦🇷 Argentina", "Delantero", "LM", "#75AADB", 106, 180, true,
        "Capitan de Argentina. Gano el Balon de Oro en 8 ocasiones."),
    crearJugador(8, "Robert Lewandowski", "🇵🇱 Polonia", "Delantero", "RL", "#DC143C", 82, 146, true,
        "Maximo goleador historico de la seleccion de Polonia."),
    crearJugador(9, "Guillermo Ochoa", "🇲🇽 Mexico", "Arquero", "GO", "#006847", 0, 145, false,
        "Icono mexicano. Atajo 25 remates en su quinto Mundial consecutivo."),
    crearJugador(10, "Kylian Mbappe", "🇫🇷 Francia", "Delantero", "KM", "#002395", 46, 75, true,
        "Anoto un hat-trick en la final del Mundial 2022."),
    crearJugador(11, "Christian Eriksen", "🇩🇰 Dinamarca", "Mediocampista", "CE", "#C8102E", 40, 126, false,
        "Regreso al futbol de elite tras su paro cardiaco en la Euro 2020."),
    crearJugador(12, "Kasper Schmeichel", "🇩🇰 Dinamarca", "Arquero", "KS", "#C8102E", 0, 95, false,
        "Hijo del legendario Peter Schmeichel. Heroe en la Euro 2020.")
);

// ===================================================
// ESTUDIANTE C (extra) — Total de goles grupos C-D
// ===================================================

(function () {
    var jugadoresCD = cromosMundial.filter(function (j) { return j.id >= 7 && j.id <= 12; });
    var totalGolesCD = jugadoresCD.reduce(function (acc, j) { return acc + j.estadisticas.goles; }, 0);
    var div = document.getElementById("estadisticasCD");
    div.textContent = "Total de goles Grupos C-D (IDs 7-12): " + totalGolesCD;
})();

// ===================================================
// ESTUDIANTE E (Filtros) — Nicolas D. Ramirez
// Rama: feature/filtros-busqueda-album
// ===================================================

// Poblar select de paises
(function () {
    var paises = [];
    cromosMundial.forEach(function (j) {
        if (paises.indexOf(j.pais) === -1) {
            paises.push(j.pais);
        }
    });
    var select = document.getElementById("filtroPais");
    paises.forEach(function (p) {
        var opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        select.appendChild(opt);
    });
})();

function filtrarAlbum() {
    var texto = document.getElementById("buscador").value.toLowerCase().trim();
    var pais = document.getElementById("filtroPais").value;

    var resultado = cromosMundial.filter(function (j) {
        var coincideTexto = texto === "" || j.nombre.toLowerCase().indexOf(texto) !== -1;
        var coincidePais = pais === "" || j.pais === pais;
        return coincideTexto && coincidePais;
    });

    renderizarAlbum(resultado);
}

document.getElementById("buscador").addEventListener("input", filtrarAlbum);
document.getElementById("filtroPais").addEventListener("change", filtrarAlbum);

// ===================================================
// Renderizado inicial
// ===================================================

renderizarAlbum(cromosMundial);
