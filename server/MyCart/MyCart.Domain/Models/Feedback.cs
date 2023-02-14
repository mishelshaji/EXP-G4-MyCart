using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class Feedback
    {
        public int Id { get; set; }

        public Customer Customer { get; set; }

        [StringLength(500)]
        public string Message { get; set; }
    }
}
