function openNav(a) {
    document.getElementById("nav").className = "newNav";
    a.style.opacity = "0";

    document.getElementById("closeDiv").style.visibility = "visible";
    document.getElementById("closeDiv").style.opacity = "1";


}



function closeNav(a) {
    document.getElementById("nav").className = "nav";
    document.getElementById("nav").style.transition = "1s ease";

    a.style.opacity = "0";


    document.getElementById("barsDiv").style.opacity = "1";
}

function dataSci() {

    document.getElementById("jdet").style.opacity = "0";
    document.getElementById("wDdet").style.opacity = "0";
    document.getElementById("dScidet").style.opacity = "1";


}

function webDev() {
    document.getElementById("jdet").style.opacity = "0";
    document.getElementById("wDdet").style.opacity = "1";
    document.getElementById("dScidet").style.opacity = "0";
}

function java() {
    document.getElementById("jdet").style.opacity = "1";
    document.getElementById("wDdet").style.opacity = "0";
    document.getElementById("dScidet").style.opacity = "0";
}