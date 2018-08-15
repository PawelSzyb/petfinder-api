import fetchJsonp from "fetch-jsonp";

const petForm = document.querySelector("#pet-form");

petForm.addEventListener("submit", fetchAnimals);

// const API_KEY = "93562c468eded97d86bb4d3357e97b94";

// Fetch animals from api
function fetchAnimals(e) {
  e.preventDefault();

  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  // API request
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=93562c468eded97d86bb4d3357e97b94&animal=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: "callback"
    }
  )
    .then(res => res.json())
    .then(data => showPets(data.petfinder.pets.pet))
    .catch(err => console.log(err));
}

// Displat pets array
function showPets(pets) {
  const results = document.querySelector("#results");
  results.innerHTML = "";

  pets.map(pet => {
    console.log(pet);
    results.innerHTML += `
      <div class="row">
        <div class="col s6">
          <h4>${pet.name.$t} (${pet.age.$t})</h4>
          <p>${pet.breeds.breed.$t}</p>
          <p></p>
        </div>
        <div class="col s6">

        </div>
      </div>
    `;
  });
}

// Materialize init select

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});
