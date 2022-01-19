//2022 Elektirk Faturası Hesaplama

const input = document.getElementById("input")
const button = document.getElementById("button")
const temiz = document.getElementById("temiz")

const trAktif = document.getElementById("aktif")
const trDagitim = document.getElementById("dagitim")
const trTüketim = document.getElementById("tüketim")
const trEnerji = document.getElementById("enerji")
const trBtv = document.getElementById("btv")
const trKdv = document.getElementById("kdv")
const trVergi = document.getElementById("vergi")
const trTotal = document.getElementById("total")



input.focus()


//-------------------------------------------------

button.onclick = () => {

    if (!input.value || input.value <= 0 || input.value > 9999) {

        input.className = "wrong";
        setTimeout(() => input.className = "", 1000);

    } else {

        if (input.value > 150) {
            aktif = (150 * 0.7946) + ((input.value - 150) * 1.3488)

        } else if (input.value <= 150) {
            aktif = (input.value * 0.7946)
        }

        let dagitim = (input.value * 0.3295)
        let tüketim = aktif + dagitim

        let enerji = aktif * 0.007
        let btv = aktif * 0.04
        let kdv = (tüketim + enerji + btv) * 0.18

        let total = tüketim + btv + kdv + enerji


        let loop1 = setInterval(() => {
            trAktif.innerHTML = `${(aktif).toFixed(2)} ₺`
        }, 30);

        let loop2 = setInterval(() => {
            clearInterval(loop1)
            trDagitim.innerHTML = `${(dagitim).toFixed(2)} ₺`;
        }, 59);

        let loop3 = setInterval(() => {
            clearInterval(loop2)
            trTüketim.innerHTML = `${(tüketim).toFixed(2)} ₺`;
        }, 90);

        let loop4 = setInterval(() => {
            clearInterval(loop3)
            trEnerji.innerHTML = `${(enerji).toFixed(2)} ₺`;
        }, 120);

        let loop5 = setInterval(() => {
            clearInterval(loop4)
            trBtv.innerHTML = `${(btv).toFixed(2)} ₺`;
        }, 150);

        let loop6 = setInterval(() => {
            clearInterval(loop5)
            trKdv.innerHTML = `${(kdv).toFixed(2)} ₺`;
        }, 180);

        let loop7 = setInterval(() => {
            clearInterval(loop6)
            trVergi.innerHTML = `${(enerji+btv+kdv).toFixed(2)} ₺`;
        }, 210);

        let loop8 = setInterval(() => {
            clearInterval(loop7)
            trTotal.innerHTML = `${(total).toFixed(2)} ₺`;
        }, 240);

        setTimeout(() => {
            clearInterval(loop8);
        }, 240);
    }
}



temiz.onclick = () => {
    trAktif.innerHTML = `0 ₺`
    trDagitim.innerHTML = `0 ₺`
    trTüketim.innerHTML = `0 ₺`
    trEnerji.innerHTML = `0 ₺`
    trBtv.innerHTML = `0 ₺`
    trKdv.innerHTML = `0 ₺`
    trVergi.innerHTML = `0 ₺`
    trTotal.innerHTML = `0 ₺`

    input.className = ""
    input.value = ``
}


//-------------------------------------------------


//Enter tuşu ile butonu çalıştırma
input.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        button.click();
    }
})