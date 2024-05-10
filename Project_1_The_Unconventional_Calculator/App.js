const input=document.getElementById('number');
const addbtn=document.getElementById('add');
const minusbtn=document.getElementById('minus');
const multibtn=document.getElementById('multi');
const dividebtn=document.getElementById('divide');

const calcuation_description=document.getElementById("d_result");
const currentresultoutput=document.getElementById("c_result");
let result=0;

function output(result,text){
    calcuation_description.value=text;
    currentresultoutput.value=result;
}
function add(){
    let current_result=parseInt(input.value);
    let cal_desc=`${result} + ${current_result}`;
    result=result + current_result;
    output(result,cal_desc);
}
function minus(){
    let current_result=parseInt(input.value);
    let cal_desc=`${result} - ${current_result}`;
    result=result - current_result;
    output(result,cal_desc);
}
function multi(){
    if(result==0){
        result=1; 
    }
    let current_result=parseInt(input.value);
    let cal_desc=`${result} * ${current_result}`;
    result=result * current_result;
    output(result,cal_desc);
}
function divide(){
    let current_result=parseInt(input.value);
    let cal_desc=`${result} / ${current_result}`;
    result=result / current_result;
    output(result,cal_desc);
}


addbtn.addEventListener('click',add);
minusbtn.addEventListener('click',minus);
multibtn.addEventListener('click',multi);
dividebtn.addEventListener('click',divide);
