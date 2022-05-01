using aspnetcore_with_reactspa.Data;
using aspnetcore_with_reactspa.Models;
using   Microsoft.EntityFrameworkCore;

namespace aspnetcore_with_reactspa;

public class WarehouseService
{
    private readonly WarehouseContext _context;

    public WarehouseService(WarehouseContext context)
    {
        _context = context;
    }

    public IEnumerable<Products> getAllProducts(){
        return _context.Products.AsNoTracking().ToList();
    }
}