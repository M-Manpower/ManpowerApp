using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.ServiceLogic
{
    public class BaseSvc
    {
        protected readonly IServiceProvider _container;
        public BaseSvc(IServiceProvider container)
        {
            _container = container;
        }
    }
}
