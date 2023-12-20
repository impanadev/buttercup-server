using System.ComponentModel.DataAnnotations;
namespace ButtercupServer.Models
{
   public class VaultData
    {
        [Key]
        public int id { get; set; }
        public string vaultName { get; set; }
        public string vault { get; set; }
    }
}