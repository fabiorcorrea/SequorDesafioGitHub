using System;

namespace SequorDesafio.Models
{
    public class GithubUser
    {
        private int id;
        private string node_id;
        private string login;
        private string name;
        private string avatar_url;
        private string email;
        private string twitter_username;
        private string bio;
        private string repos_url;
        private int public_repos;
        private DateTime created_at;
        private string html_url;

        public int Id { get => id; set => id = value; }
        public string Node_id { get => node_id; set => node_id = value; }
        public string Login { get => login; set => login = value; }
        public string Name { get => name; set => name = value; }
        public string Avatar_url { get => avatar_url; set => avatar_url = value; }
        public string Email { get => email; set => email = value; }
        public string Twitter_username { get => twitter_username; set => twitter_username = value; }
        public string Bio { get => bio; set => bio = value; }
        public string Repos_url { get => repos_url; set => repos_url = value; }
        public int Public_repos { get => public_repos; set => public_repos = value; }
        public DateTime Created_at { get => created_at; set => created_at = value; }
        public string Html_url { get => html_url; set => html_url = value; }
    }
}