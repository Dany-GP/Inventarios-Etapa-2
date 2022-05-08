using aspnetcore_with_reactspa.Data;
using Microsoft.EntityFrameworkCore;
using aspnetcore_with_reactspa.Controllers;
using aspnetcore_with_reactspa;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

//builder.Services.AddControllers();

// Add the PizzaContext
//builder.Services.AddSqlite<WarehouseContext>("Data Source=Prueba.db");  

var connectionString = builder.Configuration.GetConnectionString("BDNorthwind");
builder.Services.AddDbContext<NorthwindContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

// Add the CreateDbInNotExists method call


app.Run();
