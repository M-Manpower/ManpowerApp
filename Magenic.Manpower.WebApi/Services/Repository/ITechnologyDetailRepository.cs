using Magenic.Manpower.WebApi.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magenic.Manpower.WebApi.Services.Repository
{
    public interface ITechnologyDetailRepository
    {
        TechnologyDetailDTO GetTechnologyDetailById(int id);
        TechnologyDetailDTO GetTechnologyDetailByName(string name);
        bool CreateTechnologyDetail(TechnologyDetailDTO tech);
        bool UpdateTechnologyDetail(TechnologyDetailDTO tech);
    }
}
