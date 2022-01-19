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

    if (!input.value || input.value <= 0 || input.value > 99999) {

        input.className = "wrong";
        setTimeout(() => {
            input.className = "", clear()
        }, 1000);

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

        setTimeout(() => trAktif.innerHTML = `${(aktif).toFixed(2)} ₺`, 30);
        setTimeout(() => trDagitim.innerHTML = `${(dagitim).toFixed(2)} ₺`, 60);
        setTimeout(() => trTüketim.innerHTML = `${(tüketim).toFixed(2)} ₺`, 90);
        setTimeout(() => trEnerji.innerHTML = `${(enerji).toFixed(2)} ₺`, 120);
        setTimeout(() => trBtv.innerHTML = `${(btv).toFixed(2)} ₺`, 150);
        setTimeout(() => trKdv.innerHTML = `${(kdv).toFixed(2)} ₺`, 180);
        setTimeout(() => trVergi.innerHTML = `${(enerji+btv+kdv).toFixed(2)} ₺`, 210);
        setTimeout(() => trTotal.innerHTML = `${(total).toFixed(2)} ₺`, 240);

    }
}


//-------------------------------------------------


temiz.onclick = () => {
    clear()
}


//-------------------------------------------------


function clear() {
    setTimeout(() => trAktif.innerHTML = `0 ₺`, 30);
    setTimeout(() => trDagitim.innerHTML = `0 ₺`, 60);
    setTimeout(() => trTüketim.innerHTML = `0 ₺`, 90);
    setTimeout(() => trEnerji.innerHTML = `0 ₺`, 120);
    setTimeout(() => trBtv.innerHTML = `0 ₺`, 150);
    setTimeout(() => trKdv.innerHTML = `0 ₺`, 180);
    setTimeout(() => trVergi.innerHTML = `0 ₺`, 210);
    setTimeout(() => trTotal.innerHTML = `0 ₺`, 240);

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