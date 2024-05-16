import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";
import { adicionarCliente } from "../modelos/armazem";

interface FormularioCadastroClienteTitularProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FormularioCadastroClienteTitular(props: FormularioCadastroClienteTitularProps){
    const handleCadastroCliente = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const nomeSocial = (document.getElementById("nome_social") as HTMLInputElement).value;
        const dataNascimento = new Date((document.getElementById("data_nasc") as HTMLInputElement).value);
        const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
        const rua = (document.getElementById("rua") as HTMLInputElement).value;
        const bairro = (document.getElementById("bairro") as HTMLInputElement).value;
        const cidade = (document.getElementById("cidade") as HTMLInputElement).value;
        const estado = (document.getElementById("estado") as HTMLInputElement).value;
        const pais = (document.getElementById("pais") as HTMLInputElement).value;
        const codigoPostal = (document.getElementById("codigo_postal") as HTMLInputElement).value;
        const numeroDocumento = (document.getElementById("numero_documento") as HTMLInputElement).value;
        const tipoDocumento = (document.getElementById("tipo_documento") as HTMLInputElement).value;
        const dataExpedicao = new Date((document.getElementById("data_expedicao") as HTMLInputElement).value);

        const endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);
        const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
        const cliente = new Cliente(nome, nomeSocial, dataNascimento);
        cliente.Telefone = telefone;
        cliente.Endereco = endereco;
        cliente.Documento = documento;

        adicionarCliente(cliente);

        event.currentTarget.reset();

        
    }

    return (
        <div className="row">
            <h2> Cadastro de Cliente Titular </h2>
            <form className="col s12" onSubmit={handleCadastroCliente}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" type="text" className="validate" placeholder="Nome do Cliente" required />
                    </div>
                    <div className="input-field col s6">
                        <input id="nome_social" type="text" className="validate" placeholder="Nome Social do Cliente" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        Data de nascimento:
                        <input id="data_nasc" type="date" className="validate" placeholder="Data de Nascimento" required />
                    </div>
                    <div className="input-field col s6">
                        <br/>
                        <input id="telefone" type="text" className="validate" placeholder="Telefone do Cliente" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="rua" type="text" className="validate" placeholder="Rua" required />
                    </div>
                    <div className="input-field col s6">
                        <input id="bairro" type="text" className="validate" placeholder="Bairro" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="cidade" type="text" className="validate" placeholder="Cidade" required />
                    </div>
                    <div className="input-field col s6">
                        <input id="estado" type="text" className="validate" placeholder="Estado" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="pais" type="text" className="validate" placeholder="País" required />
                    </div>
                    <div className="input-field col s6">
                        <input id="codigo_postal" type="text" className="validate" placeholder="Código Postal" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="numero_documento" type="text" className="validate" placeholder="Número do Documento" required />
                    </div>
                    <div className="input-field col s6">
                        <input id="tipo_documento" type="text" className="validate" placeholder="Tipo de Documento" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        Data de Expedição do Documento:
                        <input id="data_expedicao" type="date" className="validate" placeholder="Data de Expedição do Documento" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action">Cadastrar
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
