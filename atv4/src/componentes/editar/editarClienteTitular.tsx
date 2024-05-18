import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Cliente from "../modelos/cliente";
import { atualizarCliente } from "../modelos/armazem";
import { useState } from "react";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";

interface EditarClienteTitularProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    cliente: Cliente;
}

export default function EditarClienteTitular(props: EditarClienteTitularProps){
    const { cliente } = props;

    const handleSalvarAlteracoes = (event: React.FormEvent<HTMLFormElement>) => {
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
        const tipoDocumento = (document.querySelector('input[name="tipo_documento"]:checked') as HTMLInputElement).value;
        const dataExpedicao = new Date((document.getElementById("data_expedicao") as HTMLInputElement).value);

        const endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);
        const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
        const clienteNovo = new Cliente(nome, nomeSocial, dataNascimento);
    
        clienteNovo.Telefone = telefone;
        clienteNovo.Endereco = endereco;
        clienteNovo.Documento = documento;

        atualizarCliente(cliente.Nome, clienteNovo);
        alert("Cliente atualizado com sucesso!");

    };
    return (
        <div className="row">
            <h2> Editar Cliente Titular </h2>
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
                    <div className="input-field col s6">
                        <br/>
                        <input id="telefone" type="text" className="validate" placeholder="Telefone do Cliente" defaultValue={cliente.Telefone} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="rua" type="text" className="validate" placeholder="Rua" defaultValue={cliente.Endereco.Rua} required />
                    </div>
                    <div className="input-field col s6">
                        <input id="bairro" type="text" className="validate" placeholder="Bairro" defaultValue={cliente.Endereco.Bairro} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="cidade" type="text" className="validate" placeholder="Cidade" defaultValue={cliente.Endereco.Cidade} required />
                    </div>
                    <div className="input-field col s6">
                        <input id="estado" type="text" className="validate" placeholder="Estado" defaultValue={cliente.Endereco.Estado} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="pais" type="text" className="validate" placeholder="País" defaultValue={cliente.Endereco.Pais} required />
                    </div>
                    <div className="input-field col s6">
                        <input id="codigo_postal" type="text" className="validate" placeholder="Código Postal" defaultValue={cliente.Endereco.CodigoPostal} required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="numero_documento" type="text" className="validate" placeholder="Número do Documento" defaultValue={cliente.Documento.Numero} required />
                    </div>
                    <div>
                    <label>Tipo de Documento:</label><br/>
                        <label>
                            <input name="tipo_documento" type="radio" value="CPF" checked={cliente.Documento.Tipo === "CPF"} required />
                            <span>CPF</span>
                        </label><br/>
                        <label>
                            <input name="tipo_documento" type="radio" value="RG" checked={cliente.Documento.Tipo === "RG"} required />
                            <span>RG</span>
                        </label><br/>
                        <label>
                            <input name="tipo_documento" type="radio" value="Passaporte" checked={cliente.Documento.Tipo === "Passaporte"} required />
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
                   
