using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Magenic.Manpower.WebApi.DTO;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Magenic.Manpower.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/roles")]
    public class RoleController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ObjectResult Get()
        {
            List<RoleDTO> roles = new List<RoleDTO>();
            roles.Add(new RoleDTO() { Id = Guid.NewGuid(), Name = "Administrator", Active = true });
            roles.Add(new RoleDTO() { Id = Guid.NewGuid(), Name = "Consulting Manager", Active = true });
            roles.Add(new RoleDTO() { Id = Guid.NewGuid(), Name = "HR Officer", Active = true });
            roles.Add(new RoleDTO() { Id = Guid.NewGuid(), Name = "Custom User", Active = false });

            return new OkObjectResult(roles);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
