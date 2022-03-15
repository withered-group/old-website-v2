var bptoggle = document.getElementById('bptoggle');
var bp = localStorage.getItem('bp');

function revealPlan(s) {
    var x;
    var nx;
    if (s === 'discord') {
        x = document.getElementById('plan-discord');
        nx = document.getElementById('plan-web');
    } else if (s === 'web') {
        x = document.getElementById('plan-web');
        nx = document.getElementById('plan-discord');
    } else {
        x = null;
        console.log("Error with revealer!");
    }

    if (x.style.display === "none") {
        x.style.display = "flex";
        nx.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function checkout(plan, tier) {
    if (plan == "discord") {
        if (tier == "copper") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/00g7sAe3Jg9bcpi288";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/6oE5kse3Jf57gFy7sy";
            }
        } else if (tier == "palladium") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/8wM5kscZF1ehaha6op";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/aEU7sA3p53mpgFy7sz";
            }
        } else if (tier == "iridium") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/aEUaEMf7Ng9b4WQ4gi";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/00gdQY9NtcWZahafZ6";
            }
        }
    } else if (plan == "web") {
        if (tier == "copper") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/fZe9AI3p5cWZgFy8wz";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/eVa8wE9Nt5ux892dQZ";
            }
        } else if (tier == "palladium") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/7sIaEMgbR9KN9d6dQU";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/7sI4go3p56yBfBu4gq";
            }
        } else if (tier == "iridium") {
            if (bp == "monthly") {
                window.location.href = "https://buy.stripe.com/eVa6owaRx5ux0GA4gl";
            } else if (bp == "annually") {
                window.location.href = "https://buy.stripe.com/5kAeV28Jp1ehdtmdR1";
            } else {
                console.log("error");
                console.log("bp: " + bp);
                console.log("bp-ls: " + localStorage.getItem('bp'));
            }
        }
    }
}

function toggleBP() {
    if (bp == "monthly") {
        localStorage.setItem('bp', "annually");
        bp = "annually";
    } else if (bp == "annually") {
        localStorage.setItem('bp', "monthly");
        bp = "monthly";
    } else {
        console.log("error")
    }
    setPTs();
}

function bpol() {
    if (localStorage.getItem('bp') == null) {
        localStorage.setItem('bp', "monthly");
        bp = "monthly";
        console.log("asdasdasd");
        bptoggle.checked = false;
        setPTs();
    } else {
        if (bp == "annually") {
            bptoggle.checked = true;
        } else if (bp == "monthly") {
            bptoggle.checked = false;
        } else {
            console.log("error");
        }
        setPTs();
    }
}

function setPTs() {
    var dpci = document.getElementById('dpci');
    var dpti = document.getElementById('dpti');
    var dpcp = document.getElementById('dpcp');
    var dptp = document.getElementById('dptp');
    var dpcc = document.getElementById('dpcc');
    var dptc = document.getElementById('dptc');
    var wpci = document.getElementById('wpci');
    var wpti = document.getElementById('wpti');
    var wpcp = document.getElementById('wpcp');
    var wptp = document.getElementById('wptp');
    var wpcc = document.getElementById('wpcc');
    var wptc = document.getElementById('wptc');
    if (bp == "monthly") {
        dpci.innerHTML = "&#163;1.50";
        dpti.innerHTML = "per month";
        dpcp.innerHTML = "&#163;1.00";
        dptp.innerHTML = "per month";
        dpcc.innerHTML = "&#163;0.50";
        dptc.innerHTML = "per month";
        wpci.innerHTML = "&#163;1.50";
        wpti.innerHTML = "per month";
        wpcp.innerHTML = "&#163;1.00";
        wptp.innerHTML = "per month";
        wpcc.innerHTML = "&#163;0.50";
        wptc.innerHTML = "per month";
    } else if (bp == "annually") {
        dpci.innerHTML = "&#163;15";
        dpti.innerHTML = "per year";
        dpcp.innerHTML = "&#163;10";
        dptp.innerHTML = "per year";
        dpcc.innerHTML = "&#163;5";
        dptc.innerHTML = "per year";
        wpci.innerHTML = "&#163;15";
        wpti.innerHTML = "per year";
        wpcp.innerHTML = "&#163;10";
        wptp.innerHTML = "per year";
        wpcc.innerHTML = "&#163;5";
        wptc.innerHTML = "per year";
    }
}