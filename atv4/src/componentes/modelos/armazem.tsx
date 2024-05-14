import Cliente from "../modelos/cliente";

let clientes: Cliente[] = [];

export const adicionarCliente = (cliente: Cliente) => {
    clientes.push(cliente);
};

export const obterClientes = () => {
    return clientes;
};

export function removerCliente(index: number): void {
    clientes.splice(index, 1);
}