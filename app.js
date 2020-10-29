const baseURL = "http://numbersapi.com/random?json";

function getOneNumFacts() {
    axios.get(`${baseURL}`)
    .then(data => $("#num-facts").append(`<li>${data.data.text}</li>`))
    .catch(err => console.log(err))
}

function getMoreFacts() {
    const arr = [1, 2, 3, 4];
    axios.get(`http://numbersapi.com/${arr}?json`)
    .then(data => {
        const vals = Object.values(data.data);
        for(val of vals) {
            $("#num-facts").append(`<li>${val}</li>`)
        }
    })
    .catch(err => console.log(err));
}

function oneNumFourFacts() {
    const num = 4;
    let counter = 1;
    while(counter < 5) {
        counter++;
        console.log(counter);
        axios.get(`http://numbersapi.com/${num}?json`)
        .then(data => {
            $("#num-facts").append(`<li>${data.data.text}</li>`);
        })
        .catch(err => console.log(err));
    }
}

$("#num-btn").on('click', getOneNumFacts);
$("#num-4").on("click", getMoreFacts);
$("#1-num-4-fax").on('click', oneNumFourFacts);

let id;

function shuffleDeck() {
    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(data => {
        id = data.data.deck_id;
    })
    .catch(err => console.log(err));
}

function drawCard() {
    axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then(data => {
        console.log(data);
        $("#card").attr("src", data.data.cards[0].image)
    })
    .catch(err => console.log(err));
}

$(document).ready(shuffleDeck);
$("#card-btn").on("click", drawCard);

//so we want to get ALL (151) pokemon names and urls. this is just a very simple for in loop thing

let pokemon;

function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(data => {
        pokemon = data.data.results;
    })
    .catch(err => console.log(err));
}

function threeNums() {
    let counter = 1;
    let nums = [];
    while(counter < 4) {
        nums.push(Math.floor(Math.random() * 151));
        counter++;
    }
    return nums;
}

function pickThree() {
    const arr = threeNums();
    for(num of arr) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(data => {
            $("#poke-div").append(`<div>
            <h4>${data.data.name}</h4>
            <img src=${data.data.sprites.front_default} alt="pokemon">
        </div>`)
            console.log(data);
        })
        .catch(err => console.log(err));
    }
}

$(document).ready(getPokemon);
$('#poke-btn').on("click", pickThree);