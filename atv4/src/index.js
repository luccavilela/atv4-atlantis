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
import Cliente from './componentes/modelos/cliente';
import Endereco from './componentes/modelos/endereco';
import Documento from './componentes/modelos/documento';
import { adicionarCliente } from './componentes/modelos/armazem';



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

const inicializarClientes = () => {

  const titular1 = new Cliente("João da Silva", "João", new Date(1980, 5, 15));
  const endereco1 = new Endereco("Rua A", "Bairro B", "Cidade C", "Estado D", "País E", "12345-678");
  const documento1 = new Documento("123456789", "CPF", new Date(2000, 1, 1));
  titular1.Endereco = endereco1;
  titular1.Documento = documento1;
  titular1.Telefone = "11987654321";
  adicionarCliente(titular1);

  const titular2 = new Cliente("Maria de Souza", "Maria", new Date(1990, 10, 20));
  const endereco2 = new Endereco("Rua X", "Bairro Y", "Cidade Z", "Estado W", "País V", "87654-321");
  const documento2 = new Documento("987654321", "CPF", new Date(2010, 2, 2));
  titular2.Endereco = endereco2;
  titular2.Documento = documento2;
  titular2.Telefone = "11912345678";
  adicionarCliente(titular2);


  const dependente1 = new Cliente("Ana Silva", "Ana", new Date(2010, 3, 10));
  const documentoDependente1 = new Documento("111222333", "RG", new Date(2020, 4, 5));
  dependente1.Endereco = endereco1;
  dependente1.Documento = documentoDependente1;
  dependente1.Telefone = "11987654321";
  dependente1.Titular = titular1;
  adicionarCliente(dependente1);

  const dependente2 = new Cliente("Carlos Souza", "Carlos", new Date(2015, 6, 25));
  const documentoDependente2 = new Documento("444555666", "RG", new Date(2025, 7, 6));
  dependente2.Endereco = endereco2;
  dependente2.Documento = documentoDependente2;
  dependente2.Telefone = "11912345678";
  dependente2.Titular = titular2;
  adicionarCliente(dependente2);
};

inicializarAcomodacoes();
inicializarClientes();

ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
