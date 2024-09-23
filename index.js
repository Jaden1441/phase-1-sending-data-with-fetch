// Add your code here
function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })
    
  })
  .then(resopnese => resopnese.json())
  .then(data => { console.log(data)
  document.body.append(data.id)})
  .catch(function (error){
    alert("problem")
    document.body.append(error.message)
  })
} 

