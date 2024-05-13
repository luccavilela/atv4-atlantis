import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface ListaClientesDependentesProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaClientesDependentes(props: ListaClientesDependentesProps) {
        return (
            <div className="collection">
                <h2> Lista de todos os clientes dependentes</h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Cadastrar Cliente Dependente", e)}>
                    Cadastrar um cliente dependente
                </button>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Dados do cliente e nome do titular
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Dados do cliente e nome do titular
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Dados do cliente e nome do titular
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
