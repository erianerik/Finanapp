import { Perfil } from "./Perfil";

export class Usuario {
    id: number | null;
    nome: string;
    salario: number;
    dinheiroGuardado: number;
    perfil: Perfil;
    
    constructor() {
        this.nome = '';
        this.salario = 0;
        this.dinheiroGuardado = 0;
        this.perfil = new Perfil();
    }
}