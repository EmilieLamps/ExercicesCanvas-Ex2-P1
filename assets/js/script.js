var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//Toit de la maison
ctx.rotate(Math.PI/4);
ctx.fillStyle = "#D28143";
ctx.fillRect(191, -95, 123, 123);

// Forme de la maison
ctx.rotate(Math.PI/4)
ctx.fillStyle = "lightblue";
ctx.fillRect(155, -290, 175, 175);

//  Fenêtre de gauche
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(180, -165, 30, 30);

// Fenêtre de droite
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(180, -270, 30, 30);

// Porte
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(280, -220, 50, 40);
