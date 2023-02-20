        using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MyCart.Domain.Models;
using MyCart.Domain.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class OrderViewDto
    {
        public int Id { get; set; }
        public string DeliveryAddress { get; set; }

        public PaymentStatus PaymentStatus { get; set; }

        public DateTime OrderTime { get; set; }

        public decimal TotalPrice { get; set; }

        public Order Order { get; set; }
    }
}
