const cardDisplay =[
    {
        name: 'audi',
        img: 'Audi-F1-.webp',
    },
    {
        name:'ferrari',
        img: 'ferrari.jpg',
    },
    {
        name:'redbull',
        img: 'redbull.jpg',
    },
    {
        name:'renoultt',
        img: 'renault.jpg',
    },
    {
        name:'McLaren',
        img: 'McLaren.jpg',
    },
    {
        name:'mercedes',
        img:'mercedes.avif',
    },    {
        name: 'audi',
        img: 'Audi-F1-.webp',
    },
        {
        name:'renoultt',
        img: 'renault.jpg',
    },
    {
        name:'McLaren',
        img: 'McLaren.jpg',
    },
    {
        name:'ferrari',
        img: 'ferrari.jpg',
    },
    {
        name:'redbull',
        img: 'redbull.jpg',
    },
    {
        name:'mercedes',
        img:'mercedes.avif',
    }

]

cardDisplay.sort(()=> 0.5 - Math.random()) // random arrangement of card 

let cardChosen =[]
let cardChosenId =[]
const cardsWon = []

// let clickCount = 0

let moveCount = 0

const grid = document.querySelector('#grid')
const score = document.querySelector('#result')
function createBoard(){
    for(let i =0 ; i < cardDisplay.length ; i++){
      const card = document.createElement('img') 
     card.setAttribute('src','blank.jpg')
     card.setAttribute('data-id',i)
     card.addEventListener('click',flipCard)
     grid.appendChild(card);
       
    }
}

createBoard()

function checkMatch(){
    moveCount++
  const box =  document.querySelectorAll('#grid img')
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1]; 

  
//   console.log(box)
//   console.log('check for match')
//     if(optionOneId == optionTwoId){
//        alert("CONGRATULATION !👏 YOU FOUND MATCH") 
//     }



if(cardChosen[0]==cardChosen[1]){
       alert('CONGRATULATION !👏 YOU FOUND MATCH'); 
        box[optionOneId].setAttribute('src','whiteF1.jpg')
        box[optionTwoId].setAttribute('src','whiteF1.jpg')
        box[optionOneId].removeEventListener('click',flipCard)
        box[optionTwoId].removeEventListener('click',flipCard)  
        cardsWon.push(cardChosen)    
    } else{
        box[optionOneId].setAttribute('src','blank.jpg')
        box[optionTwoId].setAttribute('src','blank.jpg')
        alert("Sorry try again 😒")
    }
    score.textContent = cardsWon.length
    cardChosen = []
    cardChosenId =[]

    if(cardsWon.length == cardDisplay.length/2){
       score.textContent = `Congratulation! You Found Them All in ${moveCount} moves 🎉🎉`
        
    }
}


function flipCard(){
    // clickCount++;
   let cardId = this.getAttribute('data-id')
    cardChosen.push(cardDisplay[cardId].name) 
    cardChosenId.push(cardId)
    console.log(cardChosen);
      console.log(cardChosenId);
   this.setAttribute('src',cardDisplay[cardId].img)
   if(cardChosen.length === 2){
    setTimeout(checkMatch,500)
   }
   
}
