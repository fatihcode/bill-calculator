//2022 Elektirk Faturası Hesaplama

/*
aktif dağıtım
Mesken (Düşük Kademe)	0.7946	0.3295
Mesken (Yüksek Kademe)	1.3488	0.3295
*/

// let kwh = prompt('Tükettiğiniz "KWH" miktarını giriniz')
let kwh = 200



function fatura(val) {

    if (val > 150) {

        aktif = (150 * 0.7946) + ((val - 150) * 1.3488)

    } else if (val > 0 && val <= 150) {

        aktif = (val * 0.7946)

    } else {

        return console.log(`Hatalı Giriş Yaptınız`)
    }

    dagitim = (val * 0.3295)

    tüketim = aktif + dagitim

    enerji = tüketim * 0.007
    btv = tüketim * 0.03205
    kdv = (tüketim + enerji + btv) * 0.18
    total = tüketim + btv + kdv

    console.log(`Aktif Enerji Bedeli ${(aktif).toFixed(2)} TL`)
    console.log(`Dağıtım Bedeli ${(dagitim).toFixed(2)} TL`)
    console.warn(`Toplam Tüketim Bedeli ${(tüketim).toFixed(2)} TL`)

    console.log(`BTV ${(btv).toFixed(2)} TL`)
    console.log(`KDV ${(kdv).toFixed(2)} TL`)
    console.warn(`Vergiler Toplamı ${Number((enerji+btv+kdv).toFixed(2))} TL`)

    console.warn(`Toplam Fatura ${(total).toFixed(2)} TL`)
}


fatura(kwh)




/*
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
    kdv = (tüketim+enerji+btv) * 0.1808
    total = tüketim + btv + kdv

    console.log(`Aktif Enerji Bedeli ${(tüketim*0.641).toFixed(2)} TL`)
    console.log(`Dağıtım Bedeli ${(tüketim*0.359).toFixed(2)} TL`)
    console.warn(`Toplam Tüketim Bedeli ${(tüketim).toFixed(2)} TL`)

    console.log(`BTV ${(btv).toFixed(2)} TL`)
    console.log(`KDV ${(kdv).toFixed(2)} TL`)
    console.warn(`Vergiler Toplamı ${Number((enerji+btv+kdv).toFixed(2))} TL`)

    console.warn(`Toplam Fatura ${(total).toFixed(2)} TL`)
}


fatura(kwh)
*/