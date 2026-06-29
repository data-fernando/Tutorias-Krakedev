var grupo = {
    nombre: "Grupo A",
    equipos: [
        { pais: "Catar", bandera: "🇶🇦" },
        { pais: "Ecuador", bandera: "🇪🇨" },
        { pais: "Senegal", bandera: "🇸🇳" },
        { pais: "Países Bajos", bandera: "🇳🇱" }
    ]
};

document.getElementById("tituloGrupo").textContent = grupo.nombre;

var contenedor = document.getElementById("listaEquipos");

grupo.equipos.forEach(function (e) {
    var div = document.createElement("div");
    div.className = "tarjeta";

    var bandera = document.createElement("span");
    bandera.className = "bandera";
    bandera.textContent = e.bandera;

    var nombre = document.createElement("span");
    nombre.className = "nombre";
    nombre.textContent = e.pais;

    div.appendChild(bandera);
    div.appendChild(nombre);
    contenedor.appendChild(div);
});
