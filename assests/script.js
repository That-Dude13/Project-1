// Search Button
let result = document.getElementById("user-input");
let searchBtn = document.getElementById("search-btn");
let clearBtn = document.getElementById("clear-btn")
//  divElement = document.createElement('div') will use these in JS function to create elements
// textContent = document.createElement('p')
let containerDiv = document.querySelector(".container");
let saveBtn = document.getElementById("save-btn");
let instructionsDiv = document.querySelector(".instructions");



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
    console.log(recipes[0].instructions)
    console.log(recipes.instructions)
    
  containerDiv.innerHTML = "";
  
  
    
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

  //  let olElement = document.getElementById('instructionsList')
  //  olElement.textContent = a;
  var list = document.getElementById('instructionsList')
 list.innerHTML = ""

  
  var info = recipes[0].instructions;
  console.log(info)
  for(var i=0; i< info.length; i++){
      var display_text = (info[i].display_text);
      var entry = document.createElement('li');
      entry.appendChild(document.createTextNode(display_text));
      list.appendChild(entry);
  }


   localStorage.setItem(recipes[0].name, recipes[0].instructions[0].display_text);
    })


    .catch((err) => console.error(err));


 
  
    document.getElementById(result).innerHTML = localStorage.getItem("recipes[0].instructions");
    
  
  
}
  


searchBtn.addEventListener("click", search)
saveBtn.addEventListener("click", localStorage.getItem )




