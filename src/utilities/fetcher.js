// const NewsApiModule = require('newsapi')
// const newsApi = new NewsApiModule('99034a283d4448469e837bf334912d8f')

// newsApi.v2.sources({
//     language: 'en',
//     country: 'in'
//   }).then(response => {
//     console.log(response);
//   });

// newsApi.v2.topHeadlines({
//     source: 'the-hindu',
//     q: 'narendra-modi',
//     language: 'en',
//     country: 'in'
// }).then(resp => {
//     console.log(resp)
//     return resp
// }).catch(err => console.log(err))


fetch('https://gnews.io/api/v4/top-headlines?&token=977a20baa665cb87d0d6bf8979947cbe')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });