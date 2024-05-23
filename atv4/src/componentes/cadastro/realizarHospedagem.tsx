import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";
import { obterAcomodacoes, atualizarAcomodacaoCliente } from "../modelos/armazem";

interface RealizarHospedagemProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    cliente: Cliente;
}

export default function RealizarHospedagem(props: RealizarHospedagemProps) {
    const { cliente } = props;
    const [acomodacoes, setAcomodacoes] = useState<Array<Acomodacao>>([]);
    const [selectedAcomodacao, setSelectedAcomodacao] = useState<Acomodacao | undefined>(undefined);

    useEffect(() => {
        setAcomodacoes(obterAcomodacoes());
    }, []);

    const handleHospedar = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (selectedAcomodacao) {
            atualizarAcomodacaoCliente(cliente.Nome, selectedAcomodacao);
            alert("Hospedagem realizada com sucesso!");
            if (cliente.Titular) {
                props.seletorView("Clientes Dependentes", e); 
            } else {
                props.seletorView("Clientes Titulares", e); 
            }
        } else {
            alert("Por favor, selecione uma acomodação.");
        }
    };

    return (
        <div className="row">
            <h2>Realizar Hospedagem do cliente "{cliente.Nome}"</h2>
            <div className="input-field col s12">
                <select
                    className="browser-default"
                    value={selectedAcomodacao ? selectedAcomodacao.NomeAcomadacao : ""}
                    onChange={(e) => {
                        const acomodacao = acomodacoes.find(a => a.NomeAcomadacao === e.target.value);
                        setSelectedAcomodacao(acomodacao);
                    }}
                >
                    <option value="" disabled>Selecione uma acomodação</option>
                    {acomodacoes.map((acomodacao, index) => (
                        <option key={index} value={acomodacao.NomeAcomadacao}>
                            {acomodacao.NomeAcomadacao}
                        </option>
                    ))}
                </select>
            </div>
            <button
                className="waves-effect waves-light btn"
                onClick={handleHospedar}
            >
                Realizar Hospedagem
            </button>
        </div>
    );
}
