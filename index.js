console.log('hello')
const cards = document.querySelectorAll('.card')
 for (let i = 0; i < cards.length; i++) {
 console.log('Hello')
    cards[i].addEventListener('click', function(){
   console.log('Hello')
    cards[i].innerHTML = i;
    cards[i].style.color='white'
    cards[i].style.color='white'
    //when clicked turn into symbol 
    // if pattern on card is true turn green
    // if pattern is wrong turn red
    // I want the card to flip 
    // find out how cards flip
    $("button").click(function(){
      $("#card").toggleClass("flipped");
    });

    
   })
  }
