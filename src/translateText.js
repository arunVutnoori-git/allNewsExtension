fetch("http://ip-api.com/json")
.then(resp => resp.json())
.then(resp => console.log(resp.country))
.catch(err => console.log(err))