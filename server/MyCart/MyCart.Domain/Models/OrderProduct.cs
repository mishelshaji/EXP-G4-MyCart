using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class OrderProduct
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public Product? Product { get; set; }

        [Range(0, 200000)]
        [Column(TypeName = "decimal(10, 3)")]
        public decimal? Price { get; set; }

        [Range(0, 200000)]
        [Column(TypeName = "decimal(10, 3)")]
        public decimal? OfferPrice { get; set; }

        public int OrderId { get; set; }

        public Order Order { get; set; }
    }
}
