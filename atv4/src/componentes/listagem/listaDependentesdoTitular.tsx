import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../modelos/cliente";
import { obterClientesDependentes, obterDependentesDoTitular } from "../modelos/armazem";
import { removerCliente } from "../modelos/armazem";

interface ListaDependentesdoTitularProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>, cliente: Cliente | null) => void;
    cliente: Cliente;
}

export default function ListaDependentesdoTitular(props: ListaDependentesdoTitularProps) {
    const [clientes, setClientes] = useState<Array<Cliente>>([]);
    const { cliente } = props;

    useEffect(() => {
        setClientes(obterDependentesDoTitular(cliente.Nome));
    }, []);

    const handleExcluirCliente = (nome: string) => {
        removerCliente(nome);
        setClientes(clientes.filter(cliente => cliente.Nome !== nome));
        alert("Cliente excluído com sucesso!");
    };

    return (
        <div className="collection">
            <h2> Lista de todos os clientes dependentes do cliente  </h2>
            {clientes.map((cliente, index) => (
                <div className="collection-item" key={index}>
                    Nome: {cliente.Nome} <br/>
                    Nome Social: {cliente.NomeSocial} <br/>
                    Data de Nascimento: {cliente.DataNascimento.toLocaleDateString()} <br/>
                    Data de Cadastro: {cliente.DataCadastro.toLocaleDateString()} <br/>
                    Rua: {cliente.Endereco.Rua} <br/>
                    Bairro: {cliente.Endereco.Bairro} <br/>
                    Cidade: {cliente.Endereco.Cidade} <br/>
                    Estado: {cliente.Endereco.Estado} <br/>
                    País: {cliente.Endereco.Pais} <br/>
                    Código postal: {cliente.Endereco.CodigoPostal} <br/>
                    Telefone: {cliente.Telefone} <br/>
                    Tipo de documento: {cliente.Documento.Tipo} <br/>
                    Número do documento: {cliente.Documento.Numero} <br/>
                    Data de expedição do documento: {cliente.Documento.DataExpedicao.toLocaleDateString()} <br/>
                    Titular: {cliente.Titular.Nome} <br/>
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente Dependente", e, cliente)}>Editar</button>
                        <button className="excluir" onClick={() => handleExcluirCliente(cliente.Nome)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
