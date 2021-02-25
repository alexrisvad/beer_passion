//Burger menu

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



const url = "https://passiongruppe16-bb8a.restdb.io/rest/indholdsliste";
const medieurl = "https://passiongruppe16-bb8a.restdb.io/media/";

const myHeaders = {
    'x-apikey': "602e232f5ad3610fb5bb6229"
};


document.addEventListener("DOMContentLoaded", start);
let ol;
let filter = "alle";

// første funktion der kaldes efter DOM er loaded
function start() {
    const filterKnapper = document.querySelectorAll("nav button");
    filterKnapper.forEach(knap => knap.addEventListener("click", filtrerOl));
    loadJSON();
}

//eventlistener knyttet til knapperne der vælger hvad for et filter der er aktivt

function filtrerOl() {
    filter = this.dataset.kategori; //sæt variabel filter til værdien af data-kategori på den knap der er klikket på
    document.querySelector(".valgt").classList.remove("valgt"); //fjern klassen valgt fra den knap der er klikket på
    this.classList.add("valgt"); // marker den knap der er klikket på
    visOl(); // kald funktionen visOl efter det nye filter er sat på
    //    header.textContent = this.textContent;
}

async function loadJSON() {
    const JSONData = await fetch("https://passiongruppe16-bb8a.restdb.io/rest/indholdsliste", {
        headers: myHeaders
    });

    ol = await JSONData.json();
    console.log("ol", ol);
    visOl();
}

// funktion der viser øl i list-view

function visOl() {

    const dest = document.querySelector("section"); //container til articles med en øl
    const skabelon = document.querySelector("template").content; //select indhold af html skabelon (article)
    dest.textContent = ""; //ryd container inden ny loop

    ol.forEach(drik => {
        console.log(filter, drik.kategori);

        if (filter == drik.kategori || filter == "alle") {
            const klon = skabelon.cloneNode(true);
            klon.querySelector(".billede").alt = drik.navn;
            klon.querySelector(".billede").src = medieurl + drik.billede;
            klon.querySelector(".navn").textContent = drik.navn;
            klon.querySelector(".type").textContent = drik.type;
            klon.querySelector(".pris").textContent = (`Pris: ${drik.pris} DKK`);

            klon.querySelector("article").addEventListener("click", () => visDetaljer(drik));
            dest.appendChild(klon);
        }
    });
}

function visDetaljer(hvad) {
    location.href = `singleView.html?id=${hvad._id}`;
}
