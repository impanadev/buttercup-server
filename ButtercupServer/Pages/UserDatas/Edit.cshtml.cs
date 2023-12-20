using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ButtercupServer.Data;
using ButtercupServer.Models;

namespace ButtercupServer.Pages.UserDatas
{
    public class EditModel : PageModel
    {
        private readonly ButtercupServer.Data.VaultContext _context;

        public EditModel(ButtercupServer.Data.VaultContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(UserData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDataExists(UserData.id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool UserDataExists(int id)
        {
            return _context.UserData.Any(e => e.id == id);
        }
    }
}
