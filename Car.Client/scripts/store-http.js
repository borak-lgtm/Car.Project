const API_BASE_URL = "http://localhost:5000/Cars";

const storeHttp = {
    async getAll() {
        const res = await fetch(API_BASE_URL);
        if (!res.ok) throw new Error(`Failed to load cars: ${res.status}`);
        return res.json();
    },

    async getById(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`Failed to load car ${id}: ${res.status}`);
        return res.json();
    },

    async add(car) {
        const res = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(car)
        });
        if (!res.ok) throw new Error(`Failed to create car: ${res.status}`);
        return res.json();
    },

    async update(id, car) {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...car, id })
        });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Failed to update car ${id}: ${res.status}`);
        return true;
    },

    async delete(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE"
        });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Failed to delete car ${id}: ${res.status}`);
        return true;
    }
};
