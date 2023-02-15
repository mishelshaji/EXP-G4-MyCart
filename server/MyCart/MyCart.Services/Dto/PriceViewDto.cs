using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class PriceViewDto
    {
        public int Id { get; set; }

        public decimal RetailPrice { get; set; }

        public decimal OfferPrice { get; set; }
    }
}
