using Magenic.Manpower.EFCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magenic.Manpower.WebApi.DTO;

namespace Magenic.Manpower.WebApi.Services.Repository
{
    public class TechnologyDetailRepository : BaseRepository, ITechnologyDetailRepository
    {
        public TechnologyDetailRepository(MagenicManpowerDBContext dbContext) : base(dbContext)
        { }

        public bool CreateTechnologyDetail(TechnologyDetailDTO tech)
        {
            var newTech = ConvertToModel(tech);
            newTech.DateCreated = DateTime.Now;
            newTech.DateUpdated = DateTime.Now;
            newTech.IsActive = true;
            try
            {
                base._dbContext.Technology.Add(newTech);
                base._dbContext.SaveChanges();
            }
            catch (Exception)
            {
                // logging
                return false;
            }
            return true;
        }

        public TechnologyDetailDTO GetTechnologyDetailById(int id)
        {
            throw new NotImplementedException();
        }

        public TechnologyDetailDTO GetTechnologyDetailByName(string name)
        {
            TechnologyDetailDTO dto = new TechnologyDetailDTO();
            var tech = base._dbContext.Technology.FirstOrDefault(a => a.Name.ToLower() == name.ToLower());
            if (tech != null)
            {
                dto = ConvertToDTO(tech);
            }
            return dto;
        }

        public bool UpdateTechnologyDetail(TechnologyDetailDTO tech)
        {
            Technology model = ConvertToModel(tech);
            model.DateUpdated = DateTime.Now;

            try
            {
                base._dbContext.Technology.Update(model);
                base._dbContext.SaveChanges();
            }
            catch (Exception)
            {
                // logging
                return false;
            }
            return true;
        }

        public Technology ConvertToModel(TechnologyDetailDTO dto)
        {
            Technology model = new Technology()
            {
                Name = dto.TechName,
                Description = dto.TechDescription,
                Id = dto.TechId,
                IsActive = dto.IsActive
            };

            return model;
        }

        public TechnologyDetailDTO ConvertToDTO(Technology model)
        {
            TechnologyDetailDTO dto = new TechnologyDetailDTO()
            {
                IsActive = model.IsActive,
                TechDescription = model.Description,
                TechId = model.Id,
                TechName = model.Name
            };

            return dto;
        }
    }
}
