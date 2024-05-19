import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Cliente from "../modelos/cliente";
import { useState } from "react";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";
import { atualizarClienteDependente } from "../modelos/armazem";

interface EditarClienteDependenteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    cliente: Cliente;
}

export default function EditarClienteDependente(props: EditarClienteDependenteProps){
    const { cliente } = props;
    const [tipoDocumento, setTipoDocumento] = useState(cliente.Documento.Tipo);

    const handleTipoDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoDocumento(event.target.value);
    };

    const handleSalvarAlteracoes = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const nomeSocial = (document.getElementById("nome_social") as HTMLInputElement).value;
        const dataNascimento = new Date((document.getElementById("data_nasc") as HTMLInputElement).value);
        const numeroDocumento = (document.getElementById("numero_documento") as HTMLInputElement).value;
        const tipoDocumento = (document.querySelector('input[name="tipo_documento"]:checked') as HTMLInputElement).value;
        const dataExpedicao = new Date((document.getElementById("data_expedicao") as HTMLInputElement).value);

        const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
        const clienteNovo = new Cliente(nome, nomeSocial, dataNascimento);
    
        clienteNovo.Documento = documento;

        atualizarClienteDependente(cliente.Nome, clienteNovo);
        alert("Cliente atualizado com sucesso!");

    };
    return (
        <div className="row">
            <h2> Editar Cliente Dependente </h2>
            <form className="col s12" onSubmit={handleSalvarAlteracoes}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" type="text" className="validate" placeholder="Nome do Cliente" defaultValue={cliente.Nome} required />
                    </div>
                    <div className="input-field col s6">
                        <input id="nome_social" type="text" className="validate" placeholder="Nome Social do Cliente" defaultValue={cliente.NomeSocial} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        Data de nascimento:
                        <input id="data_nasc" type="date" className="validate" placeholder="Data de Nascimento" defaultValue={cliente.DataNascimento.toISOString().split('T')[0]} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="numero_documento" type="text" className="validate" placeholder="Número do Documento" defaultValue={cliente.Documento.Numero} required />
                    </div>
                    <div>
                    <label>
                        <input 
                            name="tipo_documento" 
                            type="radio" 
                            value="CPF" 
                            checked={tipoDocumento === "CPF"} 
                            onChange={handleTipoDocumentoChange} 
                            required 
                        />
                        <span>CPF</span>
                    </label><br/>
                    <label>
                        <input 
                            name="tipo_documento" 
                            type="radio" 
                            value="RG" 
                            checked={tipoDocumento === "RG"} 
                            onChange={handleTipoDocumentoChange} 
                            required 
                        />
                        <span>RG</span>
                    </label><br/>
                    <label>
                        <input 
                            name="tipo_documento" 
                            type="radio" 
                            value="Passaporte" 
                            checked={tipoDocumento === "Passaporte"} 
                            onChange={handleTipoDocumentoChange} 
                            required 
                    />
                        <span>Passaporte</span>
                    </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        Data de Expedição do Documento:
                        <input id="data_expedicao" type="date" className="validate" placeholder="Data de Expedição do Documento" defaultValue={cliente.Documento.DataExpedicao.toISOString().split('T')[0]} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action">Salvar Alterações
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
                   
