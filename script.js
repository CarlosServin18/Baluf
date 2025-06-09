// Función básica para cargar datos de ejemplo desde un API
function cargarDatos() {
    document.querySelectorAll('.data').forEach(div => {
        const endpoint = div.getAttribute('data-endpoint');
        if (endpoint) {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => {
                    const pre = document.createElement('pre');
                    pre.textContent = JSON.stringify(data.slice(0, 3), null, 2);
                    div.appendChild(pre);
                })
                .catch(() => {
                    div.textContent = 'Error al cargar los datos';
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', cargarDatos);
