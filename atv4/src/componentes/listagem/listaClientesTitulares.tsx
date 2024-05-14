import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../modelos/cliente";
import { obterClientes } from "../modelos/armazem";

interface ListaClientesTitularesProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaClientesTitulares(props: ListaClientesTitularesProps) {
    const clientes = obterClientes();

    return (
        <div className="collection">
            <h2> Lista de todos os clientes titulares</h2>
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Cliente Titular", e)}>
                Cadastrar um cliente titular
            </button>
            {clientes.map((cliente, index) => (
                <div className="collection-item" key={index}>
                    Nome: {cliente.Nome} <br/>
                    Nome Social: {cliente.NomeSocial} <br/>
                    Endereço: <br/>
                    Rua: {cliente.Endereco.Rua} <br/>
                    Bairro: {cliente.Endereco.Bairro} <br/>
                    Cidade: {cliente.Endereco.Cidade} <br/>
                    Estado: {cliente.Endereco.Estado} <br/>
                    País: {cliente.Endereco.Pais} <br/>
                    Código postal: {cliente.Endereco.CodigoPostal}
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                        <button className="listar">Listar dependentes</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
