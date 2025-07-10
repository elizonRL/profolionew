import TitleHeader from "../TitleHeader.astro";
import { useEffect, useState } from "react";

const GithubStats = () => {
  // Ensure the USER_NAME environment variable is set
  const username = import.meta.env.USER_NAME;
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch((error) => console.error("Error fetching GitHub repos:", error));
    } else {
      console.error("GitHub username is not defined.");
    }
  }, []);
  console.log("GitHub Repos:", repos);
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full max-w-6xl mx-auto">
        <div className="col-span-3 row-span-3">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            loading="lazy"
            className="w-full h-full object-contain rounded-xl shadow-lgaspect-ratio"
          />
        </div>

        <div className="col-span-3 row-span-3">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
            alt="Lenguajes más usados"
            loading="lazy"
            className="w-full h-full object-contain rounded-xl shadow-lg aspect-ratio"
          />
        </div>

        <div className="col-span-4 row-span-3">
         {repos.map((repo) => (
         
          <div
            key={repo.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-300">{repo.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </span>
            </div>
          </div>
         )).slice(0, 6)}
        </div>
      </div>
    </>
  );
};

export default GithubStats;
