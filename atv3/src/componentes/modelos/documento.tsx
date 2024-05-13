export default class Documento {
    private numero: string
    private tipo: string
    private dataExpedicao: Date

    constructor(numero: string, tipo: string, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public get Numero(){
        return this.numero
    }
    public get Tipo(){
        return this.tipo
    }
    public get DataExpedicao(){
        return this.dataExpedicao
    }
    
}