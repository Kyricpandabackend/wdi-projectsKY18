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
  front: 'Which battle had the most artillery used?',
  back: 'Battle of Verdun'
  },
  {
  front: 'Who is the Kasier?',
  back: 'Wilhelm II'
  },
  {
  front: 'where is the maginot line?',
  back: 'Hunspach, France'
  },
  {
  front: 'Your men have dysentery. Why?',
  back: 'Bad water'
  },
  {
  front: 'WHat year did the war start?',
  back: ' 1914 '
  },
 {
  front: 'What year did the war end?',
  back: '1918'
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
