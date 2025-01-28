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
          
          <div className="carousel-item active">
            <img src="/public/96a583ff4e1d2eddf5f48448861f1827.jpg" className="d-block w-100" alt="Projeto 1" />
            <div className="carousel-caption d-block">
              <h5 className="card-title">Projeto 1</h5>
              <p className="card-text">Descrição do projeto 1. Alguns detalhes sobre o projeto 1.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/public/imagem2.jpg" className="d-block w-100" alt="Projeto 2" />
            <div className="carousel-caption d-block">
              <h5 className="card-title">Projeto 2</h5>
              <p className="card-text">Descrição do projeto 2. Alguns detalhes sobre o projeto 2.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/public/imagem3.jpg" className="d-block w-100" alt="Projeto 3" />
            <div className="carousel-caption d-block">
              <h5 className="card-title">Projeto 3</h5>
              <p className="card-text">Descrição do projeto 3. Alguns detalhes sobre o projeto 3.</p>
            </div>
          </div>

          {/* Adicione mais itens do carrossel conforme necessário */}
        </div>
      </div>
      <div className="carousel-controls">
        <a className="carousel-control-prev" href="#projetosCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#projetosCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
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
