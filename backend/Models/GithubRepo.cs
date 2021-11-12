using System;

namespace SequorDesafio.Models
{

    public class GithubRepo
    {
        private int id;
        private string node_id;
        private string name;
        private string full_name;
        private string html_url;
        private string description;
        private int stargazers_count;
        private DateTime created_at;

        public int Id { get => id; set => id = value; }
        public string Node_id { get => node_id; set => node_id = value; }
        public string Name { get => name; set => name = value; }
        public string Full_name { get => full_name; set => full_name = value; }
        public string Html_url { get => html_url; set => html_url = value; }
        public string Description { get => description; set => description = value; }
        public int Stargazers_count { get => stargazers_count; set => stargazers_count = value; }
        public DateTime Created_at { get => created_at; set => created_at = value; }
    }
}