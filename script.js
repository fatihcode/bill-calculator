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

let aktif, dagitim, tüketim, enerji;

input.focus()


//-------------------------------------------------

button.onclick = () => {

    if (input.value > 150) {

        aktif = (150 * 0.7946) + ((input.value - 150) * 1.3488)
        input.className = ""

    } else if (input.value > 0 && input.value <= 150) {

        aktif = (input.value * 0.7946)
        input.className = ""

    } else {

        input.className = "wrong"
    }

    dagitim = (input.value * 0.3295)
    tüketim = aktif + dagitim

    enerji = aktif * 0.007
    btv = aktif * 0.04
    kdv = (tüketim + enerji + btv) * 0.18

    total = tüketim + btv + kdv + enerji

    trAktif.innerHTML = `${(aktif).toFixed(2)} TL`
    trDagitim.innerHTML = `${(dagitim).toFixed(2)} TL`
    trTüketim.innerHTML = `${(tüketim).toFixed(2)} TL`
    trEnerji.innerHTML = `${(enerji).toFixed(2)} TL`
    trBtv.innerHTML = `${(btv).toFixed(2)} TL`
    trKdv.innerHTML = `${(kdv).toFixed(2)} TL`
    trVergi.innerHTML = `${(enerji+btv+kdv).toFixed(2)} TL`
    trTotal.innerHTML = `${(total).toFixed(2)} TL`
}



temiz.onclick = () => {
    trAktif.innerHTML = ``
    trDagitim.innerHTML = ``
    trTüketim.innerHTML = ``
    trEnerji.innerHTML = ``
    trBtv.innerHTML = ``
    trKdv.innerHTML = ``
    trVergi.innerHTML = ``
    trTotal.innerHTML = ``
    
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