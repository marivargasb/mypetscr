var personasRegistradas = [];
var user= {

first_name: "",
 last_name: "",
 telefono: "",
email: "",
password: "",
password_confirmation : ""
};

    
    



/*AQUI INICIA EL REGISTRO DE  CLIENTE*/


var registrar_persona = function(){
    
    
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_confirmation = document.getElementById("password_confirmation").value;

  

    var usuario = document.getElementById("emailLogin").value;
    
 if (verificacionLogin(usuario) == 's') {
        alert("ESTE CORREO YA FUE REGISTRADO");
    } else {
    
    saveToLocalStorage( first_name,last_name,telefono,email,password,password_confirmation);

     
    }
};






var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function saveToLocalStorage( first_name,last_name,telefono,email,password,password_confirmation) {
    
                          
    console.log(first_name + "   " + last_name);
    alert('click ' + first_name + " " + last_name +  ' aqui');
	var user = {
	
        
  
        
  "first_name": first_name,
  "last_name": last_name,
  "telefono": telefono,
  "email": email,
  "password":  password,
  "password_confirmation":  password_confirmation
	};
    
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
    
          alert('USUARIO AGREGADO' );
        window.open("file:///C:/Users/mariv/Documents/GitHub/mypetscr/parte4/perfil.html");
       
	
    
}



/* REGISTRO  VERIFICACIONES*/



function getPersonasRegistradas() {
    var user = localStorage.getItem('users');
       alert(user + "entrando al get");

    if (user == null) {
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
    var existe = 'n';

      alert("verificacionLogin" + usuario +existe);

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



        if (correo == usuario) {
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
    localStorage.setItem('users', JSON.stringify(user));

}







/*AQUI INICIA A GUARDAR LOS DATOS DE LA PERSONA*/



var registrar_form = function(){
     alert('click ');
    
  var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
 var foto = document.getElementById("foto").value;

                
    console.log(nombre + "   " + apellido);
    alert('click ' + fecha+ "   " + foto);

 saveToLocalStorageforms( nombre,  apellido,fecha,foto);

}




var forms = JSON.parse(localStorage.getItem('forms'));

if (!forms) {
	forms = [];
}




function saveToLocalStorageforms( nombre,  apellido,fecha,foto) {
    
var form ={
    "nombre": nombre,          
    "apellido": apellido,
    "fecha":fecha,
    "foto":foto
};
    
   forms.push(form);
   localStorage.setItem('froms', JSON.stringify(forms)); 
    
    
}


/*AQUI SE GUARDA LOS DATOS DEL LUGAR*/




var registrar_lugar = function(){
     
    
  var negocio = document.getElementById("negocio").value;
    var email = document.getElementById("email").value;
    var web = document.getElementById("web").value;
   var telefono = document.getElementById("telefono").value;                         var categoria = document.getElementById("categoria").value;
    var provincia = document.getElementById("provincia").value;
   var direccion = document.getElementById("direccion").value;
     var descripcion = document.getElementById("descripcion").value;
  var foto = document.getElementById("foto").value;
                
    console.log(telefono + "   " + email);
    alert('click ' + descripcion + "   " + direccion);

 saveToLocalStorageformslugares(negocio,email,web,telefono, categoria,provincia,direccion,descripcion,foto);

}


var lugares = JSON.parse(localStorage.getItem('lugares'));

if (!lugares) {
	lugares = [];
}


function saveToLocalStorageformslugares( negocio,email,web,telefono, categoria,provincia,direccion,descripcion,foto) {
    
    
    var lugar ={
      
    "negocio" : negocio,
    "email" : email,
    "web" : web,
   "telefono" : telefono,                                                             "categoria" : categoria,
   "provincia" : provincia,
    "direccion" : direccion,
   "descripcion" : descripcion,
   "foto" : foto
    
};    
    
  
    alert('click ' + descripcion + "   " + direccion);  
  
    
    
       lugares.push(lugar);
   localStorage.setItem('lugares', JSON.stringify(lugares)); 
   
    
    
    alert('click ' + descripcion + "   " + direccion);  
    
}

    

    









