using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyCart.WebApp.Areas.Admin.Controllers
{
    [Area("area")]
    [Route("api/[area]/[controller]")]
    [ApiController]
    public class AdminBaseController : ControllerBase
    {
    }
}
