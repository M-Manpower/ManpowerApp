using Magenic.Manpower.WebApi.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magenic.Manpower.WebApi.DTO;

namespace Magenic.Manpower.WebApi.ServiceLogic
{
    public interface IAuthenticationSvc
    {
        ServiceResponseDTO<bool> Authenticate(string username, string password);
    }
}
