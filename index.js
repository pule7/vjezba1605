/* 1.Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex" */

function Dog(name) {
    console.log("name= " + name);
    if(name == undefined) {
        // if(!name){                  //1.potencijalni nacin
        this.dogName = "Rex";
    } else {
        this.dogName = name;
    }
    //this.dogName = name || "Rex"     //2.potencijalni nacin

}

/*2. Kreirajte objekt iz Dog funkcije. */

var dog = new Dog();
console.log("Ime psa default name = " + dog.dogName);

/*2.b, ako proslijedimo ime psa */
var dog1 = new Dog("Loki");
console.log("Ime psa = " + dog1.dogName);

/*3. Dodajte dog funkciji metodu koja vraca postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat! */

Dog.prototype.imePsa = function() {
    return this.dogName;
};

Dog.prototype.bark = function() {
    return "Woof Woof!";
};

console.log("Ime psa1 (dog) preko metode= " + dog.imePsa());
console.log("Ime psa2 (dog2) preko metode= " + dog1.imePsa());

console.log("Pas1 (dog) se glasa= " + dog.bark());
console.log("Pas2 (dog1) se glasa= " + dog1.bark());
