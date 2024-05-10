const monster_health=document.getElementById("m_health");
const player_health=document.getElementById("p_health");
const bonus_life=document.getElementById("bonus_life");

const attack=document.getElementById("attack");
const strong_attack=document.getElementById("s_attack");
const heal=document.getElementById("heal");
const showlog=document.getElementById("detail");

function adjustHealthBar(maxlife){
    monster_health.max=maxlife;
    monster_health.value=maxlife;
    player_health.max=maxlife;
    player_health.value=maxlife;
}

function dealMonsterDamage(damage){
    const dealDamage=Math.random()*damage;
    monster_health.value= +monster_health.value-dealDamage;
    return dealDamage;
}
function dealPlayerDamage(damage){
    const dealDamage=Math.random()*damage;
    player_health.value= +monster_health.value-dealDamage;
    return dealDamage;
}
function increasePlayerHealth(healvalue){
    player_health.value= +player_health.value+healvalue;
}
function resetGame(value){
    monster_health.value=value;
    player_health.value=value;
}

function removeBonusLife(){
    bonus_life.parentNode.removeChild(bonus_life);
}
function setPlayerHealth(health){
    player_health.value=health;
}