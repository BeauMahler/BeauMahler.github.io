function init(){
    document.getElementById("characterbox").style.height = "650px";
    heightChanged();
}

var currentBodyType = "neutral"; //init

function masculineBodyType(){
    currentBodyType = "masculine";
    var muscles = document.getElementById("muscleSlider").value;
    if(muscles == 1) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine.png";}
    else if(muscles == 2) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine_M2.png";}
    else {document.getElementById("characterImage").src = "images/prototype_character_MAIN_masculine_M3.png";}
}

function feminineBodyType(){
    currentBodyType = "feminine";
    var muscles = document.getElementById("muscleSlider").value;
    if(muscles == 1) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine.png";}
    else if(muscles == 2) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine_M2.png";}
    else {document.getElementById("characterImage").src = "images/prototype_character_MAIN_Feminine_M3.png";}
}

function neutralBodyType(){
    currentBodyType = "neutral";
    var muscles = document.getElementById("muscleSlider").value;
    if(muscles == 1) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral.png";}
    else if(muscles == 2) {document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral_M2.png";}
    else {document.getElementById("characterImage").src = "images/prototype_character_MAIN_neutral_M3.png";}
}

var currentHeightSliderValue = 7;
var marginTOP = 20;
var currentWeightSliderValue = 5;
var marginLEFT = 0;

function heightChanged(){
    var newHeightSliderValue = document.getElementById("heightSlider").value;
    var currentHeight = document.getElementById("characterbox").clientHeight;

    if(newHeightSliderValue > currentHeightSliderValue) { //bigger 
        var difference = newHeightSliderValue - currentHeightSliderValue; //steps
        newMarginTOP = marginTOP - 30*difference;

        document.getElementById("characterbox").style.height = currentHeight + 50*difference + "px"; //set new height
        document.getElementById("characterbox").style.marginTop = newMarginTOP + "px"; //set new height       
    }
    if(newHeightSliderValue < currentHeightSliderValue){ //smaller
        var difference = currentHeightSliderValue - newHeightSliderValue; //steps
        newMarginTOP = marginTOP + 30*difference;

        document.getElementById("characterbox").style.height = currentHeight - 50*difference + "px"; //set new height
        document.getElementById("characterbox").style.marginTop = newMarginTOP + "px"; //set new height
    }

    currentHeightSliderValue = newHeightSliderValue; 
    marginTOP = newMarginTOP;
}

function weightChanged(){
    var newWeightSliderValue = document.getElementById("weightSlider").value;
    var currentWeight = document.getElementById("characterImage").clientWidth;

    if(newWeightSliderValue > currentWeightSliderValue) { //fatter 
        var difference = newWeightSliderValue - currentWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight + 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+465/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin       
    }
    if(newWeightSliderValue < currentWeightSliderValue){ //thinner
        var difference = currentWeightSliderValue - newWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight - 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+465/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin
    }
    currentWeightSliderValue = newWeightSliderValue; 
}

//var currentMuscleSliderValue = 1;

function musclesChanged(){
    if(currentBodyType == "feminine") {feminineBodyType();}
    else if(currentBodyType == "masculine") {masculineBodyType();}
    else{neutralBodyType();}

    // var newMuscleSliderValue = document.getElementById("muscleSlider").value;
    // var image = document.getElementById("characterImage");
    // var newSrcValue;

    // if(newMuscleSliderValue > currentMuscleSliderValue) { //bigger
    //     var steps = Math.abs(newMuscleSliderValue - currentMuscleSliderValue);

    //     if(steps == 1 && currentMuscleSliderValue == 1){ // none to middle
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png"}
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
    //     }  
    //     else{ //middle or none to max
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M3.png"}  
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M3.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M3.png"}; 
    //     }
    // }
    // if(newMuscleSliderValue < currentMuscleSliderValue){ //smaller
    //     var steps = Math.abs(currentMuscleSliderValue - newMuscleSliderValue);

    //     if(steps == 1 && currentMuscleSliderValue == 3){ //max to middle
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine_M2.png" }
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine_M2.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral_M2.png"};
    //     }
    //     else{ //middle or max to none
    //         if(currentBodyType == "feminine"){ newSrcValue = "images/prototype_character_MAIN_Feminine.png" }
    //         else if(currentBodyType == "masculine"){ newSrcValue = "images/prototype_character_MAIN_masculine.png"}
    //         else { newSrcValue = "images/prototype_character_MAIN_neutral.png"};
    //     }   
    // }

    // image.src = newSrcValue;
    // currentMuscleSliderValue = newMuscleSliderValue;
}

function skinColorChanged(){
    var skinColorSlider = document.getElementById("skinColorSlider");
    if(skinColorSlider.value == 1) {document.getElementById("characterImage").style.backgroundColor = ' #ffe5c8';}
    if(skinColorSlider.value == 2) {document.getElementById("characterImage").style.backgroundColor = ' #ffdabe';}
    if(skinColorSlider.value == 3) {document.getElementById("characterImage").style.backgroundColor = ' #ffceb4';}
    if(skinColorSlider.value == 4) {document.getElementById("characterImage").style.backgroundColor = ' #ffc3aa';}
    if(skinColorSlider.value == 5) {document.getElementById("characterImage").style.backgroundColor = ' #f0b8a0';}
    if(skinColorSlider.value == 6) {document.getElementById("characterImage").style.backgroundColor = ' #e9b78a';}
    if(skinColorSlider.value == 7) {document.getElementById("characterImage").style.backgroundColor = ' #e1ac96';}
    if(skinColorSlider.value == 8) {document.getElementById("characterImage").style.backgroundColor = ' #d2a18c';}
    if(skinColorSlider.value == 9) {document.getElementById("characterImage").style.backgroundColor = ' #c39582';}
    if(skinColorSlider.value == 10) {document.getElementById("characterImage").style.backgroundColor = ' #b48a78';}
    if(skinColorSlider.value == 11) {document.getElementById("characterImage").style.backgroundColor = ' #c5845c';}
    if(skinColorSlider.value == 12) {document.getElementById("characterImage").style.backgroundColor = ' #a57e6e';}
    if(skinColorSlider.value == 13) {document.getElementById("characterImage").style.backgroundColor = ' #967264';}
    if(skinColorSlider.value == 14) {document.getElementById("characterImage").style.backgroundColor = ' #87675a';}
    if(skinColorSlider.value == 15) {document.getElementById("characterImage").style.backgroundColor = ' #785c50';}
    if(skinColorSlider.value == 16) {document.getElementById("characterImage").style.backgroundColor = ' #695046';}
    if(skinColorSlider.value == 17) {document.getElementById("characterImage").style.backgroundColor = ' #5a453c';}
    if(skinColorSlider.value == 18) {document.getElementById("characterImage").style.backgroundColor = ' #4b3932';}
    if(skinColorSlider.value == 19) {document.getElementById("characterImage").style.backgroundColor = ' #593b2b';}
    if(skinColorSlider.value == 20) {document.getElementById("characterImage").style.backgroundColor = ' #3c2e28';}
}

function saveValues(){
    sessionStorage.setItem("screen1Height", document.getElementById("characterbox").style.height);
    sessionStorage.setItem("screen1marginTOP", document.getElementById("characterbox").style.marginTop);
    sessionStorage.setItem("screen1marginLEFT", document.getElementById("characterImage").style.marginLeft);
    sessionStorage.setItem("screen1WidthImg", document.getElementById("characterImage").style.width);
    sessionStorage.setItem("screen1WidthBox", document.getElementById("characterbox").style.width);
    sessionStorage.setItem("screen1Img", document.getElementById("characterImage").src);
    sessionStorage.setItem("screen1Skincolor", document.getElementById("characterImage").style.backgroundColor);
    sessionStorage.setItem("screen1Name", document.getElementById("nameField").value);

    // console.log("SAVED. height: " + screen1_height);
    // console.log("width:" + screen1_width);
    // console.log("src: " + screen1_img);
    // console.log("color " +screen1_skincolor);      
}   

function loadFaceScreen(){
    // console.log("RECEIVED. height: " + getHeight);
    // console.log("width:" + getWidth);
    // console.log("src: " + getSrc);
    // console.log("color " +getColor);

    var charBox = document.getElementById("characterbox2");
    var charImg = document.getElementById("characterImage2");

    charBox.style.height = sessionStorage.getItem('screen1Height');
    charBox.style.width = sessionStorage.getItem('screen1WidthBox');
    charImg.style.width = sessionStorage.getItem('screen1WidthImg');
    charImg.src = sessionStorage.getItem('screen1Img');
    charBox.style.marginTop = sessionStorage.getItem('screen1marginTOP');
    charImg.style.marginLeft = sessionStorage.getItem('screen1marginLEFT');
    charImg.style.backgroundColor = sessionStorage.getItem('screen1Skincolor');      
}

function loadfinalScreen() {
    document.getElementById("nameTag").innerHTML = sessionStorage.getItem('screen1Name');
}


const addStyles = (el, styles) => Object.assign(el.style, styles);

function eyesChosen(eyeNumber){
    var charBox = document.getElementById("characterbox2");
    var charImg = document.getElementById("characterImage2");
    var topImg = document.getElementById("overlayImg");
    var topImg2 = document.getElementById("overlayImg2");
    if(eyeNumber == 1){
        topImg.src = "images/TEST.png";
        topImg2.src = "images/TEST.png";
    }
    var absoluteX1 = 465 / 2 - 30;
    var absoluteX2 = 465 / 2 ;
    var absoluteY = parseInt(charBox.style.height) / 5;
    // console.log(sessionStorage.getItem('screen1WidthImg'));
    // topImg.style.position = "absolute";

    // topImg.style.top = absoluteY + "px";
    // topImg.style.height = "15px";
    // topImg.style.width = "15px";

    addStyles(topImg, {
        position: "absolute",
        top: absoluteY + "px",
        left: absoluteX1 + "px",
        height: "20px",
        width: "20px"
    });

    addStyles(topImg2, {
        position: "absolute",
        top: absoluteY + "px",
        left: absoluteX2 + "px",
        height: "20px",
        width: "20px"
    });
    // .position = ;
    // topImg2.style.top = absoluteY + "px";
    // topImg2.style.height = "15px";
    // topImg2.style.width = "15px";
    // topImg.style.zIndex = 1;
}

function changeEyeColor() {
    document.getElementById("overlayImg").style.backgroundColor = "green";
}
