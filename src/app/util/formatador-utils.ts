export class FormatadorUtils {

    public static icones = {
        'COMIDA': 'pizza',
        'RESTAURANTE': 'restaurant',
        'ROUPA': 'shirt',
        'MERCADO': 'storefront',
        'LAZER': 'home',
        'PETS': 'paw',
        'GASOLINA': 'car',
        'SERVICOS': 'construct',
        'TELEFONE': 'call',
        'VIAGEM': 'airplane',
        'INTERNET': 'wifi',
        'PRESENTE': 'gift',
        'OUTROS': 'sync',
        'COMPRA': 'bag-handle'
    }

    static formatarValor(valor: string): string {
        let valorMonetario = valor.replace('R$', '');
        return valorMonetario;
    }

    static formatarValorMonetario(valor: string): string {
        return valor.length > 6 ? valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2") : valor.replace(/([0-9]{2})$/g, ",$1");
    }
}
