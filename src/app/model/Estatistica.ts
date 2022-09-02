export class Estatistica {
    nome: string;
    valor: number;
    porcetagem: number;
    icone: string;
    constructor(nome?: string) {
        this.nome = nome ? nome : '';
        this.valor = 0;
        this.porcetagem = 0;
    }
}