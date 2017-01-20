using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Magenic.Manpower.EFCore.Models;

namespace Magenic.Manpower.WebApi.Services.Repository
{
    public class UserContextRepository : IUserContextRepository
    {
        private MagenicManpowerDBContext _dbContext;
        public UserContextRepository(MagenicManpowerDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User GetByUsernameAndPwd(string username, string password)
        {
            //return _dbContext.User.FirstOrDefault(u => u.Email.ToLower() == username.ToLower() && u.Password == password);
            return new User
            {
                Email = "admin@magenic.com",
                Firstname = "Admin",
                Lastname = "Admin",
                ContactNo = null,
                RoleId = 1
            };
        }
    }
}
