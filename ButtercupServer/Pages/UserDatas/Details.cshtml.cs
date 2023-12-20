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
    public class DetailsModel : PageModel
    {
        private readonly ButtercupServer.Data.VaultContext _context;

        public DetailsModel(ButtercupServer.Data.VaultContext context)
        {
            _context = context;
        }

        public UserData UserData { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            UserData = await _context.UserData.FirstOrDefaultAsync(m => m.id == id);

            if (UserData == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
