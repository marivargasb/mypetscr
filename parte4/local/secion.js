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

      alert("hola validar");
    var first_name,last_name, telefono,  email,password, password_confirmation;
    var contra = document.getElementById("passwordLogin").value;
    alert("hola contra" + contra);

    var usuario = document.getElementById("emailLogin").value;
      alert("hola user" + usuario);

    if (document.getElementById("emailLogin").value == 0) {
        alert("Nombre requerido");
    } else if (document.getElementById("passwordLogin").value == null) {
        alert("Contraseña requerida");

    } else if (verificacionLogin(usuario, contra) == 'n') {
        alert("El nombre de usuario o contraseña son incorrectos");
    } else {

        window.open("file:///C:/Users/mariv/Documents/GitHub/mypetscr/parte4/perfil.html");
        alert("hola aqui");
    }

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

function verificacionLogin(usuario, contra) {
    var usuario = usuario;
    var contra = contra;
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



        if (correo == usuario && passw == contra) {
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

  window.open("file:///C:/Users/mariv/Documents/GitHub/mypetscr/parte4/perfil.html");

}