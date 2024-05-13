import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface FormularioCadastroClienteDependenteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function FormularioCadastroClienteDependente(props: FormularioCadastroClienteDependenteProps){
    return (
        <div className="row">
            <h2> Cadastro de Cliente Dependente </h2>
            <form className="col s12">
            <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" placeholder="Nome do Cliente"  />
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" placeholder="Nome Social do Cliente"  />
                        </div>
            </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="data_nasc" type="date" className="validate" placeholder="Data de Nascimento" />
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" placeholder="cpf do cliente" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="titular" type="text" className="validate" placeholder="escolher titular" />
                        </div>
                    </div>
                    
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Clientes Dependentes", e)}>Cadastrar
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}