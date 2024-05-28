let usuario0 = {
  nombre: "Paola",
  apellido: "Ortiz",
  email: "paola@company.ru",  
  direccion: {
    municipio: "Jocotenango",
    calle: "Calle ancha",
    numero: 25,
  },
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
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
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
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
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
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
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
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
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
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
  estado: true,
  recuperarClave: function () {
    console.log("Recuperar clave...");
  },
};

usuario0.dpi = {dpi : "1212 54989 0101"};
usuario0.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion = {
        municipio : newMunicipio,
        calle : newCalle,
        numero : newNumero,
    }
    
}
usuario0.cambiarDireccion("Guatemala", "san pedro", "1");

usuario0.dpi = {dpi : "1212 54989 0101"};
usuario0.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion = {
        municipio : newMunicipio,
        calle : newCalle,
        numero : newNumero,
    }
    
}
usuario0.cambiarDireccion("Guatemala", "san pedro", "1");

usuario1.dpi = {dpi : "1212 54989 0101"};
usuario1.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion1 = {
        municipio1 : newMunicipio,
        calle1 : newCalle,
        numero1 : newNumero,
    }
    
}
usuario1.cambiarDireccion("Guatemala", "san pedro", "1");

usuario2.dpi = {dpi : "1212 54989 0101"};
usuario2.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion2 = {
        municipio2 : newMunicipio,
        calle2 : newCalle,
        numero2 : newNumero,
    }
    
}
usuario2.cambiarDireccion("Guatemala", "san pedro", "1");

usuario3.dpi = {dpi : "1212 54989 0101"};
usuario3.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion3 = {
        municipio3 : newMunicipio,
        calle3 : newCalle,
        numero3 : newNumero,
    }
    
}
usuario3.cambiarDireccion("Guatemala", "san pedro", "1");

usuario4.dpi = {dpi : "1212 54989 0101"};
usuario4.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion4 = {
        municipio4 : newMunicipio,
        calle4 : newCalle,
        numero4 : newNumero,
    }
    
}
usuario4.cambiarDireccion("Guatemala", "san pedro", "1");

usuario5.dpi = {dpi : "1212 54989 0101"};
usuario5.cambiarDireccion = function (newMunicipio, newCalle, newNumero) {
    this.direccion5 = {
        municipio5 : newMunicipio,
        calle5 : newCalle,
        numero5 : newNumero,
    }
    
}
usuario5.cambiarDireccion("Guatemala", "san pedro", "1");


console.log(usuario0);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);
