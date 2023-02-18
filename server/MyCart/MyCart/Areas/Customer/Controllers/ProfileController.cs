using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCart.Services.Services;
using System.Data;
using System.Security.Claims;

namespace MyCart.WebApp.Areas.Customer.Controllers
{

    public class ProfileController : CustomerBaseController
    {
        private readonly AccountsService _service;

        public ProfileController(AccountsService service)
        {
            _service = service;
        }

        [Authorize(Roles = "customer")]
        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _service.GetProfileAsync(id);
            return user == null ? NotFound() : Ok(user);
        }
    }
}
