using System.ComponentModel.DataAnnotations;
namespace ButtercupServer.Models
{
    public class UserData
    {
        [Key]
        public int id { get; set; }
        public string tideUID { get; set; }
        public List<VaultData> vaultData { get; set; }
    }

}