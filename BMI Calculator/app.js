
const input1=document.getElementById("Height");
const input2=document.getElementById("Weight");
const calculate=document.querySelector("button");
const result=document.getElementById("results");
let bmi=0;

calculate.addEventListener('click',function(){  
    const height=parseInt(input1.value);
    const weight=parseInt(input2.value);
    if(height == '' || height<0 || isNaN(height)){
        result.innerHTML=`Enter valid height ${height}`;
    }
    else if(weight == '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Enter valid weight ${weight}`;
    }else{
        bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=bmi;
    }
    
    console.log(height,weight,bmi);
    
})