// Carga datos de ejemplo en tablas usando un API
function cargarDatos() {
    document.querySelectorAll('.data').forEach(div => {
        const endpoint = div.dataset.endpoint;
        if (!endpoint) return;

        fetch(endpoint)
            .then(resp => resp.json())
            .then(data => {
                if (!Array.isArray(data) || data.length === 0) {
                    div.textContent = 'Sin datos';
                    return;
                }
                const keys = Object.keys(data[0]);
                const table = document.createElement('table');
                const thead = document.createElement('thead');
                const headRow = document.createElement('tr');
                keys.forEach(k => {
                    const th = document.createElement('th');
                    th.textContent = k;
                    headRow.appendChild(th);
                });
                thead.appendChild(headRow);
                table.appendChild(thead);

                const tbody = document.createElement('tbody');
                data.slice(0, 5).forEach(item => {
                    const tr = document.createElement('tr');
                    keys.forEach(k => {
                        const td = document.createElement('td');
                        td.textContent = item[k];
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);
                div.appendChild(table);
            })
            .catch(() => {
                div.textContent = 'Error al cargar los datos';
            });
    });
}

document.addEventListener('DOMContentLoaded', cargarDatos);
