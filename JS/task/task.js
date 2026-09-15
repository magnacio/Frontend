const heading=document.getElementById('heading');
const btn=document.getElementById('btn');
let ison = false

btn.addEventListener('click', () => {
  
    ison = !ison
    if(ison){
        context.style.display = 'block';
        context.style.color = 'red';
        context.style.backgroundColor = 'green';
    } else {
      
        context.style.display = 'none';
        
       
    }
});
