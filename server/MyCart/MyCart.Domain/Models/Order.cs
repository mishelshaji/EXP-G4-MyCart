﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MyCart.Domain.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Domain.Models
{
    public class Order
    {


        public int Id { get; set; }

        public Customer Customer { get; set; }

        [StringLength(250)]
        public string DeliveryAddress { get; set; }

        public PaymentStatus PaymentStatus { get; set; }

        public DateTime OrderTime { get; set; }

        [Range(0, 10_00_000)]
        [Column(TypeName = "decimal(7, 3)")]
        public decimal TotalPrice { get; set; }
    }
}