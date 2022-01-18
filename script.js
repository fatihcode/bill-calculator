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

    if (input.value <= 0 || input.value > 99999) {

        let loop = setInterval(() => input.className = "wrong", 1);


        setTimeout(() => {
            clearInterval(loop);
            input.className = "";
        }, 1000);



    } else if (input.value > 150) {

        aktif = (150 * 0.7946) + ((input.value - 150) * 1.3488)


    } else if (input.value <= 150) {

        aktif = (input.value * 0.7946)


    }

    dagitim = (input.value * 0.3295)
    tüketim = aktif + dagitim

    enerji = aktif * 0.007
    btv = aktif * 0.04
    kdv = (tüketim + enerji + btv) * 0.18

    total = tüketim + btv + kdv + enerji

    let loop1 = setInterval(() => {
        trAktif.innerHTML = `${(aktif).toFixed(2)} TL`
    }, 50);

    let loop2 = setInterval(() => {
        trDagitim.innerHTML = `${(dagitim).toFixed(2)} TL`;
        clearInterval(loop1)
    }, 100);

    let loop3 = setInterval(() => {
        trTüketim.innerHTML = `${(tüketim).toFixed(2)} TL`;
        clearInterval(loop2)
    }, 150);

    let loop4 = setInterval(() => {
        trEnerji.innerHTML = `${(enerji).toFixed(2)} TL`;
        clearInterval(loop3)
    }, 200);

    let loop5 = setInterval(() => {
        trBtv.innerHTML = `${(btv).toFixed(2)} TL`;
        clearInterval(loop4)
    }, 250);

    let loop6 = setInterval(() => {
        trKdv.innerHTML = `${(kdv).toFixed(2)} TL`;
        clearInterval(loop5)
    }, 300);

    let loop7 = setInterval(() => {
        trVergi.innerHTML = `${(enerji+btv+kdv).toFixed(2)} TL`;
        clearInterval(loop6)
    }, 350);
    
    let loop8 = setInterval(() => {
        trTotal.innerHTML = `${(total).toFixed(2)} TL`;
        clearInterval(loop7)
    }, 400);


    setTimeout(() => {
        clearInterval(loop8);
    }, 400);






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