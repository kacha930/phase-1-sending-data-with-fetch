// Add your code here

// makes a POST request to /users with a name and email
function submitData(name, email){
    return fetch('http://localhost:3000/users',
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({name, email})  
        })

        //andles the POST request response, retrieves the new id value and appends it to the DOM
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.body.innerHTML += data.id;
        })

        //handles a failed POST request using catch, appends the error message to the DOM
        .catch(error => {
            document.body.innerHTML += error.message;
        });
    
}
