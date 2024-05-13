import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface ListaServicosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaServicos(props: ListaServicosProps) {
        return (
            <div className="collection">
                <h2> Lista de todos os Serviços </h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Cadastrar Serviço", e)}
                >
                    Cadastrar um Serviço
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar serviços mais consumidos", e)}
                >
                    Listar os Serviços mais consumidos
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar serviços mais consumidos por homens", e)}
                >
                    Listar os Serviços mais consumidos por homens
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar serviços mais consumidos por mulheres", e)}
                >
                    Listar os Serviços mais consumidos por mulheres
                </button>
                <div className="collection-item">
                    Serviço 1: <br/>
                    Preço: <br/>
                    Número de vezes comprado:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 2: <br/>
                    Preço: <br/>
                    Número de vezes comprado:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 3: <br/>
                    Preço: <br/>
                    Número de vezes comprado:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 4: <br/>
                    Preço: <br/>
                    Número de vezes comprado:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 5: <br/>
                    Preço: <br/>
                    Número de vezes comprado:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
