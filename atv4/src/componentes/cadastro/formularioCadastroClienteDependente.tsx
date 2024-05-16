import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Documento from "../modelos/documento";
import { adicionarCliente } from "../modelos/armazem";
import { obterClientesTitulares } from "../modelos/armazem";
import { useState, useEffect } from "react";

interface FormularioCadastroClienteDependenteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function FormularioCadastroClienteDependente(props: FormularioCadastroClienteDependenteProps){
    const [clientes, setClientes] = useState<Array<Cliente>>([]);
    const [titularSelecionado, setTitularSelecionado] = useState<string>('');

    useEffect(() => {
        setClientes(obterClientesTitulares());
    }, []);

    const handleCadastroCliente = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const clienteSelecionado = clientes.find(cliente => cliente.Nome === titularSelecionado);
        if (!clienteSelecionado) {
            alert('Titular não encontrado.');
            return;
        }else{
            const nome = (document.getElementById("nome") as HTMLInputElement).value;
            const nomeSocial = (document.getElementById("nome_social") as HTMLInputElement).value;
            const dataNascimento = new Date((document.getElementById("data_nasc") as HTMLInputElement).value);
            const numeroDocumento = (document.getElementById("numero_documento") as HTMLInputElement).value;
            const tipoDocumento = (document.getElementById("tipo_documento") as HTMLInputElement).value;
            const dataExpedicao = new Date((document.getElementById("data_expedicao") as HTMLInputElement).value);

            const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
            const cliente = new Cliente(nome, nomeSocial, dataNascimento);
            cliente.Telefone = clienteSelecionado.Telefone; 
            cliente.Endereco = clienteSelecionado.Endereco; 
            cliente.Documento = documento;
            cliente.Titular = clienteSelecionado

            adicionarCliente(cliente);

            event.currentTarget.reset();
            setTitularSelecionado('');
        }

    }

    return (
        <div className="row">
            <h2> Cadastro de Cliente Dependente </h2>
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
                        <input id="numero_documento" type="text" className="validate" placeholder="Número do Documento" required />
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s6">
                        <br/>
                        <input id="tipo_documento" type="text" className="validate" placeholder="Tipo de Documento" required />
                    </div>
                    <div className="input-field col s6">
                        Data de Expedição do Documento:
                        <input id="data_expedicao" type="date" className="validate" placeholder="Data de Expedição do Documento" required />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <br/>
                        <input 
                            id="titular" 
                            type="text" 
                            className="validate" 
                            placeholder="Nome do titular" 
                            value={titularSelecionado} 
                            onChange={(e) => setTitularSelecionado(e.target.value)}
                            required  
                        />
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
