# Projekti Final - Menaxhimi i Makinave

Ky projekt eshte versioni per makina i projektit `Student.API.IMI`. Struktura e API-se eshte mbajtur e ngjashme: `Program.cs`, `CarsController`, `CarStore` in-memory dhe modeli `Car`.

## Teknologjite

- ASP.NET Core Web API
- Swagger
- HTML, CSS dhe JavaScript per klientin
- CORS i hapur per lidhjen Client + API

## Struktura

```text
Car.API/
  Controllers/CarsController.cs
  Data/CarStore.cs
  Data/Models/Car.cs
  Program.cs
Car.Client/
  index.html
  styles.css
  app.js
```

## Endpoint-et

| Metoda | URL | Pershkrimi |
| --- | --- | --- |
| GET | `/Cars` | Merr te gjitha makinat |
| GET | `/Cars/{id}` | Merr nje makine sipas ID |
| POST | `/Cars` | Shton makine |
| PUT | `/Cars/{id}` | Perditeson makine |
| DELETE | `/Cars/{id}` | Fshin makine |

## Si ta ekzekutosh

1. Hap terminalin te folderi i projektit.
2. Nis API-ne:

```bash
dotnet run --project Car.API
```

3. Hap Swagger:

```text
http://localhost:5000/swagger
```

4. Hap klientin:

```text
Car.Client/index.html
```

Klienti pret qe API te punoje ne `http://localhost:5000/Cars`.
