using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class Price
    {
        public int Id { get; set; }

        [Range(0, 2_00_000)]
        [Column(TypeName = "decimal(6, 3)")]
        public decimal RetailPrice { get; set; }

        [Range(0, 2_00_000)]
        [Column(TypeName = "decimal(6, 3)")]
        public decimal OfferPrice { get; set; }

        public Product Product { get; set; }
    }
}
