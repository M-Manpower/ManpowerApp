using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magenic.Manpower.WebApi.DTO;
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
        public ServiceResponseDTO<bool> Authenticate(string username, string password)
        {
            var response = new ServiceResponseDTO<bool>();
            response.Success = false;
            response.ResponseData = false;

            var user = _userContext.GetByUsernameAndPwd(username, password);

            if (user != null)
            {
                response.ResponseData = true;
                response.Success = true;                                
            }

            return response;            
        }
    }

}
