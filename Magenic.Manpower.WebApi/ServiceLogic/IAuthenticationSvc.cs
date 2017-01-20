using Magenic.Manpower.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.ServiceLogic
{
    public interface IAuthenticationSvc
    {
        UserDTO Authenticate(string username, string password);
    }
}
