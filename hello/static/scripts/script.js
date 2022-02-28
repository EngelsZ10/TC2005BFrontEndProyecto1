function myFunction() {
    document.getElementById("p1").innerHTML = document.getElementById("lname").value;
}

document.getElementById("bdy").style.backgroundImage = "url('../static/assets/default.jpg')";

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