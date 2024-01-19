const state ={
    score:{
        playerScore:0,
        computerScore:0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        player: document.getElementById("computer-field-card"),
    },
    actions:{
        button: document.getElementById("next-duel"),
    },    
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
};

const pathImages = "./assets/icons/";

const cardData = [
{
    id:0,
    name: "Dragão Branco de Olhos Azuis",
    type: "Papel",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoserOf: [2],
},
{
    id:1,
    name: "Mago Negro",
    type: "Pedra",
    img: `${pathImages}magician.png`,
    WinOf: [2],
    LoserOf: [0],
},
{
    id:2,
    name: "Exodia",
    type: "Tesoura",
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoserOf: [1],
}
]

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src",  `${pathImages}card-back.png`);
    cardImage.setAttribute("data-id",  IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("mouseover", ()=>{
            drawSelectCard(IdCard);
        });
        cardImage.addEventListener("click", ()=>{
            setCardsField(cardImage.getAttribute("data-id"));
        });
        
    }

  

    return cardImage;
}

async function setCardsField(cardId){
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();
    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[cardId].img;

    let duelResults = await checkDuelResults();

    await updateScore();
    await drawButton(duelResults);
}

async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Tipo: "+cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide){
    for(let i=0; i<cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}


function init(){
    drawCards(5, "player-cards");
    drawCards(5, "computer-cards");
}

init();