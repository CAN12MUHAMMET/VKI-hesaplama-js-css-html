let btn = document.getElementById(`btn1`);
let reset = document.getElementById(`btn2`);
function myfunction(){
    let inputone = document.getElementById(`inputone`).value;
    let inputtwo = document.getElementById(`inputtwo`).value;
    let results = inputone /( Math.pow(inputtwo,2));
    document.getElementById(`number`).innerText=results.toFixed(2);
   
    if(results<0){
       alert("Incorrect operation");
       
    }
    else if(results<18.5){
        document.getElementById(`weight`).innerText="Under Weight";
    }
    else if((results>=18.5) && (results<25)){
        document.getElementById(`weight`).innerText="Normal";
    }
    else if((results>=25)&& (results<30)){
        document.getElementById(`weight`).innerText="Over Weight";
    }
    else if((results>30)&&(results<60)){
        document.getElementById(`weight`).innerText="Obese";
    }
   
}
function myReset(){
    document.getElementById(`number`).innerText="...";
    document.getElementById(`weight`).innerText="Waiting For Response";
    document.getElementById(`inputone`).value="";
    document.getElementById(`inputtwo`).value="";

}