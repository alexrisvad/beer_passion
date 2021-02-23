window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    loadJSON();
}

async function loadJSON() {
    const JSONData = await fetch("https://passiongruppe16-bb8a.restdb.io/rest/indholdsliste", {
        headers: myHeaders
    });

    ol = await JSONData.json();
    console.log("ol", ol);
    visUdvalgOl();
}

function visUdvalgOl() {
    ol.forEach
    // document.querySelector(".billede").src = medieurl + billede.billede;

}
