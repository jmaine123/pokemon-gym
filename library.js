ashsPokemon = [];
stephaniesPokemon = [];
redsPokemon = [];

clickedTrainer = "";

class Trainer {

  constructor(name) {
    this.name = name;

    if (name == "ash") {
      this.pokemon = ashsPokemon;
    } else if (name == "stephanie") {
      this.pokemon = stephaniesPokemon;
    } else if (name == "red") {
      this.pokemon = redsPokemon;
    }
  }

}

var pikachuBall = document.getElementById('pikachu-ball');
pikachuBall.addEventListener('click', function() {
  loadPokemon();
});

function loadPokemon(trainer, pokemonName) {
  let pokemon = {
    abilities:[]
  };

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let parsedObject = JSON.parse(this.responseText);
      console.log(parsedObject);
      pokemon.name = parsedObject['name'];
      pokemon.hp = parsedObject['stats'][5]['base_stat'];
      pokemon.atk = parsedObject['stats'][4]['base_stat'];
      pokemon.def = parsedObject['stats'][3]['base_stat'];

      let abilityArray = parsedObject['abilities'];
      for (obj in abilityArray) {
        pokemon.abilities.push(abilityArray[obj]['ability']['name']);
      }

      alert('Data Loaded');

    }
  };
  xhttp.open("GET", `https://raw.githubusercontent.com/stephanie-vitalherne/data/master/${pokemonName}.json`, true);
  xhttp.send();
}



// trainer = new Trainer('red');
//
// function showPokemon(trainerName) {
//   clickedPokemon = pkname;
//
//   let pokedexInfoScreen = document.getElementById('pokedex-info');
//   pokedexInfoScreen.style.display = 'none';
//
//   newPokemon = {
//     abilities: []
//   };
//
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       let parsedObject = JSON.parse(this.responseText);
//       console.log(parsedObject);
//       newPokemon.name = parsedObject['name'];
//       newPokemon.hp = parsedObject['stats'][5]['base_stat'];
//       newPokemon.atk = parsedObject['stats'][4]['base_stat'];
//       newPokemon.def = parsedObject['stats'][3]['base_stat'];
//
//       let abilityArray = parsedObject['abilities'];
//       for (obj in abilityArray) {
//         newPokemon.abilities.push(abilityArray[obj]['ability']['name']);
//       }
//
//       alert('Data Loaded');
//
//     }
//   };
//   xhttp.open("GET", `https://raw.githubusercontent.com/stephanie-vitalherne/data/master/${pkname}.json`, true);
//   xhttp.send();
//
//   allPokemon.push(newPokemon);
//   console.log(allPokemon);
// }
//
// function updateScreen(currentPokemon) {
//   let statList = document.getElementById('stat-list');
//   let listItems = document.getElementsByClassName('list-item');
//   let pokedexImage = document.getElementById('pokedex-image');
//   let pokedexInfoScreen = document.getElementById('pokedex-info');
//
//   for (obj in allPokemon) {
//     if (allPokemon[obj]['name'] == currentPokemon) {
//       pokedexInfoScreen.style.display = 'block';
//
//       pokedexImage.src = "images/" + `${currentPokemon}.gif`;
//       listItems[0].innerHTML = "Name: " + allPokemon[obj]['name'].toUpperCase();
//       listItems[1].innerHTML = "Base Attack: " + allPokemon[obj]['atk'];
//       listItems[2].innerHTML = "Base Defense: " + allPokemon[obj]['def'];
//       listItems[3].innerHTML = "Base HP: " + allPokemon[obj]['hp'];
//       listItems[4].innerHTML = "Abilities: " + allPokemon[obj]['abilities'];
//
//       break;
//     }
//   }
// }
