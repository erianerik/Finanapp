export class Custo {
    id: number | null;
    idUsuario: number;
    valor: number;
    tipo: string;
    descricao: string;
    data: string;
    possuiParcela: boolean;
    gasto: boolean;
    quantidadeParcela: number;
    proximaParcela: string;
    constructor() {
        this.id = null;
        this.tipo = 'LAZER';
        this.descricao = '';
        this.possuiParcela = false;
        this.gasto = true;
        this.quantidadeParcela = 0;
    }
}