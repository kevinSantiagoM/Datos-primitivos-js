/*let user = {
    name: "jhon",
    age: 10,
};


user.sayHi = function() {
    alert("¡Hola!");
}

user.sayHi


function sayhi() {
    alert("¡Hola!");
}

user.sayhi = sayhi: // Agrega la funcion como un metodo
user.sayhi();
*/

let user = {
    name: "jhon ",
    age: 30,
    sayHi() {
        alert("¡Hola! " + this.name)
    }
};
user.sayHi();