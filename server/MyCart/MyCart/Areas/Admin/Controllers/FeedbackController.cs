//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using MyCart.Services.Dto;
//using MyCart.Services.Services;

//namespace MyCart.WebApp.Areas.Admin.Controllers
//{

//    public class FeedbackController : AdminBaseController
//    {
//        private readonly FeedbackService _service;

//        public FeedbackController(FeedbackService service)
//        {
//            _service = service;
//        }

//        [HttpGet]
//        [ProducesResponseType(typeof(FeedbackViewDto[]), StatusCodes.Status200OK)]
//        public async Task<IActionResult> GetAllAsync()
//        {
//            var result = await _service.GetAllAsync();
//            return Ok(result.Result);
//        }
//    }
//}
