//Burger menu

window.addEventListener("load", sidenVises);

function sidenVises() {
    //        console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    loadJSON();
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }
}


//    const urlParams = new URLSearchParams(window.location.search);
//    const id = urlParams.get("id");
const medieurl = "https://passiongruppe16-bb8a.restdb.io/media/";


let ol;
const myHeaders = {

    "x-apikey": "602e232f5ad3610fb5bb6229"
}
// console.log("ID", id);    document.addEventListener("DOMContentLoaded", loadJSON);

async function loadJSON() {
    const JSONData = await fetch("https://passiongruppe16-bb8a.restdb.io/rest/indholdsliste", {
        headers: myHeaders
    });

    ol = await JSONData.json();
    //    console.log("ol", ol);
    visOl();
}


function visOl() {


    ol.forEach(drik => {


        if (drik.monthly == true) {

            console.log(drik);


            document.querySelector(".forsidebillede").src = medieurl + drik.billede;
        }
    });



}
