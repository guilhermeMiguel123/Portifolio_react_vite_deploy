import React from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  return (
    <footer className="rodape">
      <div className="redes-sociais">
        <a href="https://github.com/guilhermeMiguel123" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/guilherme-miguel-32977b22b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/guilherme12miguel123/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:guilherme12miguel123@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contato;
