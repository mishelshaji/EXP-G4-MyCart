using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
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
    public class OrderServices
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userDb;

        public OrderServices(ApplicationDbContext db, UserManager<ApplicationUser> userDb)
        {
            _db = db;
            _userDb = userDb;
        }

        //public async Task<ServiceResponse<List<OrderViewDto>>> GetAllAsync()
        //{
        //    var orders = await _db.Orders.Select(m => new OrderViewDto
        //    {
        //        Id = m.Id,
        //        CustomerId = m.CustomerId,
        //        Customer = m.Customer,
        //        DeliveryAddress = m.DeliveryAddress,
        //        PaymentStatus = m.PaymentStatus,
        //        OrderTime = m.OrderTime,
        //        TotalPrice = m.TotalPrice
        //    }).ToListAsync();

        //    return new()
        //    {
        //        Result = orders
        //    };
        //}

        public async Task<ServiceResponse<OrderViewDto>?> CreateAsync(OrderCreateDto dto, string userId)
        {

            var result = new ServiceResponse<OrderViewDto?>();
            var cartProducts = await _db.Carts.Include(m=>m.Product)
                            .Where(m=>m.ApplicationUserId == userId).ToArrayAsync();
            if(!cartProducts.Any())
            {
                return null;
            }

            if (!result.IsValid)
            {
                return result;
            }
            var orders = new Order
            {
                ApplicationUserId = userId,
                DeliveryAddress = dto.DeliveryAddress,
                PaymentStatus = PaymentStatus.Paid,
                OrderTime = DateTime.UtcNow,
                TotalPrice = dto.TotalPrice,
            };

            _db.Orders.Add(orders);
            await _db.SaveChangesAsync();

            var ordersByUser = await _db.Orders.FindAsync(orders.Id);
            if(ordersByUser != null)
            {
                foreach (var item in cartProducts)
                {
                    var price = await _db.Prices.FirstOrDefaultAsync(m=>m.ProductId == item.ProductId);
                    var orderProduct = new OrderProduct()
                    {
                        ProductId = item.ProductId,
                        OfferPrice = price.OfferPrice,
                        OrderId = orders.Id,
                        Price = price.RetailPrice
                    };

                    _db.Orderproducts.Add(orderProduct);
                    await _db.SaveChangesAsync();
                }
            }
            return result;

        }
    }
}

//    var customer = _db.Customers.FirstOrDefault(m => m.Id == dto.CustomerId);
//    Order order = new()
//    {
//        CustomerId = dto.CustomerId,
//        DeliveryAddress = dto.DeliveryAddress,
//        OrderTime = dto.OrderTime,
//        PaymentStatus = dto.PaymentStatus,
//        TotalPrice = dto.TotalPrice
//    };


//    _db.Orders.Add(order);
//    await _db.SaveChangesAsync();

//    result.Result = new()
//    {
//        Id = order.Id,

//        Customer = new()
//        {
//            Id = customer.Id,
//            Name = customer.Name,
//            Email = customer.Email,

//        },
//        DeliveryAddress = order.DeliveryAddress,
//        OrderTime = order.OrderTime,
//        PaymentStatus = order.PaymentStatus,
//        TotalPrice = order.TotalPrice
//    };

//    return result;
//}

//        public async Task<ServiceResponse<bool>?> DeleteAsync(int id)
//        {
//            var order = await _db.Orders.FindAsync(id);
//            if (order == null)
//                return null;

//            _db.Orders.Remove(order);
//            await _db.SaveChangesAsync();

//            return new ServiceResponse<bool>
//            {
//                Result = true
//            };
//        }
//    }
//}
