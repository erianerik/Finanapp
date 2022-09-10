export class Estatistica {
    nome: string;
    valor: number;
    valorMonetario: string;
    porcetagem: number;
    icone: string;
    cor: string | null;
    constructor(nome?: string) {
        this.nome = nome ? nome : '';
        this.valor = 0;
        this.porcetagem = 0;
        this.cor = null;
    }
}