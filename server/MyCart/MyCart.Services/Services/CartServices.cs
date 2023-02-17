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
    public class CartServices
    {
        private readonly ApplicationDbContext _db;

        public CartServices(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<List<CartViewDto>> GetAllAsync()
        {
            return await _db.Carts.Select(m => new CartViewDto
            { 
                Id = m.Id,
                ProductId= m.ProductId,
            }).ToListAsync();
        }

        public async Task<CartViewDto> CreateAsync(CartCreateDto dto)
        {
            var result = await _db.Products.FindAsync(dto.ProductId);
            Cart cart = new()
            {
                ProductId = dto.ProductId,
            };

            _db.Carts.Add(cart);
            await _db.SaveChangesAsync();

            return new CartViewDto
            {
                Id = cart.Id,
                ProductId = cart.ProductId,
            };
        }

        public async Task<ServiceResponse<bool>?> DeleteAsync(int id)
        {
            var cart = await _db.Carts.FindAsync(id);
            if (cart != null)
            {
                return null;
            }

            _db.Carts.Remove(cart);
            await _db.SaveChangesAsync();
            return new ServiceResponse<bool>
            {
                Result = true
            };
        }
    }
}
