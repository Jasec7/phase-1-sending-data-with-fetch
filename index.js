// Add your code here

function submitData(name, email) {
    const data = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        console.log(`Response Status: ${response.status}`);
        return response.json();
      })
      .then(function (object) {
        console.log(object);
        
        document.body.innerHTML += `<p>${object.id}</p>`;
      })
      .catch(function (error) {
        alert("Network Error: Please check your connection");
        console.log(error.message);
        
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  