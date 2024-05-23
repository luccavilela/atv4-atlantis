import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Acomodacao from "../modelos/acomodacao";
import { obterAcomodacoes } from "../modelos/armazem";

interface ListaAcomodacoesProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaAcomodacoes(props: ListaAcomodacoesProps) {
    const [acomodacoes, setAcomodacoes] = useState<Array<Acomodacao>>([]);

    useEffect(() => {
        setAcomodacoes(obterAcomodacoes());
    }, []);

    return (
        <div className="collection">
            <h2>Tipos de acomodação</h2>
            {acomodacoes.map((acomodacao, index) => (
                <div className="collection-item" key={index}>
                    <h3>{acomodacao.NomeAcomadacao}</h3>
                    <p>Camas de Solteiro: {acomodacao.CamaSolteiro}</p>
                    <p>Camas de Casal: {acomodacao.CamaCasal}</p>
                    <p>Suítes: {acomodacao.Suite}</p>
                    <p>Climatização: {acomodacao.Climatizacao ? "Sim" : "Não"}</p>
                    <p>Garagem: {acomodacao.Garagem}</p>
                </div>
            ))}
        </div>
    );
}
