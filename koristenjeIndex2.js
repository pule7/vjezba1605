var brojanje = require("./index2");

brojanje.walk();

var total = brojanje.getTotalSteps();
console.log("total steps= " + total);

brojanje.run();

brojanje.run();

console.log("presao je " + brojanje.getTotalSteps() + " koraka");

brojanje.walk();

brojanje.walk();

console.log("presao je " + brojanje.getTotalSteps() + " koraka");

/* spread operator */

function ispisiImena(prvo, drugo, trece) {
    console.log(prvo, drugo, trece);
}

const x = ["Ivan", "Marija", "David", "Filip", "Juan", "Rosa", "Žilberto"];

let imena = ispisiImena(...x);

console.log(imena);

