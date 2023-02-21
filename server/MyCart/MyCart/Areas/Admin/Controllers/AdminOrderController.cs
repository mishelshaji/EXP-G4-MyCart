using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Admin.Controllers
{
    public class AdminOrderController : AdminBaseController
    {
        private readonly OrderServices _services;

        public AdminOrderController(OrderServices services)
        {
            _services = services;
        }

        [HttpGet]
        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _services.GetAllAsync();
            return Ok(result);
        }
    }
}
