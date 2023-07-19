const btn = document.getElementById('btn');

//when button is pressed change background
btn.onclick = function(){
   const color = randomNumber();
   document.body.style.backgroundColor = color;
   document.getElementById("color").textContent = color;
}

function randomNumber(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + r + "," + g + "," + b + ")";
}





