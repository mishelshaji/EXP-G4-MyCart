//using MyCart.Domain.Models;
//using MyCart.Domain.Types;
//using MyCart.Services.Data;
//using MyCart.Services.Dto;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace MyCart.Services.Services
//{
//    public class OrderServices
//    {
//        private readonly ApplicationDbContext _db;

//        public OrderServices(ApplicationDbContext db)
//        {
//            _db = db;
//        }

//        public async Task<ServiceResponse<List<OrderViewDto>>> GetAllAsync()
//        {
//            var orders = await _db.Orders.Select(m => new OrderViewDto
//            {
//                Id = m.Id,
//                CustomerId = m.CustomerId,
//                Customer = m.Customer,
//                DeliveryAddress = m.DeliveryAddress,
//                PaymentStatus = m.PaymentStatus,
//                OrderTime = m.OrderTime,
//                TotalPrice = m.TotalPrice
//            }).ToListAsync();

//            return new()
//            {
//                Result = orders
//            };
//        }

//        public async Task<ServiceResponse<OrderViewDto>> CreateAsync(OrderCreateDto dto)
//        {

//            var result = new ServiceResponse<OrderViewDto>();
//            var customer = _db.Customers.FirstOrDefault(m => m.Id == dto.CustomerId);
//            Order order = new()
//            {
//                CustomerId = dto.CustomerId,
//                DeliveryAddress = dto.DeliveryAddress,
//                OrderTime = dto.OrderTime,
//                PaymentStatus = dto.PaymentStatus,
//                TotalPrice = dto.TotalPrice
//            };


//            _db.Orders.Add(order);
//            await _db.SaveChangesAsync();

//            result.Result = new()
//            {
//                Id = order.Id,

//                Customer = new()
//                {
//                    Id = customer.Id,
//                    Name = customer.Name,
//                    Email = customer.Email,

//                },
//                DeliveryAddress = order.DeliveryAddress,
//                OrderTime = order.OrderTime,
//                PaymentStatus = order.PaymentStatus,
//                TotalPrice = order.TotalPrice
//            };

//            return result;
//        }

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
