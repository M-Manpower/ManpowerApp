using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.DependencyInjection;
using Magenic.Manpower.WebApi.ServiceLogic;
using Magenic.Manpower.WebApi.DTO;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Magenic.Manpower.WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    public class LoginController : BaseController
    {
        private readonly IAuthenticationSvc _authenticationSvc;
        public LoginController(IServiceProvider container) : base(container)
        {
            _authenticationSvc = container.GetService<IAuthenticationSvc>();
        }
        /// <summary>
        /// This method is use to test the web api
        /// </summary>
        /// <returns></returns>
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        /// <summary>
        /// This is a test method
        /// </summary>
        /// <param name="username">username of the user</param>
        /// <returns></returns>
        // GET api/values/5
        [HttpGet("{username}")]
        public string Get(string username)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ServiceResponseDTO<bool> Post([FromBody]JObject value)
        {
            return _authenticationSvc.Authenticate("admin@magenic.com", "admadm12345");                  
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
