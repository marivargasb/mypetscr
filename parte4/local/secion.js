
var entrar = function(){
    
    alert('entrando');

    var emailLogin = document.getElementById("emailLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;
 
                

      alert('entrando' + "  "  + emailLogin + " "  + passwordLogin);
    saveToLocalStorage( emailLogin,passwordLogin);

}






var localusers = JSON.parse(localStorage.getItem('localusers'));

if (!localusers) {
	localusers = [];
}


function saveToLocalStorage( emailLogin,passwordLogin) {
    
     alert('entrando' + "  "  + emailLogin + " "  + passwordLogin);                      
    
	var localuser = {

  "emailLogin": emailLogin,
  "passwordLogin":  passwordLogin

	};
    
     alert('entrando' + "  "  + emailLogin + " "  + passwordLogin);
    
	localusers.push(localuser);

	localStorage.setItem('localusers', JSON.stringify(localusers));
	//loadlocalusers();
    
   // login_user(localusers);
    
}