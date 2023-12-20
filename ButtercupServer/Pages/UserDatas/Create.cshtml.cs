using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using ButtercupServer.Data;
using ButtercupServer.Models;

namespace ButtercupServer.Pages.UserDatas
{
    public class CreateModel : PageModel
    {
        private readonly ButtercupServer.Data.VaultContext _context;

        public CreateModel(ButtercupServer.Data.VaultContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public UserData UserData { get; set; }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.UserData.Add(UserData);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
