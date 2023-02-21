using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.FlowAnalysis.DataFlow.ValueContentAnalysis;
using MyCart.Services.Dto;
using MyCart.Services.Services;
using MyCart.WebApp.Areas.Customer.Controllers;
using System.Security.Claims;

namespace MyCart.WebApp.Areas.Admin.Controllers
{

    public class OrderController : CustomerBaseController
    {
        private readonly OrderServices _service;

        public OrderController(OrderServices service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _service.GetAllForCustomerAsync(userId);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostOrders(OrderCreateDto dto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _service.CreateAsync(dto, userId);
            return Ok(result);
        }
    }
}
