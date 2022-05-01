using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class Suppliers{
        [Key]
        public int SupplierID { get; set; }
        [MaxLength(40)]
        [Required]
        public String? CompanyName {get; set;}
       
        [MaxLength(30)]
        public String? ContactName {get; set;}
               
        [MaxLength(30)]
        public String? ContactTitle {get; set;}

        [MaxLength(60)]
        public String? Adress {get; set;}

        [MaxLength(15)]
        public String? City {get; set;}

        [MaxLength(15)]
        public String? Region {get; set;}

        [MaxLength(10)]
        public String? PostalCode {get; set;}

        [MaxLength(15)]
        public String? Country {get; set;}

        [MaxLength(24)]
        public String? Phone {get; set;}

         [MaxLength(24)]
        public String? Fax {get; set;}

        
        public String? HomePage {get; set;}

}