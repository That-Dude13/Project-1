// let jokeDiv = document.querySelector(".joke");

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bebcc43ab2msh18ba74d20be3f39p1a5d43jsn8040bebec351',
		'X-RapidAPI-Host': 'good-quotes.p.rapidapi.com'
	}
};

function search(){
	var quotes = result.quotes; 
}	



	

fetch('https://good-quotes.p.rapidapi.com/tag/food?page=1', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	
	.catch(err => console.error(err));


	function array(quotes, quote) {
		this.quotes = quotes;
		this.quote = quote;

		  console.log( `${this.quotes} on ${this.quotes}`);
		};





// const foodQuote = result.quotes
// console.log(foodQuote)

// var  randomItem = quotes[Math.floor(Math.random()*quotes.length)];
//     let pElement = document.createElement('p')
//     pElement.textContent = randomItem;
//    jokeDiv.appendChild(pElement);

// }
// searchBtn.addEventListener('click', search)