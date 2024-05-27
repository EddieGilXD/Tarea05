const = { id: 1}; // N/A//

user.name = "Paola";

console.log("Soy el objeto user, con la nueva propiedad, user");
user.leerPropiedad_name = function () {
    console.log("Leyendo la propiedad: ", user.name);    
}

user.leerPropiedad_name();
console.log(user);

console.log("Ahora cambiaremos cosas del objeto user");