﻿using System;
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

        [StringLength(25)]
        public string Fullname { get; set; }

        [StringLength(250)]
        public string Message { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    }
}
