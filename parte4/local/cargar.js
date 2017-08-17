

function loadFromLocalStorage() {
    
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");

    
    
                  alert(users);
               // if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                //}
                  
         
         
                 alert(users);

                // Draw TR from TBODY
                gridBody.innerHTML = '';
                
                users.forEach(function (x) {
                    var tr = document.createElement("tr"),
                        tdName = document.createElement("td"),
                        tdJob = document.createElement("td"),
                        tdAge = document.createElement("td"),
                        tdRemove = document.createElement("td"),
                        btnRemove = document.createElement("button");
                    
                    tdName.innerHTML = x.name;
                    tdJob.innerHTML = x.job;
                    tdAge.innerHTML = x.age;
                    
                    btnRemove.textContent = 'Remove';
                    btnRemove.className = 'btn btn-xs btn-danger';
                    btnRemove.addEventListener('click', function(){
                       // removeFromLocalStorage(i);
                    });
                    
                    tdRemove.appendChild(btnRemove);
                    
                    tr.appendChild(tdName);
                    tr.appendChild(tdJob);
                    tr.appendChild(tdAge);
                    tr.appendChild(tdRemove);
                    
                    gridBody.appendChild(tr);
                });
            }