using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ButtercupServer.Models;

namespace ButtercupServer.Data
{
    public class VaultContext : DbContext
    {
        public VaultContext(DbContextOptions<VaultContext> options)
            : base(options)
        {
        }

        public DbSet<UserData> UserData { get; set; }
        public DbSet<VaultData> VaultData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VaultData>().ToTable("VaultData");
            modelBuilder.Entity<UserData>().ToTable("UserData");
        }
    }
}
