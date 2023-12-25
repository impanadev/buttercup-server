using System.ComponentModel.DataAnnotations;
namespace ButtercupAPI.Models;

public class UserData
{
    [Key]
	public string tideUID {get;set;} = default!;
	public string vaultName {get; set;}
	public string vaultData {get; set;}

}