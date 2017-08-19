/*                ELIMINAR USUARIO                  */ 

 var first_name,last_name, telefono,  email,password, password_confirmation;
    
 var usuario = document.getElementById("emailLogin").value;

function removeItemFromArr ( users, usuario ) {
    var i = users.indexOf( usuario );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}
 
removeItemFromArr( foo,  );
console.info( foo );
// ["thumb-1", "thumb-2", "thumb-3", "thumb-4"]
 
removeItemFromArr( foo, 'thumb-2' );
console.info( foo );
// ["thumb-1", "thumb-3", "thumb-4"]
















       function removeFromLocalStorage(index){

       

              var users = [],
                  dataInLocalStorage = localStorage.getItem(localStorageKeyName);

              users = JSON.parse(dataInLocalStorage);

              users.splice(index, 1);

              localStorage.setItem(localStorageKeyName, JSON.stringify(users));

              loadFromLocalStorage();



          }


var personasRegistradas = [];
var user= {

first_name: "",
 last_name: "",
 telefono: "",
email: "",
password: "",
password_confirmation : ""
};

/*$(function() {



})*/

function validar() {

    var first_name,last_name, telefono,  email,password, password_confirmation;
    
    var usuario = document.getElementById("emailLogin").value;
      alert("hola user" + usuario);

             verificacionLogin(usuario);

        window.open("file:///C:/Users/Estudiante.PSSC/Documents/Examen/prueva%20-copia/index1.html");
      

}

function getPersonasRegistradas() {
    var user = localStorage.getItem('users')
       alert(user + "entrando al get");

    if (user == null) {
         alert("else" + personasRegistradas)
        personasRegistradas = [];


    } else {
          alert("else" + user);
        personasRegistradas = JSON.parse(user);


    }

    return personasRegistradas;

    alert("return" + personasRegistradas);

}

function verificacionLogin(usuario) {
    var usuario = usuario;
    var existe = 'n';

      alert("verificacionLogin" + contra + usuario +existe);

    var lista = getPersonasRegistradas();

    for (var i = 0; i < lista.length; i++) {
        var nombre = lista[i].first_name;
        var apellido = lista[i].last_name;
        var telefono = lista[i].telefono;
        var correo = lista[i].email;
        var password_confirmation = lista[i].password_confirmation;
        var passw = lista[i].password;




        var user = {

            first_name: nombre,
            last_name: apellido,
            telefono: telefono,
            email:correo,
            password_confirmation: password_confirmation,
            password: passw
        }



        if (correo == usuario ) {
            existe = 's';
            //personaLogueadaInformacion.push(persona);
            personaLogueada(user);
            return existe;
        } else {
            existe = 'n';
        }
    }
    return existe;
}

function personaLogueada(user) {
    localStorage.setItem('users', JSON.stringify(user))

}


function entrar2(){

  window.open("file:///C:/Users/Estudiante.PSSC/Desktop/examen%20progra/mypetscr.html");

}
