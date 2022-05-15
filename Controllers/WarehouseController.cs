using Microsoft.AspNetCore.Mvc;
using aspnetcore_with_reactspa.Models;

namespace aspnetcore_with_reactspa;

[ApiController]
[Route("[controller]")]
public class WarehouseController: ControllerBase{
    WarehouseService _service;

    public WarehouseController(WarehouseService service){
        _service = service;
    }

    [HttpGet]
    public IEnumerable<Product> getAllProducts(){
        return _service.getAllProducts();
    }
    [HttpGet("{id}")]
    public ActionResult<Products> GetByIdProduct(int id)
    {
        var products = _service.GetByIdProduct(id);

        if(products is not null)
        {
            return products;
        }
        else
        {
            return NotFound();
        }
    }
   
}