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

	fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q='+searchTerm,options)
		.then(response => response.json())
		.then(response =>{
			console.log(response)
		 console.log(response.results[0])
		})
	
		.catch(err => console.error(err))

		

	
}


searchBtn.addEventListener('click',search);
