using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApI.Models
{
  public class techeire :IdentityDbContext 
  {
    public techeire(DbContextOptions option) : base(option)
    {

    }
  }
}
