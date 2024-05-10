const click_btn=document.getElementById("click");
function start(){
    console.log("Game start");
}

const ROCK="ROCK";
const PAPER="PAPER";
const SCISSOR="SCISSOR";
const default_value="PAPER"

function user(){
    const input=prompt("Enter a value Rock || Paper || Scissor").toUpperCase();
    if(input==ROCK || input==PAPER || input==SCISSOR  && isNaN(input)){
        return input;
    }else if(!isNaN(input)){
       alert(`Enter a valid value. "Rock || Paper || Scissor" `);
        
    }else{
        input=default_value;
        alert("Invalid input");
    }
    
}
function computer(){
    let number=Math.random();
    let value=number<0.37?ROCK:number<0.67?PAPER:SCISSOR;
    return value;
    // if(number<0.37){
    //     return ROCK;
    // }else if(number<0.67){
    //     return PAPER;
    // }else{
    //     return SCISSOR;
    // }
        
}
function game(player_value,computer_value){
       if(player_value==PAPER && computer_value==ROCK || player_value==SCISSOR && computer_value==PAPER || player_value==ROCK && computer_value==SCISSOR){
        console.log(`player value: ${player_value}, computer value: ${computer_value}`);
        alert("You win, Computer loss");
       }else if(player_value==computer_value){
        console.log(`player value: ${player_value}, computer value: ${computer_value}`);
        alert("Game draw, well played");
       }
       else {
        console.log(`player value: ${player_value}, computer value: ${computer_value}`);
        alert("Computer win, You loss");
         }
       }
click_btn.addEventListener('click',function(){
    start();
    let player_value=user();
    let computer_value=computer();
    game(player_value,computer_value);
    

});