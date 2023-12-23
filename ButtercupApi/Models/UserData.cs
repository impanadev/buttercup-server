using System.ComponentModel.DataAnnotations;
namespace ButtercupAPI.Models;

public class UserData
{
    [Key]
	public long tideUID {get;set;}
	public List<VaultData> vaultData {get;set;}
}

public class VaultData
{
	public long id {get; set;}
	public string vaultName {get; set;}
	public List<string> vaults {get; set;}
}