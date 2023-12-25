using System.ComponentModel.DataAnnotations;
namespace ButtercupAPI.Models;

public class UserData
{
    [Key]
	public long tideUID {get;set;}
	public string vaultName {get; set;}
	public string vaultData {get; set;}
}