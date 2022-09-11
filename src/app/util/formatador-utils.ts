export class FormatadorUtils {

    public static icones = {
        'COMIDA': 'pizza',
        'REFEICAO': 'restaurant',
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

    public static tipoCorEstatitisca = {
        'COMIDA': 'rgb(255, 149, 64)',
        'REFEICAO': 'rgb(140, 67, 3)',
        'ROUPA': 'rgb(2, 72, 115)',
        'MERCADO': 'rgb(70, 115, 2)',
        'LAZER': 'rgb(64, 53, 39)',
        'PETS': 'rgb(89, 60, 65)',
        'GASOLINA': 'rgb(255, 66, 0)',
        'SERVICOS': 'rgb(16, 55, 120)',
        'TELEFONE': 'rgb(21, 27, 41)',
        'VIAGEM': 'rgb(46, 65, 89)',
        'INTERNET': 'rgb(70, 166, 131)',
        'PRESENTE': 'rgb(217, 41, 88)',
        'OUTROS': 'rgb(0, 143, 140)',
        'COMPRA': 'rgb(122, 122, 122)'
    }

    static formatarValor(valor: string): string {
        let valorMonetario = valor.replace('R$', '');
        return valorMonetario;
    }

    static formatarValorMonetario(valor: number): string {
        return  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    static ajustarValor(valor: string): string {
        return  valor.replace('.', '').replace(',', '.');
    }
}
