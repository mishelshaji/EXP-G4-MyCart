using MyCart.Domain.Models;
using MyCart.Domain.Types;
using MyCart.Services.Data;
using MyCart.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Services
{
    public class FeedbackServices
    {
        private readonly ApplicationDbContext _db;

        public FeedbackServices(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ServiceResponse<FeedbackViewDto[]>> GetAllAsync()
        {
            var feedback = await _db.Feedbacks
                .Select(f => new FeedbackViewDto
                {
                    Id = f.Id,
                    //ApplicationUserId = f.ApplicationUserId,
                    Message = f.Message,
                    CreatedOn = f.CreatedOn
                }).ToArrayAsync();

            return new()
            {
                Result = feedback
            };
        }

        public async Task<FeedbackViewDto> CreateAsync(FeedbackCreateDto dto)
        {
            Feedback feedback = new()
            {
               Fullname = dto.Fullname,
               Message = dto.Message,
               CreatedOn = dto.CreatedOn
            };

            _db.Feedbacks.Add(feedback);
            await _db.SaveChangesAsync();

            return new ()
            {
                Id = feedback.Id,
                Message = feedback.Message,
                Fullname = feedback.Fullname,
                CreatedOn = feedback.CreatedOn
            };
        }

    }
}
