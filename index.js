window.addEventListener('resize', checkNav);

function checkNav(){
    if (innerWidth > 760 && document.getElementById("nav").style.display == "none") {
        document.getElementById("nav").style.display = "flex";
        document.getElementById("nav-container").style.width = "90%";
        document.getElementById("nav-expand").style.transform = "scaleY(2) skew(3deg) rotate(180deg)";
    }
    else if(innerWidth < 760 && document.getElementById("nav").style.display == "flex"){
        document.getElementById("nav").style.display = "none";
        document.getElementById("nav-container").style.width = "88px";
        document.getElementById("nav-expand").style.transform = "scaleY(2) skew(3deg) rotate(0deg)";
    }
}

function expandNav() {
    if (innerWidth < 760) {
        document.getElementById("nav").style.display = "flex";
        document.getElementById("nav-container").style.width = "90%";
        document.getElementById("nav-expand").style.transform = "scaleY(2) skew(3deg) rotate(180deg)";
    }
}

function collapseNav() {
    if (innerWidth < 760) {
        document.getElementById("nav").style.display = "none";
        document.getElementById("nav-container").style.width = "88px";
        document.getElementById("nav-expand").style.transform = "scaleY(2) skew(3deg) rotate(0deg)";
    }
}