using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;
using System.Security.Claims;

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
            //var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var id = "da9f2a69-fede-4035-b07e-8c7741d5cd41";
            var result = await _services.CreateAsync(dto, id);
            return Ok(result);
        }
    }
}
