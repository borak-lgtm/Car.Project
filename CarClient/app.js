const apiBaseUrl = "http://localhost:5000/Cars";

const form = document.getElementById("carForm");
const carId = document.getElementById("carId");
const tableBody = document.getElementById("carsTableBody");

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const year = document.getElementById("year");
const color = document.getElementById("color");
const plateNumber = document.getElementById("plateNumber");
const price = document.getElementById("price");
const cancelButton = document.getElementById("cancelButton");

async function loadCars() {
    const response = await fetch(apiBaseUrl);
    const cars = await response.json();

    tableBody.innerHTML = "";

    cars.forEach(car => {
        tableBody.innerHTML += `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>${car.color}</td>
                <td>${car.plateNumber}</td>
                <td>${car.price}</td>
                <td>
                    <button onclick="editCar(${car.id}, '${car.brand}', '${car.model}', ${car.year}, '${car.color}', '${car.plateNumber}', ${car.price})">Edito</button>
                    <button onclick="deleteCar(${car.id})">Fshi</button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const car = {
        brand: brand.value,
        model: model.value,
        year: Number(year.value),
        color: color.value,
        plateNumber: plateNumber.value,
        price: Number(price.value)
    };

    if (carId.value === "") {
        await fetch(apiBaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        });
    } else {
        await fetch(`${apiBaseUrl}/${carId.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        });
    }

    form.reset();
    carId.value = "";
    loadCars();
});

function editCar(id, carBrand, carModel, carYear, carColor, carPlateNumber, carPrice) {
    carId.value = id;
    brand.value = carBrand;
    model.value = carModel;
    year.value = carYear;
    color.value = carColor;
    plateNumber.value = carPlateNumber;
    price.value = carPrice;
}

async function deleteCar(id) {
    await fetch(`${apiBaseUrl}/${id}`, {
        method: "DELETE"
    });

    loadCars();
}

cancelButton.addEventListener("click", function () {
    form.reset();
    carId.value = "";
});

loadCars();
