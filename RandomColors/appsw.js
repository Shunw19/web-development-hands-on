const button =  document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click',function(){
    const newColor = makeRandomColor();
    const nums = getValues(newColor);
   
    if(nums[0]+nums[1]<200){
        h1.style.color = 'white';
    } else (
        h1.style.color = 'black'
    )

    document.body.style.backgroundColor = newColor;
    h1.innerText=newColor;
  
    
    
})

const makeRandomColor = ()=>{
    // create random numbers
    const r = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    // get the random color RBG values
    return `rgb(${r}, ${g}, ${b})`;
}

const getValues = (str)=>{
    return str.match(/\d+/g).map(Number);
}



