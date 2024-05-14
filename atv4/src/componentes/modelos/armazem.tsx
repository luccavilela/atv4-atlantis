import Cliente from "../modelos/cliente";

let clientes: Cliente[] = [];

export const adicionarCliente = (cliente: Cliente) => {
    clientes.push(cliente);
};

export const obterClientes = () => {
    return clientes;
};
