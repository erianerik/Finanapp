export class Estatistica {
    nome: string;
    valor: number;
    porcetagem: number
    constructor(nome?: string) {
        this.nome = nome ? nome : '';
        this.valor = 0;
        this.porcetagem = 0;
    }
}