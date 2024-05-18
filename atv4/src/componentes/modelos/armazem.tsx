import Cliente from "../modelos/cliente";

let clientes: Cliente[] = [];

export const adicionarCliente = (cliente: Cliente) => {
    clientes.push(cliente);
};

export const obterClientesTitulares = () => {
    return clientes.filter(cliente => !cliente.Titular);
};

export const obterClientesDependentes = () => {
    return clientes.filter(cliente => cliente.Titular);
};

export function removerCliente(index: number): void {
    clientes.splice(index, 1);
}

export const atualizarCliente = (nome: string, cliente: Cliente) => {
    const index = clientes.findIndex(cliente => cliente.Nome === nome);
    if (index !== -1) {
        clientes[index] = cliente;
    }
};
