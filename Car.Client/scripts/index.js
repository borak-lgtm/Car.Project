const tbody = document.getElementById("cars-body");

async function render() {
    const cars = await storeHttp.getAll();
    tbody.innerHTML = "";

    if (cars.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-3">No cars yet</td></tr>`;
        return;
    }

    for (const c of cars) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${c.brand}</td>
            <td>${c.model}</td>
            <td>${c.year}</td>
            <td>${c.color}</td>
            <td>${c.plateNumber}</td>
            <td>${c.price}</td>
            <td class="text-end">
                <div class="btn-group btn-group-sm" role="group">
                    <a class="btn btn-outline-secondary" href="edit-car.html?id=${c.id}">Edit</a>
                    <button class="btn btn-outline-danger" data-action="delete" data-id="${c.id}">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

tbody.addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-action='delete']");
    if (!btn) return;

    const id = Number(btn.dataset.id);

    if (confirm("Delete this car?")) {
        await storeHttp.delete(id);
        render();
    }
});

render();
