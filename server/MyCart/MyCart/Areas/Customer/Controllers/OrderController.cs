//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using MyCart.Services.Dto;
//using MyCart.Services.Services;
//using MyCart.WebApp.Areas.Customer.Controllers;

//namespace MyCart.WebApp.Areas.Admin.Controllers
//{
    
//    public class OrderController : CustomerBaseController
//    {
//        private readonly OrderServices _service;

//        public OrderController(OrderServices service)
//        {
//            _service = service;
//        }

//        [HttpGet]
//        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status200OK)]
//        public async Task<IActionResult> GetAll()
//        {
//            var result = await _service.GetAllAsync();
//            return Ok(result);
//        }

//        [HttpPost]
//        [ProducesResponseType(typeof(OrderViewDto), StatusCodes.Status201Created)]
//        public async Task<IActionResult> PostOrders(OrderCreateDto dto)
//        {
//            var result = await _service.CreateAsync(dto);
//            return Ok(result);
//        }

//        [HttpDelete("{id}")]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
//        public async Task<IActionResult> Delete(int id)
//        {
//            var result = await _service.DeleteAsync(id);
//            return result == null ? NotFound() : Ok();
//        }
//    }
//}
