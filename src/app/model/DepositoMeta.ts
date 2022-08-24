export class DepositoMeta {
    id: number | null;
    valorDeposito: number;
    dataInclusao: string;
    tituloMeta: string;

    constructor() {
        this.id = null;
        this.valorDeposito = 0;
        this.dataInclusao = '';
        this.tituloMeta = '';
    }
}