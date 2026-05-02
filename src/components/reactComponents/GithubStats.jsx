import { useEffect, useState } from "react";
import Skeleton from "./Skeleton.jsx";

const GithubStats = ({ currentLocale = 'es' }) => {
  const username = import.meta.env.PUBLIC_GITHUB_USER;
  const githubUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const translations = {
    es: {
      repositories: "Repositorios de",
      moreProjects: "Más proyectos",
      noDescription: "Sin descripción disponible",
      githubStats: "Estadísticas de GitHub",
      topLanguages: "Lenguajes más usados"
    },
    en: {
      repositories: "Repositories of",
      moreProjects: "More projects",
      noDescription: "No description available",
      githubStats: "GitHub Stats",
      topLanguages: "Most used languages"
    }
  };

  const t = translations[currentLocale] || translations.es;

  useEffect(() => {
    if (username) {
      fetch(githubUrl)
        .then((response) => response.json())
        .then((data) => {
          setRepos(
            data.map((repo) => ({
              id: repo.id,
              name: repo.name,
              description: repo.description || t.noDescription,
              html_url: repo.html_url,
              stars: repo.stargazers_count,
              forks_count: repo.forks_count,
            }))
          );
          setLoading(false);
        });
    } else {
      console.error("GitHub username is not defined.");
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 items-start">
        <div className="bg-slate-800 border-gray-300 pr-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 pb-0 pt-2 text-center text-white">
            <svg width={26} height={26} className="inline mr-2">
              <use href="/assets/sprite.svg#github" />
            </svg>
            {t.repositories} {username}
          </h3>
          <span className="text-gray-500 font-semibold text-xl pt-0 text-center block">
            {t.moreProjects}
          </span>
          {loading ? (
            <Skeleton />
          ) : (
            <ul className="list-none p-3 text-sm">
              {repos
                .map((repo) => (
                  <li key={repo.id} className="mb-2 group hover:bg-slate-600 p-2 rounded-lg">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold group text-xl">
                      {repo.name}
                      <p className="text-gray-600 font-semibold text-sm group-hover:text-amber-100">{repo.description}</p>
                      <span className="text-sm text-gray-500 group-hover:text-amber-100">
                        ⭐ {repo.stars} | 🍴 {repo.forks_count}
                      </span>
                    </a>
                  </li>
                ))
                .sort((a, b) => b.stars - a.stars)
                .slice(0, 6)}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={`https://github-readme-stats-fast.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
            alt={t.githubStats}
            loading="lazy"
            className="w-full object-contain shadow-lg rounded-xl"
          />
          <img
            src={`https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
            alt={t.topLanguages}
            loading="lazy"
            className="w-full object-contain shadow-lg rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default GithubStats;
