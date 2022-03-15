function wload() {
    if (document.referrer.indexOf(window.location.hostname)==-1) {
        document.getElementById("wpcnt").style.display = "none";
        setTimeout(showPage, Math.random() * (1500 - 750) + 500);
    } else {
        document.getElementById("loader").style.display = "none";
    }
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wpcnt").style.display = "block";
}

window.onload = wload;