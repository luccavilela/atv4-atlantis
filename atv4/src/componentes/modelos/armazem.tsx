import Cliente from "../modelos/cliente";
import Acomodacao from "./acomodacao";
import Documento from "./documento";
import Endereco from "./endereco";

let clientes: Cliente[] = [];
let acomodacoes: Acomodacao[] = [];

export const adicionarCliente = (cliente: Cliente) => {
    clientes.push(cliente)
};

export const obterClientesTitulares = () => {
    return clientes.filter(cliente => !cliente.Titular)
};

export const obterClientesDependentes = () => {
    return clientes.filter(cliente => cliente.Titular)
};

export const obterDependentesDoTitular = (nomeTitular: string) => {
    const dependentes = clientes.filter(cliente => cliente.Titular);
    return dependentes.filter(cliente => cliente.Titular.Nome === nomeTitular);
};


export function removerCliente(nome:string): void {
    const index = clientes.findIndex(cliente => cliente.Nome === nome)
    if (index !== -1) {
        clientes.splice(index, 1);

    }
}

export const atualizarClienteTitular = (nome: string, cliente: Cliente) => {
    const index = clientes.findIndex(cliente => cliente.Nome === nome)
    if (index !== -1) {
        clientes[index].Nome = cliente.Nome;
        clientes[index].NomeSocial = cliente.NomeSocial
        clientes[index].DataNascimento = cliente.DataNascimento
        clientes[index].Telefone = cliente.Telefone

        const rua = cliente.Endereco.Rua
        const bairro = cliente.Endereco.Bairro
        const cidade = cliente.Endereco.Cidade
        const estado = cliente.Endereco.Estado
        const pais = cliente.Endereco.Pais
        const codigoPostal = cliente.Endereco.CodigoPostal
        const endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);
        clientes[index].Endereco = endereco
         
        const numeroDocumento = cliente.Documento.Numero
        const tipoDocumento = cliente.Documento.Tipo
        const dataExpedicao = cliente.Documento.DataExpedicao
        const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
        clientes[index].Documento = documento

    }
};

export const atualizarClienteDependente = (nome: string, cliente: Cliente) => {
    const index = clientes.findIndex(cliente => cliente.Nome === nome)
    if (index !== -1) {
        clientes[index].Nome = cliente.Nome
        clientes[index].NomeSocial = cliente.NomeSocial
        clientes[index].DataNascimento = cliente.DataNascimento
        
        const numeroDocumento = cliente.Documento.Numero
        const tipoDocumento = cliente.Documento.Tipo
        const dataExpedicao = cliente.Documento.DataExpedicao
        const documento = new Documento(numeroDocumento, tipoDocumento, dataExpedicao);
        clientes[index].Documento = documento
    }
};

export const adicionarAcomodacao = (acomodacao: Acomodacao) => {
    acomodacoes.push(acomodacao);
};

export const obterAcomodacoes = () => {
    return acomodacoes;
};

export const atualizarAcomodacaoCliente = (nomeCliente: string, acomodacao: Acomodacao) => {
    const cliente = clientes.find(cliente => cliente.Nome === nomeCliente);
    if (cliente) {
        cliente.Acomodacao = acomodacao
    }
};
