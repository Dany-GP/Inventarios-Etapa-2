using Microsoft.EntityFrameworkCore;
using aspnetcore_with_reactspa.Models;

namespace aspnetcore_with_reactspa.Data;

public class WarehouseContext : DbContext
{
    public WarehouseContext (DbContextOptions<WarehouseContext> options)
        : base(options)
    {
    }

    public DbSet<Categories> Categories => Set<Categories>();
    public DbSet<Suppliers> Suppliers => Set<Suppliers>();
    public DbSet<Warehouses> Warehouses => Set<Warehouses>();
    public DbSet<Products> Products => Set<Products>();
    public DbSet<WarehouseProducts> WarehouseProducts => Set<WarehouseProducts>();
    public DbSet<Movements> Movements => Set<Movements>();
    public DbSet<MovementDetails> MovementDetails => Set<MovementDetails>();

}