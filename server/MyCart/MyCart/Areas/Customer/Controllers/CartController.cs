using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;
using System.Security.Claims;

namespace MyCart.WebApp.Areas.Customer.Controllers
{
    //[Authorize]
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
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _cartservices.GetAllAsync(userId);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CartViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> Post(CartCreateDto dto)
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _cartservices.CreateAsync(dto, id);
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
