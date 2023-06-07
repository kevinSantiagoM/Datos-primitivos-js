// //------------------------
// //      Objetos
// //------------------------

// let userEmpty = {};
// let userEmpty2 = new Object();

// let user = {      
//     name: "Jhnon",
//     age: 30,
//     "likes birds": true,
// };

// console.info(`Nombre: ${user.name}`);
// console.info(`Edad: ${user.age}`);

// user.isAdmin = true;
// console.log(user.isAdmin);

// user.nam = "Mary";
// console.log(user.nam)
// console.info( `Nombre: ${user.name}` );


// delete user.nam;
// console.log(user.nam)

// user = {      
//     name: "Jhnon",
//     age: 30,
//     "likes birds": true,
// };

// console.info(`¿Le gustan las aves?: ${user["likes birds"]}` );

// let key = "Likes birds";

// console.log(user[key]);
// console.log(user.key);  // undefined

// // key = prompt("¿Que dato quiere saber el usuario?", "nanme")
// // console.log( `Nombre: ${user.key}`);

// // function makeuser(name, age) {
// //     return {
// //         name: name,
// //         age: age,
// //     };
// // }

// function makeuser(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// let user2 = makeuser("Diana", 22);
// console.log(user2.name)

// // key = prompt("¿Que dato quiere saber del usuario?", "name")

// // key  in odject

// // console.info(key in user );
// // console.info(`${(key)}: ${user[key]}` );

// for(let key in user) {
//     console.log(key + ":" + user[key])
// }

// Crear un odjeto salarios / juan= 200 / Ana= 160 / Pedro= 130 / Maria= 240 / Migel= 210 / Lucas= 180 y calcular la suma de todos los datos

// let datos = {
//     juan: 200,
//     ana: 160,
//     pedro: 130,
//     maria: 240,
//     migel: 210,
//     lucas: 180,
// }

// let total = 0;

// for(let dato in datos) {
//     total += datos[dato]
// }
// console.log(datos)
// console.log(`y el valor total es de ${total}` );

// crear una funcion que sellame multiplicarNUmeros(menu)

// let menu = {
//     ancho: 200,             // 400
//     alto: 300,              // 600
//     titulo: "Mi menu",      // "Mi menu"
// };

// function multiplicarNumero(menu) {
//     for(let key in menu) {
//         if(typeof menu[key] === 'number')
//         menu[key] *= 2;
//     }
// }

// multiplicarNumero(menu);
// console.log(menu);

//--------------------------------------
// Referencia de odjetos
//---------------------------------------

// let message = "Hola";
// console.log(message);
