
    
    



/*AQUI INICIA EL REGISTRO DE  CLIENTE*/


var registrar_cliente = function(){
    
    
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_confirmation = document.getElementById("password_confirmation").value;
                
    console.log(first_name + "   " + last_name);
    alert('click' + first_name + " " + last_name);
    
    saveToLocalStorage( first_name,last_name,telefono,email,password,password_confirmation);

}






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
  "email3": email,
  "password3":  password,
  "password_confirmation":  password_confirmation
	};
    
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	//loadUsers();
    
    login_user(users);
    
}


/*LOGIN DE TODOS*/




function login_user(users) {
    
    
    var emailLogin = document.getElementById("emailLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;
    
     console.log(emailLogin + "   " + passwordLogin);
    alert('click' + emailLogin + " " +passwordLogin );
    
   alert(users);
    
/*	// read users from localstorage
	// loop users
	var user_html = "";
	for (var i = 0; i < users.length; i++) {
		// add users to the table
		var u = users[i];
        
		user_html = user_html + "<tr><td>"+u.username+"</td><td>"+
		u.password+"</td></tr>";
	}

	$('#users_table').html(user_html);*/

}


/*AQUI INICIA EL REGISTRO DE CLIENTE*/

/*

var registrar_usuario = function(){
    
    
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var display_name = document.getElementById("display_name").value;
    var email3 = document.getElementById("email3").value;
    var password3 = document.getElementById("password3").value;
    var password_confirmation = document.getElementById("password_confirmation").value;
                
    console.log(first_name + "   " + last_name);
         alert('click' + first_name + " " + last_name);
    
}

*/

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
     alert('click ');
    
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

 

}









