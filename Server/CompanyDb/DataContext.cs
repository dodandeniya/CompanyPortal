using CompanyDomain;
using Microsoft.EntityFrameworkCore;
using System;

namespace CompanyDb
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Person> User { get; set; }
        public DbSet<Company> Company { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Company>().HasData(
                new Company { CompanyId = 1, CompanyName = "vs", CompanyAddress = "abc" },
                 new Company { CompanyId = 2, CompanyName = "vs_cmb", CompanyAddress = "abc sl" }
                );
        }
    }
}
