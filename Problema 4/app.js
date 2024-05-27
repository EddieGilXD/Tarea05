function createUser(id, email, name, status){
    return{
        id: id,
        email: email,
        name: name,
        status: status,
        recuperarClave: function(){
            console.log("Recuperando clave...")
        }
    }
}

let user3 = createUser(3, "eduardo@company", "eduardo", false );
let user1 = createUser(4, "lorena@company.ru", "Lorena", true);

console.log(user3);
console.log(user4);
