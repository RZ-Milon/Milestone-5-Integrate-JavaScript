// problem 2:
const colorBlue = document.getElementsByTagName('h2');
for(const h2 of colorBlue){
    h2.style.color = 'blue';
}

// problem 3:
const bgColorChange = document.getElementById('backpack').style.backgroundColor = 'tomato';
// bgColorChange.style.backgroundColor = 'tomato';

// problem 4:
const cardBorderRadius = document.getElementsByClassName('card');
for(const card of cardBorderRadius){
    card.style.borderRadius = '30px';
}

// problem 5:
const btnNone = document.getElementById('btn-none').addEventListener('click', function(event){
    btnNone.style.displayNone = true;
    console.log(btnNone);
})