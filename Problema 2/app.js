let usuario0 = {
  nombre: "Paola",
  apellido: "Ortiz",
  email: "paola@company.ru",
  direccion: {
    municipio: "Jocotenango",
    calle: "Calle ancha",
    numero: 25,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};

let usuario1 = {
  nombre1: "Paolo",
  apellido1: "Ortega",
  email1: "paolo@company.ru",
  direccion1: {
    municipio: "Jocotenango",
    calle: "Calle ancha",
    numero: 25,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};

let usuario2 = {
  nombre2: "Pablo",
  apellido2: "Perez",
  email2: "pablo@company.ru",
  direccion2: {
    municipio: "Peten",
    calle: "Calle san jose",
    numero: 12,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};
let usuario3 = {
  nombre3: "Mario",
  apellido3: "Gonzales",
  email3: "Mario@company.ru",
  direccion3: {
    municipio: "Guatemala",
    calle: "Calle san pedro",
    numero: 45,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};
let usuario4 = {
  nombre4: "Roberto",
  apellido4: "Lays",
  email4: "roberto@company.ru",
  direccion4: {
    municipio: "Coban",
    calle: "Calle san jose",
    numero: 16,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};

let usuario5 = {
  nombre5: "Jose",
  apellido5: "Jocon",
  email5: "Jose@company.ru",
  direccion5: {
    municipio: "Peten",
    calle: "Calle san jose",
    numero: 12,
  },
  estado : true,
  recuperarClave : function () {
    console.log("Recuperar clave...");
  }
};

console.log(usuario0);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);

//La diferencia entre el problema 1 y 2 es que despliga de manera ordenada en consola, y esta ya tiene una accion que es recuperar clave//
// La segunda opcion nos permite acceder y ordenar la informacion en la consola talvez la segunda manera tiene un poco mas de complejidad ya que se asgina todo a una varieble y a macena el objeto //