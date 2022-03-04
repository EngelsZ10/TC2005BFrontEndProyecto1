function myFunction() {
    document.getElementById("p1").innerHTML = document.getElementById("lname").value;
}

function valida() {
    if (document.forms["form"]["lname"].value == "") {
        alert("no puedes mandar un elemento vacio");
        return false;
    }

}

document.getElementById("bdy").style.backgroundImage = "url('../static/assets/default.jpg')";
//document.getElementById("i").href = "index.html";
//document.getElementById("c").href = "Convolution.html";
//document.getElementById("a").href = "Aplication.html";


document.getElementById("GC").onmouseover = function() {
    document.getElementById("bdy").style.backgroundImage = "url('../static/assets/badassGranny.jpg')";
};

document.getElementById("GC").onmouseout = function() {
    document.getElementById("bdy").style.backgroundImage = "url('../static/assets/default.jpg')";
};

document.getElementById("AC").onmouseover = function() {
    document.getElementById("bdy").style.backgroundImage = "url('../static/assets/felizJueves.gif')";
};

document.getElementById("AC").onmouseout = function() {
    document.getElementById("bdy").style.backgroundImage = "url('../static/assets/default.jpg')";
};