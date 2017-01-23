using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.DTO
{
    public class ServiceResponseDTO<T>
    {
        public ServiceResponseDTO()
        {
            this.Errors = new List<string>();
        }
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
        public T ResponseData { get; set; }
    }
}
