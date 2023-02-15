using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class CustomerAddress
    {
        public int Id { get; set; }

        public int ApplicationUserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        [StringLength(250)]
        public string PrimaryAddress { get; set; }

        [StringLength(250)]
        public string SecondaryAddress { get; set;}
    }
}
