export class Custo {
    id: number | null;
    idUsuario: number;
    valor: string;
    tipo: string;
    descricao: string;
    data: string;
    possuiParcela: boolean;
    custo: boolean;
    quantidadeParcela: number;
    proximaParcela: string;
    icone: string;

    constructor() {
        this.id = null;
        this.tipo = 'LAZER';
        this.descricao = '';
        this.possuiParcela = false;
        this.custo = true;
        this.quantidadeParcela = 0;
    }
}