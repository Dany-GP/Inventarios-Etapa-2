using System.ComponentModel.DataAnnotations;

namespace aspnetcore_with_reactspa.Models;

public class Categories {
        [Key]
        public int CategoryID{get;set;}
    
        [MaxLength(15)]
        public String? CategoryName {get; set;}
        
        public String? Description {get; set;}

        public byte[]? Picture {get; set;}

}