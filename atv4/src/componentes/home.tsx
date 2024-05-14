import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface HomeProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Home(props: HomeProps) {
    return (
        <div className="collection">
            <h2> Bem vindo ao sistema Atlantis! </h2>
            <h3> Aqui você poderá gerenciar os clientes e suas hospedagens ! </h3>
            <h3> Utilize a navbar para navegação. </h3>
        </div>
    )
}