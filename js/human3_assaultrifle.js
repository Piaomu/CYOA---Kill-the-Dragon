let butt = "butt",
    magazine = "magazine",
    trigger = "trigger";

const enter = document.querySelector('.enter')
const gunInput = document.querySelector('.gun-input')
const message = document.querySelector('.message')
const container = document.querySelector('.container')

// Play again event listener
container.addEventListener('click', function(e){
  if(e.target.className === 'play-again'){
    location.href = "index.html";
  }
})

// Listen for guess
  enter.addEventListener('click', function(){
    let guess = gunInput.value;

    if (guess == "butt") {
      setMessage(`You grab the gun by the butt. The gun magically springs to life and grabs you by the butt. There's so much butt grabbing. It's madness in here. The gun sensually grabs it's own trigger, gives itself a couple strokes, and explodes, which sends your bowels spewing through the top of your head. YOU DEAD BISH!`)
      
      gunInput.disabled = true;
      gunInput.style.borderColor = 'red';

      enter.value = 'Play Again';
      enter.className.add('play-again');

    } else if (guess == "trigger") {
      setMessage(`Yeah, come on, you should know better. You fire the gun, the barman's corpse flails limp to the floor, and your ass ends up in fantasy prison. Congrats, asshat. YOU LOSE BISH`)

      gunInput.disabled = true;
      gunInput.style.borderColor = 'red';

      enter.value = 'Play Again';
      enter.className.add('play-again');

    } else if (guess == "magazine") {
      setMessage(`You grab the magazine and are suddenly overwhelmed by the feeling that you need to kill yourself. Lucky for you, you have a gun and a loaded magazine in your hands. Congrats on the suicide, bud. YOU DEAD BISH`)

      gunInput.disabled = true;
      gunInput.style.borderColor = 'red';

      enter.value = 'Play Again';
      enter.className.add('play-again');
      

    } else {
      setMessage(`Jesus Christ, can you fucking read? Enter butt, trigger, or magazine.`);
    }

  });

  // Set Message
  function setMessage(msg){
    message.textContent = msg;
  }
  