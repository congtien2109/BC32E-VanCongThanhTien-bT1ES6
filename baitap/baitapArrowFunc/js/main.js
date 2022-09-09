const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermilion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];
let loadColor = () =>{
    let html = '';
    for (let i = 0; i < colorList.length; i++ ){
        html += "<button class='color-button " + colorList[i] + "'></button>";
    }
    document.getElementById('colorContainer').innerHTML = html;
};
loadColor();
let buttonColor = document.getElementsByClassName('color-button');
for (let i = 0; i < buttonColor.length; i++){
    buttonColor[i].onclick = function () {
        doiMau(colorList[i], i);
    };
}
function doiMau(color, ab){
    for (let i = 0; i < buttonColor.length; i++){
        buttonColor[i].classList.remove('active');

    }
    buttonColor[ab].classList.add('active');
    document.querySelector('#house').className = 'house ' + color;
}

