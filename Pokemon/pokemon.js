//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=1;i<155;i++){
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const newImg = document.createElement('img');
    const num = document.createElement('span');
    newImg.src = `${baseURL}${i}.png`;
    num.innerText =`#${i}`;
    container.appendChild(div);
    div.appendChild(newImg);
    div.appendChild(num);
}
