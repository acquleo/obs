using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using netcore.Entities;
using netcore.Services;

namespace netcore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ObsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ObsController> _logger;
        private readonly IUserService userService;

        public ObsController(ILogger<ObsController> logger,IUserService userService)
        {
            this.userService=userService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpGet("CheckCode")]
        public async Task<CheckResult> CheckCode(string code)
        {
            User usr =  await userService.Authenticate(code,code);

            if(usr == null) return new CheckResult(){ control= ""};
            
            return new CheckResult(){control= usr.Role};

        }

        [Authorize()]
        [HttpGet("GetChannels")]
        public Channels GetChannels()
        {
            return new Channels(){ pa=new ChannelStatus(), pid=new ChannelStatus()};
        }

        [Authorize()]
        [HttpGet("OpenPTT")]
        public void OpenPTT()
        {
            
        }

        public class CheckResult
        {
            public string control{get;set;}
        }

        public class Channels
        {

            public  ChannelStatus pa {get;set;}=new ChannelStatus();
            public  ChannelStatus pid {get;set;}=new ChannelStatus();
        }

        public class ChannelStatus
        {
            public bool available {get;set;}
            public bool online {get;set;}
        }
    }
}
