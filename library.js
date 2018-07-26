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

var pokemonOne = document.getElementById('pokemon1');
var pokemonTwo = document.getElementById('pokemon2');
var pokemonThree = document.getElementById('pokemon3');

var infoGrid = document.getElementsByClassName('move');

var trainerRed = document.getElementById('red');

var trainerRedpic = document.getElementById('redTrainer');



trainerRedpic.addEventListener('click', function() {

  loadPokemon('red', 'pikachu');
  loadPokemon('red', 'mewtwo');
  loadPokemon('red', 'rapidash');

  pokemonOne.removeAttribute('style');
  pokemonTwo.removeAttribute('style');
  pokemonThree.removeAttribute('style');


  pokemonOne.style.backgroundColor = '#D76475';
  pokemonTwo.style.backgroundColor = '#D76475';
  pokemonThree.style.backgroundColor = '#D76475';

  trainerRed.classList.remove("blur");
  infoGrid[0].classList.remove("hidden");
  trainerStephanie.classList.add("blur");
  infoGrid[1].classList.add("hidden");
  trainerAsh.classList.add("blur");
  infoGrid[2].classList.add("hidden");

  var pikachuBall = document.getElementById('pikachu-ball');
  pikachuBall.addEventListener('click', function() {
    console.log('this is pikachu')
    pokemonOne.setAttribute('style', 'background-image: url("images/pikachu_lightning.gif")');
    console.log('this is pikachu')
    // pokemonOne.style.backgroundImage = "url('images/pikachu_lightning.gif')";
    pokemonOne.style.backgroundSize = '100% 100%';
  });

  var mewtwo = document.getElementById('mewtwo-ball');
  mewtwo.addEventListener('click', function() {
    pokemonTwo.style.backgroundImage = "url('images/mewtwo_fire.gif')"
    pokemonTwo.style.backgroundSize = '100% 100%';
  });

  var rapidash = document.getElementById('rapidash-ball');
  rapidash.addEventListener('click', function() {
    pokemonThree.style.backgroundImage = "url('images/rapidash.gif')"
    pokemonThree.style.backgroundSize = '100% 100%';
  });
});

// var pikachuBall = document.getElementById('pikachu-ball');
// pikachuBall.addEventListener('click', function() {
//   pokemonOne.setAttribute('style', 'background-image: url("images/pikachu_lightning.gif")');
//   // pokemonOne.style.backgroundImage = "url('images/pikachu_lightning.gif')";
//   pokemonOne.style.backgroundSize = '100% 100%';
// });

var trainerStephanie = document.getElementById('stephanie');

var trainerStephaniepic= document.getElementById('lassTrainer');

trainerStephaniepic.addEventListener('click', function() {
  loadPokemon('stephanie', 'type-null');
  loadPokemon('stephanie', 'palkia');
  loadPokemon('stephanie', 'barbaracle');

  pokemonOne.removeAttribute('style');
  pokemonTwo.removeAttribute('style');
  pokemonThree.removeAttribute('style');

  pokemonOne.style.backgroundColor = '#4fd7f4';
  pokemonTwo.style.backgroundColor = '#4fd7f4';
  pokemonThree.style.backgroundColor = '#4fd7f4';

  trainerStephanie.classList.remove("blur");
  infoGrid[1].classList.remove("hidden");
  trainerAsh.classList.add("blur");
  infoGrid[2].classList.add("hidden");
  trainerRed.classList.add("blur");
  infoGrid[0].classList.add("hidden");

  var typeNull = document.getElementById('type-null-ball');
  typeNull.addEventListener('click', function() {
    pokemonOne.style.backgroundImage = "url('images/type-null.gif')"
    pokemonOne.style.backgroundSize = '100% 100%';
  });

  var palkia = document.getElementById('palkia-ball');
  palkia.addEventListener('click', function() {
    pokemonTwo.style.backgroundImage = "url('images/palkia.gif')";
    pokemonTwo.style.backgroundSize = '100% 100%';
  });

  var barbaracle = document.getElementById('barbaracle-ball');
  barbaracle.addEventListener('click', function() {
    pokemonThree.style.backgroundImage = "url('images/barbaracle.gif')";
    pokemonThree.style.backgroundSize = '100% 100%';
  });
});

var trainerAsh = document.getElementById('ashCatchNone');

var trainerAshPic = document.getElementById('ashTrainer')

trainerAshPic.addEventListener('click', function() {
  loadPokemon('ash', 'jolteon');
  loadPokemon('ash', 'primeape');
  loadPokemon('ash', 'scizor');

  pokemonOne.removeAttribute('style');
  pokemonTwo.removeAttribute('style');
  pokemonThree.removeAttribute('style');

  pokemonOne.style.backgroundColor = '#00e68a';
  pokemonTwo.style.backgroundColor = '#00e68a';
  pokemonThree.style.backgroundColor = '#00e68a';

  trainerAsh.classList.remove("blur");
  infoGrid[2].classList.remove("hidden");
  trainerStephanie.classList.add("blur");
  infoGrid[1].classList.add("hidden");
  trainerRed.classList.add("blur");
  infoGrid[0].classList.add("hidden");

  var jolteon = document.getElementById('jolteon-ball');
  jolteon.addEventListener('click', function() {
    pokemonOne.style.backgroundImage = "url('images/jolteon_shock.gif')"
    pokemonOne.style.backgroundSize = '100% 100%';
  });

  var primeape = document.getElementById('primeape-ball');
  primeape.addEventListener('click', function() {
    pokemonTwo.style.backgroundImage = "url('images/primeape_punching.gif')";
    pokemonTwo.style.backgroundSize = '100% 100%';
  });

  var scizor = document.getElementById('scizor-ball');
  scizor.addEventListener('click', function() {
    pokemonThree.style.backgroundImage = "url('images/scizor.gif')";
    pokemonThree.style.backgroundSize = '100% 100%';
  });
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

      p_arr = [pokemon.name, 'HP: ' + pokemon.hp, 'Attack: ' + pokemon.atk, 'Defense: ' + pokemon.def, 'Abilities: ' + pokemon.abilities];

      console.log(abilityArray)


      if (pokemonName == "pikachu" || pokemonName == "jolteon" || pokemonName == "type-null") {
        for (obj in p_arr) {
          var stats = document.getElementsByClassName('pokemon1-stats')
          stats[obj].innerHTML = p_arr[obj];

        }
      } else if (pokemonName == "mewtwo" || pokemonName == "primeape" || pokemonName == "palkia") {
        for (obj in p_arr) {
          var stats = document.getElementsByClassName('pokemon2-stats')
          stats[obj].innerHTML = p_arr[obj];

        }
      } else if (pokemonName == "rapidash" || pokemonName == "scizor" || pokemonName == "barbaracle") {
        for (obj in p_arr) {
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
  } else if (trainer == 'stephanie' && stephaniesPokemon.length !== 3) {
    stephaniesPokemon.push(pokemon);
  } else if (trainer == 'ash' && ashsPokemon.length !== 3) {
    ashsPokemon.push(pokemon);
  }

}
