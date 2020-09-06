function funA() {
    document.getElementById("edu").style.opacity = "0";
    document.getElementById("abo").style.opacity = "1";
    document.getElementById("pro").style.opacity = "0";

}

function funP() {
    document.getElementById("edu").style.opacity = "0";
    document.getElementById("abo").style.opacity = "0";
    document.getElementById("pro").style.opacity = "1";

}

function funE() {
    document.getElementById("edu").style.opacity = "1";
    document.getElementById("abo").style.opacity = "0";
    document.getElementById("pro").style.opacity = "0";

}

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