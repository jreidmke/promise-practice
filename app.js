const baseURL = "http://numbersapi.com/random?json";


function getOneNumFacts() {
    axios.get(`${baseURL}`)
    .then(data => $("#num-facts").append(`<li>${data.data.text}</li>`))
    .catch(err => console.log(err))
}

$("#num-btn").on('click', getOneNumFacts)