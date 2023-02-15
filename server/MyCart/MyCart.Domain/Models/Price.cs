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

        [Column(TypeName = "decimal(10, 3)")]
        public decimal RetailPrice { get; set; }


        [Column(TypeName = "decimal(10, 3)")]
        public decimal OfferPrice { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        public DateTime? UpdatedOn { get; set; }
    }
}
