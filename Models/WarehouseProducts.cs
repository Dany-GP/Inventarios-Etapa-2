using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;


public class WarehouseProducts{

    [Key]
    public int? Warehouses { get; set; }
    [Required]
    public Products? Products { get; set; }
    [Required]
    public Int16? UnitsInStock {get; set;}
    [Required]
    public Int16? UnitsOnOrder {get; set;}
    [Required]
    public Int16? ReorderLevel {get; set;}
    [Required]
    public Boolean? Discontinued {get; set;}

}