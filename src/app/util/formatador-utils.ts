export class FormatadorUtils {

    public static icones = {
        'COMIDA': 'pizza-outline',
        'RESTAURANTE': 'restaurant-outline',
        'ROUPA': 'shirt-outline',
        'MERCADO': 'storefront-outline',
        'LAZER': 'home-outline',
        'PETS': 'paw-outline',
        'GASOLINA': 'car-outline',
        'SERVICOS': 'construct-outline',
        'TELEFONE': 'phone-portrait-outline',
        'VIAGEM': 'airplane-outline',
        'INTERNET': 'wifi-outline',
        'PRESENTE': 'gift-outline',
        'OUTROS': 'sync-outline',
        'COMPRAS': 'bag-handle-outline'
    }

    static formatarValor(valor: String): string {
        let valorMonetario = valor.replace('R$', '');
        return valorMonetario;
    }
}
