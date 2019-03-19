// Morning CHALLENGE TWO: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If
// they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.

//make a 10 card memory Game
//user must be able to select 2 cards (event listener)
//check if the two cards are a match
//if they are a match keep them flipped over
//if not flip them back over
//game is done once all the cards are matched
document.querySelectorAll(".cards").forEach(function(cards){
    //for each item in the array run this function--
  cards.addEventListener("click", cardClick)
  //"click" is the action, cardClick is the function name
})
//cardClick- the function to explain what happens when a card is clicked
  function cardClick(){
  //.classList- is a property used to return the class name(s) of an element, as a DOM object
    //.classList- is useful to add, remove and toggle CSS classes on an element.
    //.add- Adds one or more class names to an element
    this.classList.add("selected")
    const selected = document.querySelectorAll(".selected")
    //created a variable which holds the array .selected
    const totalSelected = selected.length
    //created a variable to hold the length of array which should be counted when clicked only

    // for every second click
    if(totalSelected === 2){
      //checking the class name indices to determine a match
      if(selected[0].className === selected[1].className){

        selected.forEach(function(sel){
          sel.classList.add("matched")
          sel.classList.remove("selected")//won't be able to keep clicking
        })
      }else{
        //if clicked on and doesnt match remove selected
        selected.forEach(function(sel){
        sel.classList.remove("selected")
        })
        //
        //
      }

    }
    //-----WIN---------
    if(document.querySelectorAll(".matched").length === 12){alert("YOU WIN") //win condition
  }
  }
