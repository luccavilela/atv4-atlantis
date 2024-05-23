import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import "../styles.css"
import Home from "./home"
import ListaProdutos from "./listaProdutos";
import ListaClientesTitulares from "./listagem/listaClientesTitulares";
import FormularioCadastroClienteTitular from "./cadastro/formularioCadastroClienteTitular";
import ListaClientesDependentes from "./listagem/listaClientesDependentes";
import FormularioCadastroClienteDependente from "./cadastro/formularioCadastroClienteDependente";
import EditarClienteTitular from "./editar/editarClienteTitular";
import EditarClienteDependente from "./editar/editarClienteDependente";
import ListaDependentesdoTitular from "./listagem/listaDependentesdoTitular";
import ListaAcomodacoes from "./listagem/listaAcomodacoes";

export default function Roteador() {
    const [tela, setTela] = useState('Home')
    const [clienteEscolhido, setClienteEscolhido] = useState('Home')

    const seletorView = (valor, e, cliente) => {
        e.preventDefault()
        setClienteEscolhido(cliente)
        setTela(valor)
    }

    const construirView = () => {

        switch (tela) {
            case 'Home':
              return(
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                  <Home seletorView={seletorView} tema="purple lighten-4" />
                </>
              )
            case 'Clientes Titulares':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos', 'Acomodações']} />
                  <ListaClientesTitulares seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Clientes Dependentes':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                  <ListaClientesDependentes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Cliente Titular':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                  <FormularioCadastroClienteTitular seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Cliente Dependente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                  <FormularioCadastroClienteDependente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
              case 'Editar Cliente Titular':
                return (
                    <>
                        <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                        <EditarClienteTitular seletorView={seletorView} cliente={clienteEscolhido} tema="purple lighten-4" />
                    </>
                );
              case 'Editar Cliente Dependente':
                return (
                    <>
                        <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                        <EditarClienteDependente seletorView={seletorView} cliente={clienteEscolhido} tema="purple lighten-4" />
                    </>
                );
              case 'Dependentes do Titular':
                return (
                    <>
                        <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                        <ListaDependentesdoTitular seletorView={seletorView} cliente={clienteEscolhido} tema="purple lighten-4" />
                    </>
                );
              case 'Acomodações':
                return (
                  <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                    <ListaAcomodacoes seletorView={seletorView} tema="purple lighten-4" />
                  </>
                );
            
            case 'Produtos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes Titulares', 'Clientes Dependentes', 'Produtos']} />
                  <ListaProdutos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
                  
        }
    }

    return (
        construirView()
    )
}