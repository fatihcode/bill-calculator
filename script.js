//2022 Elektirk Faturası Hesaplama



const input = document.getElementById("input")
const button = document.getElementById("button")
const yazdir = document.getElementById("yazdir")



input.focus()



button.onclick = () => {
    fatura(input.value)
console.log(input.value)
}


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

    enerji = aktif * 0.007
    btv = aktif * 0.04
    kdv = (tüketim + enerji + btv) * 0.18

    total = tüketim + btv + kdv + enerji

    console.warn(`${input.value} kwh Tüketim İçin Fatura Ayrıntıları`)

    console.log(`Aktif Enerji Bedeli      ${(aktif).toFixed(2)} TL`)
    console.log(`Dağıtım Bedeli            ${(dagitim).toFixed(2)} TL`)
    console.warn(`Toplam Tüketim Bedeli   ${(tüketim).toFixed(2)} TL`)

    console.log(`Enerji Fonu                ${(enerji).toFixed(2)} TL`)
    console.log(`BTV                        ${(btv).toFixed(2)} TL`)
    console.log(`KDV                       ${(kdv).toFixed(2)} TL`)
    console.warn(`Vergiler Toplamı         ${(enerji+btv+kdv).toFixed(2)} TL`)

    console.warn(`Toplam Fatura           ${(total).toFixed(2)} TL`)





}





//Enter tuşu ile butonu çalıştırma
input.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        button.click();
    }
})