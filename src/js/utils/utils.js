export const utils = {
    numberToReal(numero) {
        let num = numero.split('.');
        num[0] = num[0].split(/(?=(?:...)*$)/).join('.');
        return num[0];
    }
}