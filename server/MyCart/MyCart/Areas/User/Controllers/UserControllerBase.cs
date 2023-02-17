using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyCart.WebApp.Areas.User.Controllers
{
    [Area("User")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserControllerBase : ControllerBase
    {
    }
}
