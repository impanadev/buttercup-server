using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ButtercupServer.Data;
using ButtercupServer.Models;

namespace ButtercupServer.Pages.UserDatas
{
    public class IndexModel : PageModel
    {
        private readonly ButtercupServer.Data.VaultContext _context;

        public IndexModel(ButtercupServer.Data.VaultContext context)
        {
            _context = context;
        }

        public IList<UserData> UserData { get;set; }

        public async Task OnGetAsync()
        {
            UserData = await _context.UserData.ToListAsync();
        }
    }
}
