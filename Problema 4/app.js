function createUser(nombre, apellido, email, municipio, calle, numero) {
  return {
    nombre: nombre,
    apellido: apellido,
    email: email,
    direccion: {
      municipio: municipio,
      calle: calle,
      numero: numero,
    },
    estado: true,
    recuperarClave: function () {
      console.log("Recuperar clave...");
    },
    cambiarDireccion: function (newMunicipio, newCalle, newNumero) {
      this.direccion.municipio = newMunicipio;
      this.direccion.calle = newCalle;
      this.direccion.numero = newNumero;
    },
  };
}

let user0 = createUser("Paola", "Ortiz", "paola@company.ru", "Jocotenango", "Calle Ancha", 25);
console.log(user0);

let user1 = createUser("Paolo", "Perez", "paolo@company.ru", "Jocotenango", "Calle Ancha", 25);
console.log(user1);

let user2 = createUser("Pablo", "Perez", "pablo@company.ru", "Peten", "Calle san jose", 12);
console.log(user2);

let user3 = createUser("Mario", "Gonzales", "Mario@company.ru", "Guatemala", "Calle san pedro", 45);
console.log(user3);

let user4 = createUser("Roberto", "Lays", "roberto@company.ru", "Coban", "Calle San Jose", 16);
console.log(user4);

let user5 = createUser("Jose", "Jocon", "jose@company.ru", "Peten", "Calle san jose", 12);
console.log(user5);
