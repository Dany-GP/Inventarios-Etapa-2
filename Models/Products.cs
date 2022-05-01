using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class Products{
    public int ProductID { get; set; }
        [MaxLength(40)]
        [Required]
        public String? ProductName {get; set;}
        public Suppliers? Supplier {get; set;}
        public Categories? Category {get; set;}

       [ MaxLength(20)]
        public String? QuantityPerUnit {get; set;}
        public Double? UnitPrice {get; set;}

        [ MaxLength(50)]
        public String? PhotoPath {get; set;}
}