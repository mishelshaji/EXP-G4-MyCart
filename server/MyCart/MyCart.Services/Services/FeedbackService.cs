using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
        private readonly UserManager<ApplicationUser> _userManager;

        public FeedbackServices(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _userManager = userManager;
        }
        public async Task<ServiceResponse<FeedbackViewDto[]>> GetAllAsync()
        {
            var feedback = await _db.Feedbacks.Include(m => m.ApplicationUser)
            .Where(m => m.ApplicationUser.Id == m.ApplicationUserId)
            .Select(f => new FeedbackViewDto
            {
                Id = f.Id,
                UserEmail = f.ApplicationUser.Email,
                Message = f.Message,
                CreatedOn = f.CreatedOn
            }).ToArrayAsync();

            return new()
            { 
                Result = feedback
            };
        }
        public async Task<FeedbackViewDto> CreateAsync(FeedbackCreateDto dto, string id)
        {

            if (id == null)
                return null;

            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == id);

            Feedback feedback = new()
            {
                UserEmail = user.Email,
                Message = dto.Message,
                ApplicationUserId = id,
                CreatedOn = DateTime.Now
            };
            _db.Feedbacks.Add(feedback);
            await _db.SaveChangesAsync();
            return new()
            {
                Id = feedback.Id,
                Message = feedback.Message,
                CreatedOn = feedback.CreatedOn
            };
        }
    }
}
