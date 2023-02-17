using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Customer.Controllers
{
    public class CartController : CustomerBaseController
    {
        private readonly CartServices _cartservices;

        public CartController(CartServices cartservices)
        {
            _cartservices = cartservices;
        }

        [HttpGet]
        [ProducesResponseType(typeof(CartViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _cartservices.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CartViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> Post(CartCreateDto dto)
        {
            var result = await _cartservices.CreateAsync(dto);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _cartservices.DeleteAsync(id);
            return result == null ? NotFound() : Ok();
        }
    }
}
