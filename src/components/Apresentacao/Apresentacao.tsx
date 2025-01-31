import Foto from '/Black_and_White_Minimalist_Couple_Photo_Frame_Instagram_Post-removebg-preview.png';
import './Apresentacao.css';

const Apresentacao = () => {
  return (
    <div className="apresentacao-container">
      <div className="texto">
      <h1 className="animated-text">
        <span> Olá, eu sou o Guilherme Miguel :)
       
        <br /><a 
  href="https://drive.google.com/uc?export=download&id=16Sy6db29VqT87g8_N01jQuFlnKvMvQ1x" 
  className="btn-curriculo" 
  download
>
  Baixar Currículo
</a>
</span>
        </h1>
       
       
      </div>
      <div className="foto">
        <img src={Foto} alt="Guilherme Miguel" />
      </div>
    </div>
  );
};

export default Apresentacao;
