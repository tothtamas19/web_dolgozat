/*
* File: app.js
* Author: Tóth Tamás
* Copyright: 2024, Tóth Tamás
* Group: Szoft 1/N
* Date: 2024-04-04
* Github: https://github.com/tothtamas19/
* Licenc: GNU GPL
*/

function elipszoidT (a,b,c) {
    return (4/3) * Math.PI * a * b * c
}

var a = parseFloat(prompt("Kérem adja meg az 'a' tengely hosszúságát"));
var b = parseFloat(prompt("Kérem adja meg az 'b' tengely hosszúságát"));
var c = parseFloat(prompt("Kérem adja meg az 'c' tengely hosszúságát"));

var terfogat = elipszoidT (a,b,c);
console.log ("Az elipszoid térfogata: ", terfogat)