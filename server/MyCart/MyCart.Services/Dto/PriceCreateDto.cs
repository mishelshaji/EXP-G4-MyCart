using MyCart.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class PriceCreateDto
    {
        public decimal RetailPrice { get; set; }

        public decimal OfferPrice { get; set; }

        public int ProductId { get; set; }

        public Product?  Product { get; set; }
    }
}
