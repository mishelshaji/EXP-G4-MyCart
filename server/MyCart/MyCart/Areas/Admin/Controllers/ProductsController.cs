using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Domain.Models;
using MyCart.Services.Dto;
using MyCart.Services.Services;

namespace MyCart.WebApp.Areas.Admin.Controllers
{

    public class ProductsController : AdminBaseController
    {
        private readonly ProductServices _services;

        public ProductsController(ProductServices services) 
        {
            _services = services;
        } 

        [HttpPost]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create(ProductCreateDto dto)
        {
            var result = await _services.CreateAysnc(dto);
            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result);
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

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Udpate(int id, ProductCreateDto dto)
        {
            var result = await _services.UpdateAsync(id, dto);

            if (result == null)
                return NotFound();

            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result.Result);
        }

    }
}
