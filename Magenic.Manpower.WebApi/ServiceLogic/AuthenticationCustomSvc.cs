using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magenic.Manpower.WebApi.Models;
using Microsoft.Extensions.DependencyInjection;
using Magenic.Manpower.WebApi.Services.Repository;

namespace Magenic.Manpower.WebApi.ServiceLogic
{
    public class AuthenticationCustomSvc : BaseSvc, IAuthenticationSvc
    {
        private readonly IUserContextRepository _userContext;
        public AuthenticationCustomSvc(IServiceProvider container):base(container)
        {
            _userContext = container.GetService<IUserContextRepository>();
        }
        public UserDTO Authenticate(string username, string password)
        {
            var user = _userContext.GetByUsernameAndPwd(username, password);

            if (user != null)
            {
                return new UserDTO
                {
                    Username = user.Email,
                    Email = user.Email,
                    Firstname = user.Firstname,
                    Lastname = user.Lastname
                };
            }

            return null;            
        }
    }

}
