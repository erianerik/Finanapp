export class FormatadorUtils {

    static formatarValor(valor: String): number {
        let valorMonetario = valor.replace('R$', '').replace('.', '').replace(',', '');
        return parseFloat(valorMonetario);
    }
}
