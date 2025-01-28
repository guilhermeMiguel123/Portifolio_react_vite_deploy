import React, { useEffect, useState } from "react";

const GithubView = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/guilhermeMiguel123/repos"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os repositórios");
        }
        const data = await response.json();
        setRepositorios(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Carregando repositórios...</p>;
  }

  return (
    <div className="github-container">
      <h2 className="github-title">
        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" className="github-icon" />
        Meus Repositórios
      </h2>
      <div className="github-grid">
        {repositorios.map((repo) => (
          <div key={repo.id} className="github-card">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-name"
            >
              {repo.name}
            </a>
            
            <p className="github-language">
              {repo.language || "Não especificada"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubView;
