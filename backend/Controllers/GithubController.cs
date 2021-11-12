using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using SequorDesafio.Models;

namespace SequorDesafio.Controllers
{
    [ApiController]
    [Route(template:"V1")]
    public class GithubController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public GithubController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        [Route(template:"users")]
        public async Task<IActionResult> GetUsers()
        {
            List<GithubUser> githubUsers = new List<GithubUser>();

            var _httpClient = _httpClientFactory.CreateClient("github");

            using (var response = await _httpClient.GetAsync("/users"))
            {
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    githubUsers = JsonConvert.DeserializeObject<List<GithubUser>>(apiResponse);
                } else {
                    return BadRequest("Erro de leitura do endpoint Response Menssage:" + response.RequestMessage);
                }
            }
            
            return Ok(githubUsers);
        }

        [HttpGet]
        [Route(template:"users/{user}")]
        public async Task<IActionResult> GetUsers([FromRoute] string user)
        {
            List<GithubUser> githubUsers = new List<GithubUser>();

            var _httpClient = _httpClientFactory.CreateClient("github");

            using (var response = await _httpClient.GetAsync("/users/" + user))
            {
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    githubUsers.Add(JsonConvert.DeserializeObject<GithubUser>(apiResponse));

                } else {
                    return BadRequest("Erro de leitura do endpoint Response Menssage:" + response.RequestMessage);
                }
            }
            
            return Ok(githubUsers);
        }

        [HttpGet]
        [Route(template:"repos/{user}")]
        public async Task<IActionResult> GetGithubRepo([FromRoute] string user)
        {
            List<GithubRepo> githubRepos = new List<GithubRepo>();
            
            var _httpClient = _httpClientFactory.CreateClient("github");                
            
            using (var response = await _httpClient.GetAsync("/users/" + user + "/repos"))
            {
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    githubRepos = JsonConvert.DeserializeObject<List<GithubRepo>>(apiResponse);
                } else {
                    return BadRequest("Erro de leitura do endpoint Response Menssage:" + response.RequestMessage);
                }
            }
            
            return Ok(githubRepos);

        }
    }
}