console.log('hello')
var arr=[
  {
    front: 'What event started the first world-war?',
  back: 'The Assassination of Archduke Franz Ferdinand'
  },
  {
  front: 'Who assassinated the Archduke?',
  back: 'Gavrilo Princip'
  },
  {
  front: '3+3',
  back: 6
  },
  {
  front: '4+4',
  back: 8
  },
  {
  front: '5+5',
  back: 10
  },
  {
  front: '6+6',
  back: 12
  },
  {
  front: '7+7',
  back: 14
  },
 {
  front: '8+8',
  back: 16
  }
]
// add front to flash card
const cards = $('.card')
for (let i = 0; i < cards.length; i++){ 
cards[i].innerHTML= arr[i].front
}

// flip to back
 for (let i = 0; i < cards.length; i++) {
 console.log('Hello')
    cards[i].addEventListener('click', function(){
   console.log('Hello')
    cards[i].innerHTML = arr[i].back
    cards[i].style.color='white'
    //when clicked turn card show symbol 
    // if pattern on card is true turn green
    // if pattern is false turn red
    // I want the card to flip 
    // find out how cards flip
  //  $('button').click(function(){
  //     $('.card')[i].toggleClass('flipped');
  //  });

    
   })
  }
