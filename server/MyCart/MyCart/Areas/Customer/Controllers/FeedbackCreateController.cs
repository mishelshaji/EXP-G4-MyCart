using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Customer.Controllers
{
    public class FeedbackCreateController : CustomerBaseController
    {
        private readonly FeedbackServices _services;

        public FeedbackCreateController(FeedbackServices services)
        {
            _services = services;
        }

        [HttpPost]
        [ProducesResponseType(typeof(FeedbackCreateDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> PostAsync(FeedbackCreateDto dto)
        {
            var result = await _services.CreateAsync(dto);
            return Ok(result);
        }
    }
}
