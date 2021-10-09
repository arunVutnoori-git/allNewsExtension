

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=99034a283d4448469e837bf334912d8f')
.then(resp => {
      return resp.json()
}).then(data => console.log(data))
.catch(err => {
  console.log(err.message);
  // return err.message;
});




