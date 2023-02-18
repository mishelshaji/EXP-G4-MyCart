using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Dto;
using MyCart.Services.Services;
using System.Data;
using System.Security.Claims;

namespace MyCart.WebApp.Areas.User.Controllers
{

    public class AccountsController : UserControllerBase
    {
        private readonly AccountsService _service;

        public AccountsController(AccountsService service)
        {
            _service = service;
        }

        [HttpPost("customer/register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostCustomer(CustomerCreateDto dto)
        {
            var result = await _service.CreateCustomerAsync(dto);
            if (!result.IsValid)
            {
                return BadRequest(result.Errors);
            }

            return Ok();
        }

        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostLogin(LoginDto dto)
        {
            var result = await _service.LoginAsync(dto);
            if (result.IsValid)
                return Ok(result);

            return BadRequest(result.Errors);
        }

        ////[Authorize(Roles = "Customer")]
        //[HttpGet]
        //public async Task<IActionResult> GetProfile()
        //{
        //    var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
        //    //string id = "84b932d5-2969-4c3c-980e-962cf96e802e";
        //    var user = await _service.GetProfileAsync(id);
        //    return Ok(user);
        //}
    }
}

