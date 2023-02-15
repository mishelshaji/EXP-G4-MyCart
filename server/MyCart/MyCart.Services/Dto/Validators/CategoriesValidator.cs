using FluentValidation;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Dto.Validators
{
    public class CategoriesValidator : AbstractValidator<CategoryCreateDto>
    {

        public CategoriesValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Name is required");

        }

    }
}
