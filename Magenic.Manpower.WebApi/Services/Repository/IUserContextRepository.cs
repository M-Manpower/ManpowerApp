using Magenic.Manpower.EFCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.Services.Repository
{
    public interface IUserContextRepository
    {
        User GetByUsernameAndPwd(string username, string password);
    }
}
