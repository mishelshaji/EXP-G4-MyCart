using Microsoft.AspNetCore.Identity;
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
        private readonly UserManager<ApplicationUser> _userDb;

        public CartServices(ApplicationDbContext db,
           UserManager<ApplicationUser> userDb)
        {
            _db = db;
            _userDb = userDb;
        }

        public async Task<ServiceResponse<CartViewDto[]>> GetAllAsync(string id)
        {
            // Select all the record of the specified user from the database
            var cart = await _db.Carts
                        .Include(x => x.Product)
                        .Where(m => m.ApplicationUserId == id)
                        .Select(m => new CartViewDto
                        {
                            Id = m.Id,
                            Product = new()
                            {
                                Id = m.Product.Id,
                                Name = m.Product.Name,
                                Brand = m.Product.Brand,
                                Description = m.Product.Description,
                                Category = new()
                                {
                                    Id = m.Product.Category.Id,
                                    Name = m.Product.Category.Name,
                                    Description = m.Product.Description,
                                },
                                Price = new()
                                {
                                    OfferPrice = m.Product.Price.OfferPrice,
                                }
                            }
                        }).ToArrayAsync();

            return new()
            {
                Result = cart
            };
        }

        public async Task<ServiceResponse<bool>?> CreateAsync(CartCreateDto dto, string id)
        {
            var result = await _db.Products.FindAsync(dto.ProductId);
            Cart cart = new()
            {
                ApplicationUserId = id,
                ProductId = dto.ProductId,
            };

            _db.Carts.Add(cart);
            await _db.SaveChangesAsync();

            return new ()
            {
                Result = true

            };
        }

        public async Task<ServiceResponse<bool>?> DeleteAsync(int id, string userId)
        {
            var cart = await _db.Carts.FindAsync(id);

            if (cart == null)
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
