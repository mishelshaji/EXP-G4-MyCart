using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : AdminBaseController
    {
        private readonly OrderServices _service;

        public OrderController(OrderServices service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _service.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostCategory(OrderCreateDto dto)
        {
            var result = await _service.CreateAsync(dto);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _service.DeleteAsync(id);
            return result == null ? NotFound() : Ok();
        }
    }
}
