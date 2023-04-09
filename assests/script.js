// Search Button
let result = document.getElementById("user-input");
let searchBtn = document.getElementById("search-btn");
//  divElement = document.createElement('div') will use these in JS function to create elements
// textContent = document.createElement('p')
let containerDiv = document.querySelector(".container");
let saveBtn = document.getElementById("save-btn");
 

// function renderCard(receipe){
// 	document.textContent("this is test content")
// 	console.log
// 	divElement.appendChild(textContent);
// 	containerDiv.appendChild(divElement);

// create html elements and append to card/create card
// clear and render pattern
// }

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bebcc43ab2msh18ba74d20be3f39p1a5d43jsn8040bebec351",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
function search() {
  var searchTerm = result.value;

  fetch(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=" +
      searchTerm,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const recipes = response.results;
      console.log(response);
      console.log(recipes[0].thumbnail_url);
	  console.log(recipes[0].name)
	  console.log(recipes[0].description)
	  console.log(recipes[0].instructions.length)
    console.log(recipes[0].instructions[0])
    console.log(recipes.instructions)
   
    
    let h1Element = document.createElement('h1')
    h1Element.textContent = recipes[0].name;
    containerDiv.appendChild(h1Element)
   
   //  Recipe Picture
    let anchorElement = document.createElement('img')
    anchorElement.src = recipes[0].thumbnail_url 
    containerDiv.appendChild(anchorElement);
   
   //  
   let divElement = document.createElement('div')
   divElement.textContent = recipes[0].description;
   containerDiv.appendChild(divElement);
   
    })

    .catch((err) => console.error(err));

    
}

searchBtn.addEventListener("click", search);


  // Save button local storage
//   $(".saveBtn").on("click", function () {
// ("#name","insructions").val(localStorage.getItem("5","6"));
// });

// Math.floor(Math.random() * 100)


// document
//   .getElementById("search-btn")
//   .addEventListener("click", function (search) {
//     search.preventDefault();

// // Recipe Name
//  let h1Element = document.createElement('h1')
//  h1Element.classList.add('recipes[0].name');
//  containerDiv.appendChild(h1Element)

// //  Recipe Picture
//  let anchorElement = document.createElement('a')
//  anchorElement.classList.add('recipes[0].thumbnail_url');
//  containerDiv.appendChild(anchorElement);

// //  
// let divElement = document.createElement('div')
// divElement.classList.add('recipes[0].description');
// containerDiv.appendChild(divElement);





//   });


// for(i=recipes.instructions; i < 0; i++ ){
//   console.log(recipes(i))
// }