using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyCart.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCart.Services.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {
                
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Seeding Roles
            var roles = new IdentityRole[]
            {
                new IdentityRole()
                {
                    Id = "e2a85572-7b8c-4a95-a862-c557c3b2e869",
                    ConcurrencyStamp = "e2a85572-7b8c-4a95-a862-c557c3b2e869",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole()
                {
                    Id = "e2a85572-7b8c-4a95-a862-c557c3b2e870",
                    ConcurrencyStamp = "e2a85572-7b8c-4a95-a862-c557c3b2e870",
                    Name = "Customer",
                    NormalizedName = "CUSTOMER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
            #endregion

        public DbSet<Cart> Carts { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<CustomerAddress> CustomerAddresses { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Feedback> Feedbacks { get; set; }

        public DbSet<OrderProduct> Orderproducts { get; set; }
        
        public DbSet<Price> Prices { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Stock> Stocks { get; set; }

    }
}
