import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';
import { adicionarAcomodacao } from './componentes/modelos/armazem';
import DiretorSolteiroMais from './componentes/diretores/diretorSolteiroMais';
import DiretorFamiliaSimples from './componentes/diretores/diretorFamiliaSimples';
import DiretorFamiliaMais from './componentes/diretores/diretorFamiliaMais';
import DiretorFamiliaSuper from './componentes/diretores/diretorFamiliaSuper';
import DiretorSolteiroSimples from './componentes/diretores/diretorSolteiroSimples';
import DiretorCasalSimples from './componentes/diretores/diretorCasalSimples';


const inicializarAcomodacoes = () => {
    let diretor = new DiretorSolteiroSimples()
    adicionarAcomodacao(diretor.construir())

    diretor = new DiretorSolteiroMais()
    adicionarAcomodacao(diretor.construir())

    diretor = new DiretorCasalSimples()
    adicionarAcomodacao(diretor.construir())

    diretor = new DiretorFamiliaSimples()
    adicionarAcomodacao(diretor.construir())

    diretor = new DiretorFamiliaMais()
    adicionarAcomodacao(diretor.construir())
    
    diretor = new DiretorFamiliaSuper()
    adicionarAcomodacao(diretor.construir())

};

inicializarAcomodacoes();

ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
