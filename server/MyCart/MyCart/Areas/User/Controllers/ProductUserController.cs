using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.User.Controllers
{
    public class ProductUserController : UserControllerBase
    {
        private readonly ProductService _services;

        public ProductUserController(ProductService service)
        {
            _services = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _services.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOne(int id)
        {
            var result = await _services.GetByIdAsync(id);
            if (result == null)
                return NotFound();

            return Ok(result.Result);
        }
    }
}
