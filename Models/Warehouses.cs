using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class Warehouses{
        [Key]
        public int WarehouseID { get; set; }
        [MaxLength(45)]
        [Required]
        public String? Description {get; set;}
        [MaxLength(100)]
        public String? Adress {get; set;}
}