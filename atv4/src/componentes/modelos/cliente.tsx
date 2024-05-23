import Acomodacao from "./acomodacao"
import Documento from "./documento"
import Endereco from "./endereco"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefone!: string 
    private endereco!: Endereco
    private documento!: Documento
    private dependentes: Cliente[] = []
    private acomodacao: Acomodacao | null = null
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public set Nome(nome: string) { this.nome = nome }

    public get NomeSocial() { return this.nomeSocial }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }

    public get DataNascimento() { return this.dataNascimento }
    public set DataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }

    public get DataCadastro() { return this.dataCadastro }
    public get Telefone() { return this.telefone }
    public get Endereco() { return this.endereco }
    public get Documento() { return this.documento }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }
    public get Acomodacao() {return this.acomodacao}

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Documento(documento: Documento) { this.documento = documento }
    public set Telefone(telefone: string) { this.telefone = telefone }
    public set Titular(titular: Cliente) {this.titular = titular}
    public set Acomodacao(acomodacao: Acomodacao | null) { this.acomodacao = acomodacao; }
}