using System.ComponentModel.DataAnnotations;
namespace ButtercupServer.Models
{
    public class UserData
    {
        public int id { get; set; }
        public string tideUID { get; set; }
        public List<VaultData> vaultData { get; set; }
    }

    public class VaultData
    {
        [Key]
        public int id { get; set; }
        public string vaultName { get; set; }
        public string vault { get; set; }
    }
}