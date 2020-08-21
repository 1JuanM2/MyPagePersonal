const $divContainer = document.getElementById("container"),
    $templateTabla = document.getElementById("templateTabla");

async function fntListarRegistros(){
    const peticion = await fetch("info.json");
    const respuesta = await peticion.json();

    const $tablaRegistros = $templateTabla.content.cloneNode(true);
    const $bodyTable = $tablaRegistros.querySelector("tbody");
    respuesta.Registros.forEach(valor => {
        const item = document.createElement("tr");
        item.innerHTML = `
        <td>${valor[0]}</td>
        <td>${valor[1]}</td>
        <td>${valor[2]}</td>
        <td>${valor[3]}</td>
        <td>${valor[4]}</td>
        <td>${valor[5]}</td>
        <td>${valor[6]}</td>
        <td>${valor[7]}</td>
        <td>${valor[8]}</td>
        <td>${valor[9]}</td>
        `;
        $bodyTable.appendChild(item);
    });
    $divContainer.appendChild($tablaRegistros);
}

document.addEventListener("DOMContentLoaded", async () => {
    await fntListarRegistros();
});