console.log();

const input=document.getElementById("number");
const button=document.getElementById("button");
const clue=document.getElementById("clue");
const previous=document.getElementById("p_guesses");
const remaining=document.getElementById("r_guesses");

let arr=[];
let guesses=10;
let number=Math.round(Math.random()*100+1);


function guess_number(){  
    let g_num=parseInt(input.value);  
    if(isNaN(g_num) || g_num<0 || g_num>100){
        alert(`Enter a valid number ${g_num}`);
    }
    else if(guesses==1){
        alert(`You lose; your total attempt is over.`);
    }
    else if(g_num>number){
        clue.innerHTML=`Guess smaller number`;
        arr.push(g_num);
        previous.innerHTML=`${arr}`;
        guesses--;
        remaining.innerHTML=guesses;
    }
    else if(g_num<number){
        clue.innerHTML=`Guess larger number`;
        arr.push(g_num);
        previous.innerHTML=`${arr}`;
        guesses--;
        remaining.innerHTML=guesses;
    }
    else{
        alert(`You win! ${g_num}==${number} `);
    }
}

button.addEventListener('click',guess_number);