document.addEventListener("DOMContentLoaded", function () {
    // Crear los elementos
    const body = document.body;
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    // Agregar contenido a los elementos
    h1.textContent = "Resultado de Aprendizaje";
    p1.textContent = "A continuación, se mostrará paso a paso";
    p2.textContent = "cómo Git ayudaría al versionamiento de";
    p3.textContent = "nuestro proyecto.";

    // Aplicar estilos al body
    body.style.fontFamily = "Arial, sans-serif";
    body.style.textAlign = "center";
    body.style.margin = "20px";

    // Aplicar estilos al h1
    h1.style.color = "#333";

    // Aplicar estilos a los párrafos
    [p1, p2, p3].forEach(p => p.style.fontSize = "18px");

    // Agregar los elementos al body
    body.appendChild(h1);
    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);
});
