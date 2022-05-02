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
    public Products? GetByIdProduct(int id)
    {

         return _context.Products
            .Include(p => p.ProductName)
            .Include(p => p.Category)
            .AsNoTracking()
            .SingleOrDefault(p => p.ProductID == id);

    }
    public Products? GetByIdSuppliers(int id)
    {

         return _context.Suppliers
            .Include(s => s.CompanyName)
            .Include(s => s.ContactName)
            .AsNoTracking()
            .SingleOrDefault(s => s.SupplierID == id);

    }
}