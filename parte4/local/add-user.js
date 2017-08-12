window.onload = function () {


document.querySelector("#btn-add").addEventListener('click', function () {
              
 var first_name = document.getElementById("first_name"),
     last_name = document.getElementById("last_name"),
     display_name = document.getElementById("display_name"),
     email3 = document.getElementById("email3"),
     password3 = document.getElementById("password3"),
     password_confirmation = document.getElementById("password_confirmation");
                
 alert('click' + first_name.value  );

 
            })
    
    
}
    
    
    
     
/*



function cargar(){
     
    
 var first_name = "";
 var last_name =  "";  
 var display_name ="";
 var email3 = "";
 var password3 = "";
 var password_confirmation = "";
    
      alert('click' + first_name.value  );
    
     first_name = document.getElementById("first_name"),
     last_name = document.getElementById("last_name"),
     display_name = document.getElementById("display_name"),
     email3 = document.getElementById("email3"),
     password3 = document.getElementById("password3"),
     password_confirmation = document.getElementById("password_confirmation")
    
       alert('click' + first_name.value  );
    
}


 document.getElementById('btn-add').onclick = cargar;


*/








/*




window.onload = function () {                
                var first_name = "";
                 var   last_name = "";  
                 var   display_name = "";
                 var   email3 = "";
                 var    password3 = "";
                var    password_confirmation = "";

     first_name = document.getElementById("first_name").nodeValue;
     last_name = document.getElementById("last_name").nodeValue;
     display_name = document.getElementById("display_name").nodeValue;
     email3 = document.getElementById("email3").nodeValue;
     password3 = document.getElementById("password3").nodeValue;
     password_confirmation = document.getElementById("password_confirmation").nodeValue;


    
var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}
    
    


  function registrar()
{
    
  alert('click'  );
    
    var user = {
                   first_name: first_name.value,
                    last_name: last_name.value,
                   display_name: display_name.value,
                    email3: email3.value,
                   password3:  password3.value,
                    password_confirmation:  password_confirmation.value
                   
                };
                
    users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
    
    
              

    
}

document.getElementById('btn-add').onclick = registrar;


}


function hola()

    {

        alert("Adios!"  );

    }


document.getElementById('btn-add').onclick = hola;



*/





/*
        window.onload = function () {
            var localStorageKeyName = 'data';

            loadFromLocalStorage();

            document.querySelector("#btn-add").addEventListener('click', function () {
                var first_name = document.getElementById("first_name"),
                    last_name = document.getElementById("last_name"),
                    display_name = document.getElementById("display_name"),
                    email3 = document.getElementById("email3"),
                    password3 = document.getElementById("password3"),
                    password_confirmation = document.getElementById("password_confirmation");
              
                
                var user = {
                   first_name: first_name.value,
                    last_name: last_name.value,
                   display_name: display_name.value,
                    email3: email3.value,
                   password3:  password3.value,
                    password_confirmation:  password_confirmation.value
                   
                };
                
                // Clean data
                first_name.value = '';
                last_name.value = '';
                display_name.value = '';
                email3.value = '';
                password3.value = '';
                password_confirmation.value = '';

                // Append to my localStorage
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

               
            }*/
            
            
            
            
 /* registro de usuarios */




/*
 var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}*/

/*
function saveToLocalStorage( first_name,last_name,display_name,email3,password3,password_confirmation) {
	var user = {
	
        
  "first_name": first_name,
  "last_name": last_name,
  "display_name": display_name,
  "email3": email3,
  "password3":  password3,
  "password_confirmation":  password_confirmation
	};
    
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	//loadUsers();
}


function loadUsers() {

	// read users from localstorage
	// loop users
	var user_html = "";
	for (var i = 0; i < users.length; i++) {
		// add users to the table
		var u = users[i];
        
		user_html = user_html + "<tr><td>"+u.username+"</td><td>"+
		u.password+"</td></tr>";
	}

	$('#users_table').html(user_html);

}*/

/*
function go(){
if (document.form.password.value=='password3' && document.form.login.value=='email3'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} 

*/


            
