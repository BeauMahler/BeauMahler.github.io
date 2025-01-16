function init(){

}

// function changeText() {
//     var text = document.getElementById("text");
//     console.log("clicked");
    
//     text.innerHTML = "Button is clicked";
// }

function masculineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine.png";
}

function feminineBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine.png";
}

function neutralBodyType(){
    document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral.png";
}

function heightChanged(){
    var heightSlider = document.getElementById("heightSlider");
    var textare = document.getElementById("slidervalue");
    textare.innerHTML="Value is " + heightSlider.value;
}


function skinColorChanged(){
    var skinColorSlider = document.getElementById("skinColorSlider");
    if(skinColorSlider.value == 1) {document.getElementById("characterbox").style.backgroundColor = '#00AA0A';}
    if(skinColorSlider.value == 2) {document.getElementById("characterbox").style.backgroundColor = '#AA0707';}
    if(skinColorSlider.value == 3) {document.getElementById("characterbox").style.backgroundColor = '#681212';}
    if(skinColorSlider.value == 4) {document.getElementById("characterbox").style.backgroundColor = '#121314';}
}

