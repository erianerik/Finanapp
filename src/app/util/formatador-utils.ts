export class FormatadorUtils {

    static formatarValor(valor: String): string {
        let valorMonetario = valor.replace('R$', '');
        return valorMonetario;
    }
}
