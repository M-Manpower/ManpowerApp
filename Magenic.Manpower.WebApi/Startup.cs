using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Magenic.Manpower.EFCore.Models;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.Swagger.Model;
using Magenic.Manpower.WebApi.ServiceLogic;
using Magenic.Manpower.WebApi.Services.Repository;

namespace Magenic.Manpower.WebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            CurrentEnvironment = env;
        }

        public IConfigurationRoot Configuration { get; }

        private IHostingEnvironment CurrentEnvironment { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            //swagger comments
            string swaggerCommentXmlPath = string.Empty;
            if (CurrentEnvironment.IsDevelopment()) //while development
                swaggerCommentXmlPath = $@"{CurrentEnvironment.ContentRootPath}\bin\Debug\netcoreapp1.0\Magenic.Manpower.WebApi.xml";
            else //while production
                swaggerCommentXmlPath = $@"{CurrentEnvironment.ContentRootPath}\Magenic.Manpower.WebApi.xml";


            services.AddCors(o => { o.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); });
            // Add framework services.
            services.AddMvc().AddJsonOptions(jsonOptions =>
            {
                jsonOptions.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
            });

            services.AddDbContext<MagenicManpowerDBContext>(options =>
             options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddSwaggerGen();
            services.ConfigureSwaggerGen(options =>
            {
                options.SingleApiVersion(new Info
                {
                    Version = "v1",
                    Title = "Magenic Manpower API",
                    Description = "These are the API endpoints of Magenic Manpower",
                    TermsOfService = "NA",
                    Contact = new Contact() { Name = "Magenic Manila Inc.", Email = "myemail@test.com", Url = "https://magenic.com/" }
                });
                options.IncludeXmlComments(swaggerCommentXmlPath); //Includes XML comment file
            });

            //Domain Specific
            services.AddSingleton<IAuthenticationSvc, AuthenticationCustomSvc>();
            services.AddTransient<IUserContextRepository, UserContextRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseCors("CorsPolicy");
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUi();
        }
    }
}
