using MyCart.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class FeedbackCreateDto
    {
        public string ApplicationUserId { get; set; } 

        public string Message { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    }
}
