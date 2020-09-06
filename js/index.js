function openNav(a) {
    document.getElementById("nav").className = "newNav";
    a.style.opacity = "0";

    document.getElementById("closeDiv").style.visibility = "visible";
    document.getElementById("closeDiv").style.opacity = "1";


}

function fade() {
    body.fade(1000);


}

function closeNav(a) {
    document.getElementById("nav").className = "nav";
    document.getElementById("nav").style.transition = "1s ease";

    a.style.opacity = "0";


    document.getElementById("barsDiv").style.opacity = "1";
}