const form = document.getElementById("car-form");
const brandInput = document.getElementById("brand");
const modelInput = document.getElementById("model");
const yearInput = document.getElementById("year");
const colorInput = document.getElementById("color");
const plateNumberInput = document.getElementById("plateNumber");
const priceInput = document.getElementById("price");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await storeHttp.add({
        brand: brandInput.value.trim(),
        model: modelInput.value.trim(),
        year: Number(yearInput.value),
        color: colorInput.value.trim(),
        plateNumber: plateNumberInput.value.trim(),
        price: Number(priceInput.value)
    });

    window.location.href = "index.html";
});
