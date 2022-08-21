export class Custo {
    id: number | null;
    idUsuario: number;
    valor: number;
    tipo: string;
    descricao: string;
    data: string;
    possuiParcela: boolean;
    isCusto: boolean;
    quantidadeParcela: number;

    constructor() {
        this.id = null;
        this.tipo = 'ROUPA';
        this.descricao = '';
        this.possuiParcela = false;
        this.isCusto = true;
        this.quantidadeParcela = 0;
    }
}