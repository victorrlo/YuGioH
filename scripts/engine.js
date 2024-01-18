const state ={
    score:{
        playerScore:0,
        computerScore:0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        avatar: document.getElementById("card-name"),
        avatar: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        player: document.getElementById("computer-field-card"),
    },
    actions:{
        button: document.getElementById("next-duel"),
    },    
};

const pathImages = "./assets/icons/"

const cardData = [
{
    id:0,
    name: "Dragão Branco de Olhos Azuis",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoserOf: [2],
},
{
    id:1,
    name: "Mago Negro",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoserOf: [2],
},
{
    id:3,
    name: "Dragão Branco de Olhos Azuis",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoserOf: [2],
}
]


function init(){

}

init();