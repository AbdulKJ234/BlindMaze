const instruksi = document.getElementById("instruksi")
const home = document.getElementsById("home")
function showIns() {
    if (instruksi.style.display == "none") {
        instruksi.style.display = "flex"
        home.style.filter = "blur"
    } else {
        instruksi.style.display = "none"
    }
}

function closeIns() {
    if (instruksi.style.display == "flex") {
        instruksi.style.display = "none"
        home.style.filter = "blur(8px)"
    } else {
        instruksi.style.display = "flex"
        home.style.filter = "none"
    }
}