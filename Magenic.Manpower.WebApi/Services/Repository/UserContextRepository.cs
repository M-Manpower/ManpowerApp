using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Magenic.Manpower.EFCore.Models;

namespace Magenic.Manpower.WebApi.Services.Repository
{
    public class UserContextRepository : BaseRepository, IUserContextRepository
    {        
        public UserContextRepository(MagenicManpowerDBContext dbContext):base(dbContext)
        {            
        }

        public User GetByUsernameAndPwd(string username, string password)
        {
            return _dbContext.User.FirstOrDefault(u => u.Email.ToLower() == username.ToLower() && u.Password == password);
        }
    }
}
