    // Search Button 
    let result = document.getElementById('user-input');
    let searchBtn = document.getElementById('search-btn')

	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bebcc43ab2msh18ba74d20be3f39p1a5d43jsn8040bebec351',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

function search(){
var searchTerm = result.value

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix='+searchTerm, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error('err'));
}

searchBtn.addEventListener('click',search);

const generateRecipes = (data) => {
	const result = data.results [0]

	const recipeResult = `
		<div class="card">
			<div>
			</div>
			</div>

		</div>
	`


}