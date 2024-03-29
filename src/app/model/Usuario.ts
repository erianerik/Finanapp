import { Perfil } from "./Perfil";

export class Usuario {
    id: number | null;
    nome: string;
    cargo: string;
    salario: string;
    dinheiroGuardado: string;
    perfil: Perfil;
    
    constructor() {
        this.nome = '';
        this.cargo = '';
        this.salario = '0';
        this.dinheiroGuardado = '0';
        this.perfil = new Perfil();
    }
}