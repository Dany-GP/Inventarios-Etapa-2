using aspnetcore_with_reactspa.Data;
using aspnetcore_with_reactspa.Models;
using   Microsoft.EntityFrameworkCore;

namespace aspnetcore_with_reactspa;

public class WarehouseService
{
    private readonly NorthwindContext _context;

    public WarehouseService(NorthwindContext context)
    {
        _context = context;
    }

    public IEnumerable<Product> getAllProducts(){
        return _context.Products.AsNoTracking().ToList();
    }
}