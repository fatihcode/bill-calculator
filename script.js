//2022 Elektirk Faturası Hesaplama

let kwh = prompt('Tükettiğiniz "KWH" miktarını giriniz')

let limitDown = 1.37
let limitUp = 2.06


function fatura(val) {

    if (val > 150) {

        tüketim = (150 * limitDown) + ((val - 150) * limitUp)

    } else if (val > 0 && val <= 150) {

        tüketim = val * limitDown

    } else {

        return console.log(`Hatalı Giriş Yaptınız`)
    }

    enerji = tüketim * 0.00455
    btv = tüketim * 0.03205
    kdv = tüketim * 0.1808
    total = tüketim + btv + kdv

    console.log(`Aktif Enerji Bedeli ${(tüketim*0.641425947570546).toFixed(2)} TL`)
    console.log(`Dağıtım Bedeli ${(tüketim*0.358574052429454).toFixed(2)} TL`)
    console.warn(`Toplam Tüketim Bedeli ${(tüketim).toFixed(2)} TL`)

    console.log(`BTV ${(btv).toFixed(2)} TL`)
    console.log(`KDV ${(kdv).toFixed(2)} TL`)
    console.warn(`Vergiler Toplamı ${Number((enerji+btv+kdv).toFixed(2))} TL`)

    console.warn(`Toplam Fatura ${(total).toFixed(2)} TL`)
}


fatura(kwh)
