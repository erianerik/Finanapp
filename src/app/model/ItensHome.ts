import { Custo } from "./Custo";
import { DepositoMeta } from "./DepositoMeta";

export class ItensHome {
    id: number | null;
    data: string;
    mesCusto: string;
    anoCusto: string;
    totalGuardar: number;
    totalGasto: number;
    saldoDisponivel: number;
    custos: Custo[];
    depositos: DepositoMeta[];

    constructor() {
        this.id = null;
        this.data = '';
        this.mesCusto = '';
        this.anoCusto = '';
        this.totalGuardar = 0;
        this.totalGasto = 0;
        this.saldoDisponivel = 0;
        this.custos = [];
    }
}