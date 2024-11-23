(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelectorAll('.score');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        score1: 0,
        score2: 0,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    /* //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    startGame.addEventListener("click", function(){

        gameControl.innerHTML = '<h2>Game Start!</h2>';
        gameControl.innerHTML += '<button id="quit">Quit</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        gameData.index = Math.round(Math.random());

        //console.log(gameData.index);
        //console.log('set up the turn!');
        setUpTurn();
    });


    function setUpTurn(){
        game.innterHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll!</button>';
        document.getElementById('roll').addEventListener('click',function(){

            //console.log('roll the dice!');
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            game.innerHTML += '<p></p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button>  OR  <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        score.forEach(score =>{
            if(gameData.score[gameData.index] > gameData.gameEnd){
                game.innerHTML = `${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = 'Start a New Game?';
            }
            else{
                score1.innerHTML = `${gameData.score[0]}`;
                score2.innerHTML =`${gameData.score[1]}`;;
            }
        });
    }

    function showCurrentScore(){
        score.forEach(score =>{
            score1.innerHTML = `${gameData.score[0]}`;
            score2.innerHTML =`${gameData.score[1]}`;
        });
    }


    document.querySelector('.open').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }

    });

})();