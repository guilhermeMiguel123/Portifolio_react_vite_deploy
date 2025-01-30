import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Projetos.css';
import Githubview from './Githubview/Githubview';


const Projetos = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Meus Projetos</h1>
      <div id="projetosCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          

          {/* Adicione mais itens do carrossel conforme necessário */}
        </div>
      </div>
     
      <div className="projetos-secao mt-5">
       
        <div className="projeto-principal">
          <Githubview />
        </div>
      </div>
    </div>
  );
};

export default Projetos;
