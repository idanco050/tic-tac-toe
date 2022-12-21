const cellList = document.getElementsByClassName("cell")
let symb ="x";
let numOfTurn = 0;
document.getElementById("player-label")
function cellClicked(id)
{
    console.log(numOfTurn)
    numOfTurn = numOfTurn + 1;
    document.getElementById(id).innerHTML = '<h1 style="color: red; font-size: 60px;">' + symb +  '</h1>'
    if(symb=="x"){
      symb="o";
      document.getElementById("player-label").innerHTML = "O player turn";}
    else{
    symb ="x";
    document.getElementById("player-label").innerHTML = "X player turn";}

    if(numOfTurn === 9)
    {
        if (winnerCheck()){
        numOfTurn = 0;    
        return;
        }
        else{
         document.getElementById("winningMessageText").innerHTML = '<h1 style="color: green;"> no winner!!! </h1>';
         numOfTurn = 0;
        }
    }
    else
    {
        if(winnerCheck())
        numOfTurn = 0;
    }
    
      
}

function winnerCheck()
{
let winner;
if(symb=="x")
      winner="o";
    else
    winner ="x";
if ((cellList[0].innerHTML == cellList[1].innerHTML && cellList[0].innerHTML == cellList[2].innerHTML)||(cellList[3].innerHTML == cellList[4].innerHTML && cellList[3].innerHTML == cellList[5].innerHTML)||(cellList[6].innerHTML == cellList[7].innerHTML && cellList[6].innerHTML == cellList[8].innerHTML)||(cellList[0].innerHTML == cellList[3].innerHTML && cellList[0].innerHTML == cellList[6].innerHTML)||(cellList[1].innerHTML == cellList[4].innerHTML && cellList[1].innerHTML == cellList[7].innerHTML)||(cellList[2].innerHTML == cellList[5].innerHTML && cellList[2].innerHTML == cellList[8].innerHTML)||(cellList[0].innerHTML == cellList[4].innerHTML && cellList[0].innerHTML == cellList[8].innerHTML)||(cellList[2].innerHTML == cellList[4].innerHTML && cellList[2].innerHTML == cellList[6].innerHTML)){
document.getElementById("winningMessageText").innerHTML = '<h1 style="color: green;"> The ' + winner +  ' player wins!!!</h1>';
return true;
}
else
return false;
}
function restartGame()
{
    for(let i =0;i<9;i++)
    {
        cellList[i].innerHTML = '<h1 style="color: white;">' + i + '</h1>'
    }
    document.getElementById("winningMessageText").innerHTML = '<h1></h1>';
}

