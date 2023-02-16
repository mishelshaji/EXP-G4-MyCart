using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Admin.Controllers
{
    public class CategoryController : AdminBaseController
    {
        private readonly CategoryServices _services;

        public CategoryController(CategoryServices services)
        {
            _services = services;
        }

        [HttpGet]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _services.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostCategory(CategoryCreateDto dto)
        {
            var result = await _services.CreateAsync(dto);
            return Ok(result);
        }


        [HttpPut]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Put(int id, CategoryCreateDto dto)
        {
            var result = await _services.UpdateAsync(id, dto);

            if (result == null)
                return NotFound();

            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result.Result);
        }



        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _services.DeleteAsync(id);
            return result == null ? NotFound() : Ok();
        }
    }
}
