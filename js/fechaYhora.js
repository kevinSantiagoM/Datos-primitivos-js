// Date 

let now = new Date();

// console.log(now); 
               // new Date(milisegundos)         
let jan01_1970 = new Date(0);
// console.log(jan01_1970);

let jan01_1970_col = new Date(5 * 60 * 60 * 1000);
// console.log(jan01_1970_col);

let jan02_1970_col = new Date(29 * 60 * 60 * 1000);
// console.log(jan02_1970_col);

let Jul20_2000 = new Date("2000-07-20");
// console.log(Jul20_2000);

let may10_2006 = new Date("2006-05-11");
// console.log(may10_2006)
                        // año mes dia horas minutos segundos ms

// Jul20_2000 = new Date(2000, 6, 20, 0, 0, 0, 0);
Jul20_2000 = new Date(2000, 6, 20);
console.log(Jul20_2000);

// crear un variable que se llame sep 11 del 2001 a las 9 y 7 de la mañana

let Sep_11_2001 = new Date(2001, 8, 11, 09, 07);
console.log(Sep_11_2001);

//5 DE NOV DE 2015 6 Y 25 DE LA TARDE

let nov_5_2015 = new Date(2015, 10, 5, 18, 25);
console.log(nov_5_2015);

console.log(now.getFullYear()); //dar el año
console.log(now.getMonth() + 1); // mas 1 para dar la fecha exacta
console.log(now.getDay());// Dia de la semana 
console.log(now.getDate());  // Dia del mes
console.log(now.getHours());  // hora
console.log(now.getMinutes());  // minutos
console.log(now.getSeconds());  // segundos
console.log(now.getMilliseconds());  // milisegundos
console.log(now.getTime()); // todos los milisegundos que ha contado 

// hacer un metodo al cual le ingrese una fecha en formato string y me devuelva en español

// let fechcaIngesada = prompt("Ingresa tu fecha: ");

// function cambiafecha(fechaIngresada) {
//     let fecha = new Date(fechaIngresada);

//     let fehchaIngresada {
//         "enero", "febrero", "marzo", "abril", "mayo", "junio",
//         "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
//     }
// }

// let ayer = new Date(2023, 6, 32);

let today = new Date();
console.loge(today);
console.loge(today.getDate() + 1);
today.setDate(today.getDate() + 1);
console.log(today);

