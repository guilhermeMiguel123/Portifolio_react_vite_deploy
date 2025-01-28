import React, { useState, useEffect } from "react";
import Apresentacao from "./components/Apresentacao/Apresentacao";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Tecnologias from "./components/Tecnologias/Tecnologia";
import AnimationSVG from "./components/AnimationSVG"; // Importa a animação
import "animate.css";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.background = darkMode
      ? "linear-gradient(0deg, rgba(56,8,108,1) 0%, rgba(43,8,82,1) 3%, rgba(71,14,131,1) 14%, rgba(109,30,190,1) 23%, rgba(117,17,219,1) 38%, rgba(143,32,255,1) 51%, rgba(151,49,254,1) 57%, rgba(159,75,244,1) 64%, rgba(165,92,238,1) 76%, rgba(183,123,242,1) 100%)"
      : "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(25, 0, 53) 50%, rgb(47, 0, 88) 100%)";
  };

  useEffect(() => {
    const animateTitle = () => {
      gsap.to("#portfolio-title", {
        textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    };

    animateTitle();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const menu = document.querySelector<HTMLElement>(".hamburguer");

      if (!menu) return; // Garante que o menu existe

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });

      // Identifica a seção atual com base na posição
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        );
      });

      // Determina a cor do menu com base no fundo da seção ativa
      if (currentSection) {
        const sectionStyle = window.getComputedStyle(currentSection);
        const bgColor = sectionStyle.backgroundColor;

        // Verifica se o fundo é claro ou escuro (apenas um exemplo, pode ser ajustado)
        const isLightBackground =
          bgColor && bgColor.includes("rgb(444, 255, 255)");
        menu.style.color = isLightBackground ? "black" : "white";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa ao carregar a página

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white">
  
     {/* Navegação */}
     <nav className="p-4 flex justify-between items-center">
        <h1 id="portfolio-title" className="text-3xl font-bold text-white">
          portifolio
        </h1>
        <button
          onClick={toggleTheme}
          className="fixed-moon-button" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.99 12.39a9.64 9.64 0 01-2.23.26A9.51 9.51 0 0110 2.24a9.88 9.88 0 00-.26 2.23 9.5 9.5 0 009.41 9.41c.76 0 1.52-.09 2.23-.26.2-.04.29.21.16.37a10 10 0 01-10.25 3.55 9.96 9.96 0 1110.25-12.3c.13.15.04.4-.16.37z" />
          </svg>
        </button>


        <button onClick={toggleMenu} className="hamburguer text-white text-2xl">
          ☰
        </button>
      </nav>

      {/* Menu lateral */}
      <div className={`menu-lateral ${menuOpen ? "ativo" : ""}`}>
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <a href="#home" onClick={toggleMenu} className="block py-2">
              Lar
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={toggleMenu} className="block py-2">
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className="block py-2">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="block py-2">
              Contato
            </a>
          </li>
        </ul>
        <button onClick={toggleMenu} className="text-2xl absolute top-4 right-4">
          ×
        </button>
      </div>

      {/* Conteúdo */}
      <div className="relative">
      <svg class="Header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43">
        <path class="Header__shape bigSquare" fill="#16d5d1" d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>
        <path class="Header__shape triangle" fill="none" stroke="#ff4676" stroke-width="8" d="M372.15 462.17L321 434.58l-4.88 56.16z"/>
        <circle class="Header__shape bigCircle" fill="#ff4676" cx="1076.52" cy="262.17" r="59"/>
        <path class="Header__shape littleSquare" fill="#ffe430" d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z"/>
        <circle class="Header__shape hoop" fill="none" stroke="#ffe430" stroke-width="13" cx="905.52" cy="447.17" r="45"/>
        <circle class="Header__shape littleCircle" fill="#0f1c70" cx="1036.52" cy="203.17" r="27"/>
      </svg> 
        <div className="background-animations absolute inset-0 z-0"></div>{" "}
        {/* Animações geométricas */}
        <section id="home" className="relative z-10">
          <Apresentacao /><div class="Header">
      <svg class="Header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43">
        <path class="Header__shape bigSquare" fill="#16d5d1" d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>
        <path class="Header__shape triangle" fill="none" stroke="#ff4676" stroke-width="8" d="M372.15 462.17L321 434.58l-4.88 56.16z"/>
        <circle class="Header__shape bigCircle" fill="#ff4676" cx="1076.52" cy="262.17" r="59"/>
        <path class="Header__shape littleSquare" fill="#ffe430" d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z"/>
        <circle class="Header__shape hoop" fill="none" stroke="#ffe430" stroke-width="13" cx="905.52" cy="447.17" r="45"/>
        <circle class="Header__shape littleCircle" fill="#0f1c70" cx="1036.52" cy="203.17" r="27"/>
      </svg>
    </div>
        </section>
        <section id="about" className="relative z-10 p-8 text-center">
          
          <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2><br />
          <h2>Olá, sou Guilherme, um estudante de Engenharia de Software com um forte interesse em desenvolvimento de software e tecnologia. Estou em busca de oportunidades que me permitam adquirir experiência prática e aplicar meus conhecimentos acadêmicos em projetos reais.</h2>
        </section>
        <section id="animation" className="relative z-10">
          <AnimationSVG /> {/* Componente de animação */}
        </section>
        <section id="technologies" className="relative z-10">
          <Tecnologias />
        </section>
        <section id="projects" className="relative z-10">
          <Projetos />
        </section>
        <section id="contact" className="relative z-10">
          <Contato />
        </section>
      </div>
    </div>
  );
}

export default App;
