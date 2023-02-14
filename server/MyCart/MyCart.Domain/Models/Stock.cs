using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class Stock
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        [Range(0, 1000)]
        public int Quantity { get; set; }
    }
}
