import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
const GithubStats = () => {
  // Ensure the USER_NAME environment variable is set
  const username = import.meta.env.USER_NAME || "elizonRL"; // Default to 'elizonRL' if not set
  const githubUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (username) {
      fetch(githubUrl)
        .then((response) => response.json())
        .then((data) =>
          setRepos(
            data.map((repo) => ({
              id: repo.id,
              name: repo.name,
              description: repo.description || "No description available",
              html_url: repo.html_url,
              stars: repo.stargazers_count,
              forks_count: repo.forks_count,
            }))
          ).catch((error) =>
            console.error("Error fetching GitHub repos:", error)
          )
        );
      setLoading(false);
    } else {
      console.error("GitHub username is not defined.");
    }
  }, []);
  console.log(
    "GitHub Repos:",
    repos.sort((a, b) => b.stars - a.stars).slice(0, 6)
  );
  return (
    <>
      <div className="grid md:grid-cols-1 md:grid-rows-3 gap-8 p-4 justify-center items-start">
        <div className="h-full md:col-span-2 md:row-span-5 bg-slate-800 hover:bg-slate-700 border-gray-300 pr-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 pb-0 pt-2 text-center text-white">
            {" "}
            <svg width={26} height={26} className="inline mr-2">
              <use href="/assets/sprite.svg#github" />
            </svg>{" "}
            Repositorios de {username}
          </h2>
          <span className="text-gray-500 font-semibold text-xl pt-0 text-center block">
            Más proyectos
          </span>
          {loading ? (
            <Loading />
          ) : (
            <ul className="list-none p-3 text-sm">
              {repos
                .map((repo) => (
                  <li key={repo.id} className="mb-2 ">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-semibold text-xl">
                      {repo.name}
                    </a>
                    <p className="text-gray-600">{repo.description}</p>
                    <span className="text-sm text-gray-500">
                      ⭐ {repo.stars} | 🍴 {repo.forks_count}
                    </span>
                  </li>
                ))
                .sort((a, b) => b.stars - a.stars)
                .slice(0, 6)}
            </ul>
          )}
        </div>
        <div className="md:col-span-2 md:row-span-2 md:col-start-3">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            loading="lazy"
            className="w-full h-full object-contain shadow-lg aspect-ratio"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
            alt="Lenguajes más usados"
            loading="lazy"
            className="w-full h-full object-contain shadow-lg aspect-ratio"
          />
        </div>

        {/* <div className="col-span-3 row-span-3">
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
        </div> */}
      </div>
    </>
  );
};

export default GithubStats;
