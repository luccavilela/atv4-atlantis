import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface ListaProdutosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaProdutos(props: ListaProdutosProps) {
        return (
            <div className="collection">
                <h2> Lista de todos os produtos </h2>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Cadastrar Produto", e)}
                >
                    Cadastrar um produto
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar produtos mais consumidos", e)}
                >
                    Listar os produtos mais consumidos
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar produtos mais consumidos por homens", e)}
                >
                    Listar os produtos mais consumidos por homens
                </button>
                <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar produtos mais consumidos por mulheres", e)}
                >
                    Listar os produtos mais consumidos por mulheres
                </button>
                <div className="collection-item">
                    Produto 1: <br/>
                    Preço: <br/>
                    Quantidade vendida:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 2: <br/>
                    Preço: <br/>
                    Quantidade vendida:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 3: <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 4: <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 5: <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
