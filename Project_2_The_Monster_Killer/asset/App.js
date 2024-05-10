const player_attack_value=10;
const monster_attackvalue=15;
const player_strong_attack_value=17;

let maxlife=100;
let currentMonsterHealth=maxlife;
let currentPlayerHealth=maxlife;

adjustHealthBar(maxlife);

function attack_handler(mode){
    let Max_damage;
     if(mode=="ATTACK"){
        Max_damage=player_attack_value;
     }else if(mode=="STRONG ATTACK"){
        Max_damage=player_strong_attack_value;
     }
     const monster_damage=dealMonsterDamage(Max_damage);
    currentMonsterHealth-=monster_damage;
    const  player_damage=dealPlayerDamage(monster_attackvalue);
    currentPlayerHealth-=player_damage;
    if(currentMonsterHealth<=0 && currentPlayerHealth>0){
        alert("you won");
    }else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
        alert("you lost");
    }else if(currentMonsterHealth<=0 && currentPlayerHealth<=0){
        alert("you have a draw");
    }
}
function player_attack(){
    attack_handler("ATTACK");
}
function player_strong_attack(){
    attack_handler("STRONG ATTACK");
}

attack.addEventListener('click',player_attack);
strong_attack.addEventListener('click',player_strong_attack);