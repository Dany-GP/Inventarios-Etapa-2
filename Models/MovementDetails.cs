using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace aspnetcore_with_reactspa.Models;

[Keyless]
public class MovementDetails{
    
    public Movements? Movements {get; set;}
    
    public Products? Products {get; set;}
    [Required]
    public int Quantity {get; set;}
}