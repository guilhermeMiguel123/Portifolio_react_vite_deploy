import './Tecnologia.css'; 
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase, FaPhp, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';

const Tecnologias = () => {
  const tecnologias = [
    { name: 'React', icon: <FaReact className="text-blue-500 text-7xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700 text-7xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-7xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-7xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400 text-7xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-7xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-7xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-7xl" /> },
    { name: 'SQL', icon: <FaDatabase className="text-gray-500 text-7xl" /> },
    { name: 'PHP', icon: <FaPhp className="text-gray-500 text-7xl" /> },
    { name: 'Java', icon: <FaJava className="text-gray-500 text-7xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-gray-500 text-7xl" /> },
  ];

  const tecnologiasDuplicadas = [...tecnologias, ...tecnologias, ...tecnologias, ...tecnologias]; // Duplicar mais vezes

  return (
    <div className="tecnologias-container">
      <h1 className="text-center text-5xl mb-4">Tecnologias</h1>
      <div className="tecnologias-marquee">
        <div className="tecnologias-track">
          {tecnologiasDuplicadas.map((tech, index) => (
            <div key={index} className="tecnologia-item">
              {tech.icon}
              <p className="mt-4 text-3xl">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
