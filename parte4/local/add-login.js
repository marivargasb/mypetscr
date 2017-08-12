
    
    



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

