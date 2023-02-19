using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto
{
    public class CustomerCreateDto
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public  string phone { get; set; }

        public  DateTime DateOfBirth { get; set; }
    }
}
