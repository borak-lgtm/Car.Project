namespace Car.API;

public static class CarStore
{
    private static readonly List<Car> Cars =
    [
        new Car { Id = 1, Brand = "Mercedes-Benz", Model = "C-Class", Year = 2020, Color = "E zeze", PlateNumber = "AA123BB", Price = 28500 },
        new Car { Id = 2, Brand = "BMW", Model = "320d", Year = 2019, Color = "E bardhe", PlateNumber = "AB456CD", Price = 24900 },
        new Car { Id = 3, Brand = "Audi", Model = "A4", Year = 2021, Color = "Gri", PlateNumber = "AC789EF", Price = 31500 }
    ];

    public static IEnumerable<Car> GetAll() => Cars;

    public static Car? GetById(int id) => Cars.FirstOrDefault(c => c.Id == id);

    public static Car Add(Car car)
    {
        car.Id = Cars.Count == 0 ? 1 : Cars.Max(c => c.Id) + 1;
        Cars.Add(car);
        return car;
    }

    public static bool Update(int id, Car car)
    {
        var existing = Cars.FirstOrDefault(c => c.Id == id);
        if (existing is null) return false;

        existing.Brand = car.Brand;
        existing.Model = car.Model;
        existing.Year = car.Year;
        existing.Color = car.Color;
        existing.PlateNumber = car.PlateNumber;
        existing.Price = car.Price;
        return true;
    }

    public static bool Delete(int id)
    {
        var existing = Cars.FirstOrDefault(c => c.Id == id);
        if (existing is null) return false;

        Cars.Remove(existing);
        return true;
    }
}
