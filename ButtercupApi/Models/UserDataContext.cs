using Microsoft.EntityFrameworkCore;

namespace ButtercupAPI.Models;

public class UserDataContext : DbContext
{
    public UserDataContext(DbContextOptions<UserDataContext> options)
        : base(options)
    {
    }

    public DbSet<UserData> UserDatas { get; set; } = null!;

     protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserData>().HasKey(x => x.tideUID);
    }
}