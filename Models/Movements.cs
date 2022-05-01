using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class Movements{
    [Key]
    public int MovementID {get; set;}
    [Required]
    public DateTime? Date {get; set;}
    public Suppliers? Suppliers {get; set;}
    [Required]
    public Warehouses? OriginWarehouse {get; set;}
    public Warehouses? TargetWarehouse {get; set;}
    [Required]
    public String? TipoMovimiento {get;set;}
    [MaxLength(200)]
    public String? Notes {get; set;}
}