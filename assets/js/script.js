var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//Toit de la maison
 ctx.beginPath();
 ctx.moveTo(200,60); // Point de départ (Gauche, Haut)
 ctx.lineTo(285,155); // ligne de droite du triangle
 ctx.lineTo(110,155); // ligne de gauche du triangle
 ctx.closePath();
 ctx.fillStyle = "#D28143"; // Définition de la couleur de remplissage
 ctx.fill();

// Forme de la maison
ctx.fillStyle = "lightblue";
ctx.fillRect(110, 155, 175, 175);

//  Fenêtre de gauche
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(135, 180, 30, 30);

// Fenêtre de droite
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(230, 180, 30, 30);

// Porte
ctx.fillStyle = "#C9C9C9"
ctx.fillRect(177, 280, 40, 50);
