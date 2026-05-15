using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Car.API.Controllers;

[ApiController]
[Route("[controller]")]
[EnableCors("AllowAll")]
public class CarsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Car>> GetAll()
    {
        return Ok(CarStore.GetAll());
    }

    [HttpGet("{id:int}")]
    public ActionResult<Car> GetById(int id)
    {
        var car = CarStore.GetById(id);
        if (car is null) return NotFound();
        return Ok(car);
    }

    [HttpPost]
    public ActionResult<Car> Create([FromBody] Car car)
    {
        var created = CarStore.Add(car);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id:int}")]
    public IActionResult Update(int id, [FromBody] Car car)
    {
        if (!CarStore.Update(id, car)) return NotFound();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        if (!CarStore.Delete(id)) return NotFound();
        return NoContent();
    }
}
