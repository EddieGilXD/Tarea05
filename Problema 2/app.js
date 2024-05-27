let user = {
  // objeto user
  nombre: "Paola",
  apellido: "Ortiz",
  email: "paola@company.ru",
  direccion: {
    // objeto direccion dentro del objeto
    municipio: "Jocotenango",
    calle: "Calle ancha",
    numero: 25,
  },
  estado: true, // podemos asignar valores boolean
  recuperarClave: function () {
    // podemos asignar funciones, en este
    console.log("Recuperar clave...");
  }
}
