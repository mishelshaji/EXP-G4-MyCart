using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    [Index(nameof(ProductId), nameof(ApplicationUserId), IsUnique = true)]
    public class Cart
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public string ApplicationUserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public DateTime AddedDate { get; set; } = DateTime.UtcNow;
    }
}
