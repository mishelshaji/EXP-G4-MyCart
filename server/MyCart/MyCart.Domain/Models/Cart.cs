using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class Cart
    {
        public int Id { get; set; }

        public Product Product { get; set; }    

        public Customer Customer { get; set; }
    }
}
