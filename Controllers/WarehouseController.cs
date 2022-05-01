using Microsoft.AspNetCore.Mvc;
using aspnetcore_with_reactspa.Models;

namespace aspnetcore_with_reactspa;

public class WarehouseController: ControllerBase{
    WarehouseService _service;

    public WarehouseController(WarehouseService service){
        _service = service;
    }

    [HttpGet("products")]
    public IEnumerable<Products> getAllProducts(){
        return _service.getAllProducts();
    }

}