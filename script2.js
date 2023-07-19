const btn = document.getElementById('btn');

btn.onclick = function(){
    const color = random_hex_color_code();
    document.body.style.backgroundColor = color;
    document.getElementById("color").textContent = color;
    console.log('sto cliccando')
 }


const random_hex_color_code = () => {
    let hex = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + hex.slice(0, 6);
  };