using Magenic.Manpower.WebApi.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    public class TechnologyDetailController : BaseController
    {
        public TechnologyDetailController(IServiceProvider container) : base(container)
        {
        }

        [HttpGet("{id}")]
        public TechnologyDetailDTO Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpGet("{name}")]
        public TechnologyDetailDTO Validate(string name)
        {
            throw new NotImplementedException();
        }

        [HttpPost()]
        public TechnologyDetailDTO Post(JObject dto)
        {
            throw new NotImplementedException();
        }

        [HttpPut()]
        public TechnologyDetailDTO Put(JObject dto)
        {
            throw new NotImplementedException();
        }
    }
}
