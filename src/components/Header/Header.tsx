import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">Portfólio</h1>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
