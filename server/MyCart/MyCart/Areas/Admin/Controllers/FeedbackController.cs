using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Admin.Controllers
{

    public class FeedbackController : AdminBaseController
    {
        private readonly FeedbackServices _service;

        public FeedbackController(FeedbackServices service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(FeedbackViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok(await _service.GetAllAsync());
        }
    }
}
