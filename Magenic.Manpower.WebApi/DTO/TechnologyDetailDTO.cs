using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.DTO
{
    public class TechnologyDetailDTO
    {
        public int TechId { get; set; }
        public string TechName { get; set; }
        public string TechDescription { get; set; }
        public bool IsActive { get; set; }
    }
}
