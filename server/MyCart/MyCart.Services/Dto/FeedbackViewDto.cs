using MyCart.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class FeedbackViewDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ApplicationUserId { get; set; }

        
        public string Message { get; set; }

        public DateTime CreatedOn { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
    }
}
