const container=document.querySelector(".container")

const careers=["Problem Solver","Python Developer","Full Stack Web Developer","Algorithm intern"]

var careerIdx=0 ; 
var charIdx=0;
updates();
function updates(){
    charIdx++;
    container.innerHTML=`<h1>Hi there! i am ${careers[careerIdx].slice(0,1)==="A" ?"an":"a"} ${careers[careerIdx].slice(0,charIdx)}</h1>`;
    
    
    if(charIdx===careers[careerIdx].length){
        charIdx=0; 
        careerIdx++;    
    }    
    if(careerIdx===careers.length) {
        careerIdx=0;
    }
     
    setTimeout(updates,200);
}

// setInterval(updates,1000);

// ${careers[careerIdx].slice(0,charIdx)}