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

document.getElementById('red').addEventListener('mouseover',function() {
    loadPokemon('red', 'pikachu');
    loadPokemon('red', 'mewtwo');
    loadPokemon('red', 'rapidash');
})

document.getElementById('stephanie').addEventListener('mouseover',function() {
    loadPokemon('stephanie', 'type-null');
    loadPokemon('stephanie', 'palkia');
    loadPokemon('stephanie', 'barbaracle');
})

document.getElementById('ashCatchNone').addEventListener('mouseover',function() {
    loadPokemon('ash', 'jolteon');
    loadPokemon('ash', 'primeape');
    loadPokemon('ash', 'scizor');
})

var pikachuBall = document.getElementById('pikachu-ball');
pikachuBall.addEventListener('click', function() {
  firstPokeBackground = document.getElementById('pokemon1')
  firstPokeBackground.style.backgroundImage = "url('images/pikachu_lightning.gif')"
  firstPokeBackground.style.backgroundSize = '100% 100%';
});

var mewtwo = document.getElementById('mewtwo-ball');
mewtwo.addEventListener('click', function() {
  secondPokeBackground = document.getElementById('pokemon2')
  secondPokeBackground.style.backgroundImage = "url('images/mewtwo_fire.gif')"
  secondPokeBackground.style.backgroundSize = '100% 100%';
});

var rapidash = document.getElementById('rapidash-ball');
rapidash.addEventListener('click', function() {
  thirdPokeBackground = document.getElementById('pokemon3')
  thirdPokeBackground.style.backgroundImage = "url('images/rapidash.gif')"
  thirdPokeBackground.style.backgroundSize = '100% 100%';
});

var typeNull = document.getElementById('type-null-ball');
typeNull.addEventListener('click', function() {
  firstPokeBackground.style.backgroundImage = "url('images/type-null.gif')"
  firstPokeBackground.style.backgroundSize = '100% 100%';
});

var palkia = document.getElementById('palkia-ball');
palkia.addEventListener('click', function() {
  secondPokeBackground.style.backgroundImage = "url('images/palkia.gif')"
  secondPokeBackground.style.backgroundSize = '100% 100%';
});

var barbaracle = document.getElementById('barbaracle-ball');
barbaracle.addEventListener('click', function() {
  thirdPokeBackground.style.backgroundImage = "url('images/barbaracle.gif')"
  thirdPokeBackground.style.backgroundSize = '100% 100%';
});

function loadPokemon(trainer, pokemonName) {
  let pokemon = {
    abilities: []
  };

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let parsedObject = JSON.parse(this.responseText);
      pokemon.name = parsedObject['name'];
      pokemon.hp = parsedObject['stats'][5]['base_stat'];
      pokemon.atk = parsedObject['stats'][4]['base_stat'];
      pokemon.def = parsedObject['stats'][3]['base_stat'];


      let abilityArray = parsedObject['abilities'];
      for (obj in abilityArray) {
        pokemon.abilities.push(abilityArray[obj]['ability']['name']);
      }

      p_arr = [pokemon.name, 'HP: ' + pokemon.hp, 'Attack: '+ pokemon.atk, 'Defense: ' +pokemon.def, 'Abilities: ' +pokemon.abilities];

      console.log(abilityArray)


      if(pokemonName == "pikachu" || pokemonName == "jolteon" || pokemonName =="type-null"){
        for (obj in p_arr){
          var stats = document.getElementsByClassName('pokemon1-stats')
          stats[obj].innerHTML = p_arr[obj];

        }
      }
      else if (pokemonName == "mewtwo" || pokemonName == "primeape" || pokemonName =="palkia") {
        for (obj in p_arr){
          var stats = document.getElementsByClassName('pokemon2-stats')
          stats[obj].innerHTML = p_arr[obj];

        }
      }
      else if(pokemonName == "rapidash" || pokemonName == "scizor" || pokemonName =="barbaracle"){
        for (obj in p_arr){
          var stats = document.getElementsByClassName('pokemon3-stats')
          stats[obj].innerHTML = p_arr[obj];

        }
      }

    }
  };
  xhttp.open("GET", `https://raw.githubusercontent.com/stephanie-vitalherne/data/master/${pokemonName}.json`, true);
  xhttp.send();

  if (trainer == 'red' && redsPokemon.length !== 3) {
    redsPokemon.push(pokemon);
  } else if(trainer == 'stephanie' && stephaniesPokemon.length !== 3) {
    stephaniesPokemon.push(pokemon);
  } else if(trainer == 'ash' && ashsPokemon.length !== 3) {
    ashsPokemon.push(pokemon);
  }

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
function updateScreen(currentPokemon) {
  let statList = document.getElementById('stat-list');
  let listItems = document.getElementsByClassName('list-item');
  let pokedexImage = document.getElementById('pokedex-image');
  let pokedexInfoScreen = document.getElementById('pokedex-info');

  for (obj in allPokemon) {
    if (allPokemon[obj]['name'] == currentPokemon) {
      pokedexInfoScreen.style.display = 'block';

      pokedexImage.src = "images/" + `${currentPokemon}.gif`;
      listItems[0].innerHTML = "Name: " + allPokemon[obj]['name'].toUpperCase();
      listItems[1].innerHTML = "Base Attack: " + allPokemon[obj]['atk'];
      listItems[2].innerHTML = "Base Defense: " + allPokemon[obj]['def'];
      listItems[3].innerHTML = "Base HP: " + allPokemon[obj]['hp'];
      listItems[4].innerHTML = "Abilities: " + allPokemon[obj]['abilities'];

      break;
    }
  }
}
