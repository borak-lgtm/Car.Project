const form = document.getElementById("car-form");
const idInput = document.getElementById("id");
const brandInput = document.getElementById("brand");
const modelInput = document.getElementById("model");
const yearInput = document.getElementById("year");
const colorInput = document.getElementById("color");
const plateNumberInput = document.getElementById("plateNumber");
const priceInput = document.getElementById("price");

const id = Number(new URLSearchParams(window.location.search).get("id"));

async function loadCar() {
    const car = await storeHttp.getById(id);

    if (!car) {
        alert("Car not found");
        window.location.href = "index.html";
        return;
    }

    idInput.value = car.id;
    brandInput.value = car.brand;
    modelInput.value = car.model;
    yearInput.value = car.year;
    colorInput.value = car.color;
    plateNumberInput.value = car.plateNumber;
    priceInput.value = car.price;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await storeHttp.update(Number(idInput.value), {
        brand: brandInput.value.trim(),
        model: modelInput.value.trim(),
        year: Number(yearInput.value),
        color: colorInput.value.trim(),
        plateNumber: plateNumberInput.value.trim(),
        price: Number(priceInput.value)
    });

    window.location.href = "index.html";
});

loadCar();
