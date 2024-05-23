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
            <h2>Lista de todas as acomodações</h2>
            {acomodacoes.map((acomodacao, index) => (
                <div className="collection-item" key={index}>
                    {acomodacao.NomeAcomadacao}
                </div>
            ))}
        </div>
    );
}
