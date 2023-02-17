﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class FeedbackViewDto
    {
        public int Id { get; set; }

        public string Fullname { get; set; }

        public string Message { get; set; }

        public DateTime CreatedOn { get; set; }


        public FeedbackViewDto(){}
    }
}
