import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface ListaClientesTitularesProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaClientesTitulares(props: ListaClientesTitularesProps) {
        return (
            <div className="collection">
                <h2> Lista de todos os clientes titulares</h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Cadastrar Cliente Titular", e)}>
                    Cadastrar um cliente titular
                </button>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Dados do cliente 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                        <button className="listar">Listar dependentes</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Dados do cliente  
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                        <button className="listar">Listar dependentes</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Dados do cliente 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                        <button className="listar">Listar dependentes</button>
                    </div>
                </div>
            </div>
        )
    }
