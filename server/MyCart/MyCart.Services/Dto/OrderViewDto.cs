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
        public int orderId { get; set; }

        public ProductViewDto Product { get; set; }

        public string DeliveryAddress { get; set; }


        public DateTime OrderTime { get; set; }

        public decimal? OfferPrice { get; set; }

        public decimal ? RetailPrice { get; set; }
    }
}
