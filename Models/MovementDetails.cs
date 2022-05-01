using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class MovementDetails{
    [Key]
    public Movements Movements {get; set;}
    [Key]
    public Products Products {get; set;}
    [Required]
    public int Quantity {get; set;}
}