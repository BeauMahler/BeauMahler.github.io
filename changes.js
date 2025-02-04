function init(){
    document.getElementById("characterbox").style.height = "650px";
    document.getElementById("muscleSliderDiv").style.display = "block";
    heightChanged();
    document.getElementById("neutralButton").style.border = "2px solid";
}

var currentBodyType = "neutral"; //init

//amputation
var amputatedArmNoProsthetic = false;
var amputatedLegNoProsthetic = false;
var amputatedArmWithProsthetic = false;
var amputatedLegWithProsthetic = false;
var amputatedLegNoProstheticWithWheelchair = false;
var amputatedLegWithProstheticWithWheelchair = false;
var rightSideArm = false;
var rightSideLeg = false;
//low vision & blind
var blindNoGlassesNoCane = false;
var blindWithGlassesNoCane = false;
var blindNoGlassesWithCane = false;
var blindWithGlassesWithCane = false;
//low hearing & deaf
var deafNoHearingAids = false;
var deafWithHearingAids = false;
//dwarfism
var dwarfismNoWheelchair = false;
var dwarfismWithWheelchair = false;
var paralysisNoWheelchair = false;
var paralysisWithWheelchair = false;

//superpowers:
var activateSuperpowerBlind = false;
var activateSuperpowerDeaf = false;
var activateSuperpowerAmputationLeg = false;
var activateSuperpowerAmputationArm = false;
var activateSuperpowerDwarfism = false;
var activateSuperpowerParalysis = false;
var refreshImg = true;
var refreshImg2 = true;

function masculineBodyType(){
    resetButtonBorders(); //remove borders
    document.getElementById("masculineButton").style.border = "2px solid";

    //set var to masculine
    currentBodyType = "masculine";    
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
    if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_masculine.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_masculine_muscle2.png";}
        else {charImg.src = "images/Muscles/character_masculine_muscle3.png";}
    }
    //disabilities present
    if(amputatedArmNoProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_masculine_amputatedArm.png"; }
    if(amputatedArmNoProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_masculine_amputatedArm_blade.png"; }
    if(amputatedArmWithProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_masculine_amputatedArm_prosthetic.png"; }
    if(amputatedArmWithProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_masculine_amputatedArm_blade.png"; }
    if(amputatedLegNoProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_masculine_amputatedLeg.png"; }
    if(amputatedLegNoProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_masculine_amputatedLeg_blade.png"; }
    if(amputatedLegWithProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_masculine_amputatedLeg_prosthetic.png"; }
    if(amputatedLegWithProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_masculine_amputatedLeg_blade.png"; }
    if(blindNoGlassesNoCane){charImg.src="images/LowVision/character_masculine_blind.png"; }
    if(blindWithGlassesNoCane){charImg.src="images/LowVision/character_masculine_glasses.png"; }
    if(blindNoGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_masculine_cane.png"; }
    if(blindNoGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_masculine_cane_swordCane.png"; }
    if(blindWithGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_masculine_glasses_cane.png"; }
    if(blindWithGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_masculine_glasses_cane_swordCane.png"; }
    if(deafNoHearingAids && !activateSuperpowerDeaf){charImg.src="images/MAIN/character_masculine.png"; }
    if(deafWithHearingAids && !activateSuperpowerDeaf){charImg.src="images/LowHearing/character_masculine_hearingAids.png"; }
    if(deafNoHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_masculine_nightvision.png";}
    if(deafWithHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_masculine_hearingAids_nightvision.png"; }
    if(dwarfismNoWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_masculine_dwarfism.png"; }
    if(dwarfismNoWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_masculine_dwarfism_superstrength.png"; }
    if(dwarfismWithWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_masculine_wheelchair_dwarfism.png"; }
    if(dwarfismWithWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_masculine_wheelchair_dwarfism_superstrength.png"; }
    if(paralysisWithWheelchair && !activateSuperpowerParalysis){charImg.src="images/Wheelchairs/character_masculine_wheelchair.png"; }
    if(paralysisWithWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_masculine_wheelchair_telekinesis.png"; }
    if(paralysisNoWheelchair && !activateSuperpowerParalysis){charImg.src="images/MAIN/character_masculine.png"; }
    if(paralysisNoWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_masculine_paralysis_telekinesis.png"; }
    if(amputatedLegNoProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_masculine_wheelchair_amputatedLegLEFT.png"; }
    if(amputatedLegNoProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_masculine_wheelchair_amputatedLegRIGHT.png"; }
    if(amputatedLegWithProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_masculine_wheelchair_amputatedLegLEFT_prosthetic.png"; }
    if(amputatedLegWithProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_masculine_wheelchair_amputatedLegRIGHT_prosthetic.png"; }
}

function feminineBodyType(){
    resetButtonBorders(); //remove borders
    document.getElementById("feminineButton").style.border = "2px solid";

    //set var to neutral
    currentBodyType = "feminine";
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
   // if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_feminine.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_feminine_muscle2.png";}
        else {charImg.src = "images/Muscles/character_feminine_muscle3.png";}
   // }
    //disabilities present
    if(amputatedArmNoProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_feminine_amputatedArm.png"; }
    if(amputatedArmNoProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_feminine_amputatedArm_blade.png"; }
    if(amputatedArmWithProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_feminine_amputatedArm_prosthetic.png"; }
    if(amputatedArmWithProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_feminine_amputatedArm_blade.png"; }
    if(amputatedLegNoProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_feminine_amputatedLeg.png"; }
    if(amputatedLegNoProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_feminine_amputatedLeg_blade.png"; }
    if(amputatedLegWithProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_feminine_amputatedLeg_prosthetic.png"; }
    if(amputatedLegWithProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_feminine_amputatedLeg_blade.png"; }
    if(blindNoGlassesNoCane){charImg.src="images/LowVision/character_feminine_blind.png"; }
    if(blindWithGlassesNoCane){charImg.src="images/LowVision/character_feminine_glasses.png"; }
    if(blindNoGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_feminine_cane.png"; }
    if(blindNoGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_feminine_cane_swordCane.png"; }
    if(blindWithGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_feminine_glasses_cane.png"; }
    if(blindWithGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_feminine_glasses_cane_swordCane.png"; }
    if(deafNoHearingAids && !activateSuperpowerDeaf){charImg.src="images/MAIN/character_feminine.png"; }
    if(deafWithHearingAids && !activateSuperpowerDeaf){charImg.src="images/LowHearing/character_feminine_hearingAids.png"; }
    if(deafNoHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_feminine_nightvision.png";}
    if(deafWithHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_feminine_hearingAids_nightvision.png"; }
    if(dwarfismNoWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_feminine_dwarfism.png"; }
    if(dwarfismNoWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_feminine_dwarfism_superstrength.png"; }
    if(dwarfismWithWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_feminine_wheelchair_dwarfism.png"; }
    if(dwarfismWithWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_feminine_wheelchair_dwarfism_superstrength.png"; }
    if(paralysisWithWheelchair && !activateSuperpowerParalysis){charImg.src="images/Wheelchairs/character_feminine_wheelchair.png"; }
    if(paralysisWithWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_feminine_wheelchair_telekinesis.png"; }
    if(paralysisNoWheelchair && !activateSuperpowerParalysis){charImg.src="images/MAIN/character_feminine.png"; }
    if(paralysisNoWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_feminine_paralysis_telekinesis.png"; }
    if(amputatedLegNoProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_feminine_wheelchair_amputatedLegLEFT.png"; }
    if(amputatedLegNoProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_feminine_wheelchair_amputatedLegRIGHT.png"; }
    if(amputatedLegWithProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_feminine_wheelchair_amputatedLegLEFT_prosthetic.png"; }
    if(amputatedLegWithProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_feminine_wheelchair_amputatedLegRIGHT_prosthetic.png"; }

    
}

function neutralBodyType(){
    resetButtonBorders(); //remove borders
    document.getElementById("neutralButton").style.border = "2px solid";
    //set var to neutral
    currentBodyType = "neutral";
    var charImg = document.getElementById("characterImage");
    //if muscles can appear (no disabilities)
    if(document.getElementById("muscleSliderDiv").style.display == "block"){
        var muscles = document.getElementById("muscleSlider").value;
        if(muscles == 1) {charImg.src = "images/MAIN/character_neutral.png";}
        else if(muscles == 2) {charImg.src = "images/Muscles/character_neutral_muscle2.png";}
        else {charImg.src = "images/Muscles/character_neutral_muscle3.png";}
    }
    //disabilities present
    if(amputatedArmNoProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_neutral_amputatedArm.png"; }
    if(amputatedArmNoProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_neutral_amputatedArm_blade.png"; }
    if(amputatedArmWithProsthetic && !activateSuperpowerAmputationArm){charImg.src="images/Amputation/character_neutral_amputatedArm_prosthetic.png"; }
    if(amputatedArmWithProsthetic && activateSuperpowerAmputationArm){charImg.src="images/Superpowers/Amputation/character_neutral_amputatedArm_blade.png"; }
    if(amputatedLegNoProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_neutral_amputatedLeg.png"; }
    if(amputatedLegNoProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_neutral_amputatedLeg_blade.png"; }
    if(amputatedLegWithProsthetic && !activateSuperpowerAmputationLeg){charImg.src="images/Amputation/character_neutral_amputatedLeg_prosthetic.png"; }
    if(amputatedLegWithProsthetic && activateSuperpowerAmputationLeg){charImg.src="images/Superpowers/Amputation/character_neutral_amputatedLeg_blade.png"; }
    if(blindNoGlassesNoCane){charImg.src="images/LowVision/character_neutral_blind.png"; }
    if(blindWithGlassesNoCane){charImg.src="images/LowVision/character_neutral_glasses.png"; }
    if(blindNoGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_neutral_cane.png"; }
    if(blindNoGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_neutral_cane_swordCane.png"; }
    if(blindWithGlassesWithCane && !activateSuperpowerBlind){charImg.src="images/LowVision/character_neutral_glasses_cane.png"; }
    if(blindWithGlassesWithCane && activateSuperpowerBlind){charImg.src="images/Superpowers/LowVision/character_neutral_glasses_cane_swordCane.png"; }
    if(deafNoHearingAids && !activateSuperpowerDeaf){charImg.src="images/MAIN/character_neutral.png"; }
    if(deafWithHearingAids && !activateSuperpowerDeaf){charImg.src="images/LowHearing/character_neutral_hearingAids.png"; }
    if(deafNoHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_neutral_nightvision.png";}
    if(deafWithHearingAids && activateSuperpowerDeaf){charImg.src="images/Superpowers/Hearing/character_neutral_hearingAids_nightvision.png"; }
    if(dwarfismNoWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_neutral_dwarfism.png"; }
    if(dwarfismNoWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_neutral_dwarfism_superstrength.png"; }
    if(dwarfismWithWheelchair && !activateSuperpowerDwarfism){charImg.src="images/Dwarfism/character_neutral_wheelchair_dwarfism.png"; }
    if(dwarfismWithWheelchair && activateSuperpowerDwarfism){charImg.src="images/Superpowers/Dwarfism/character_neutral_wheelchair_dwarfism_superstrength.png"; }
    if(paralysisWithWheelchair && !activateSuperpowerParalysis){charImg.src="images/Wheelchairs/character_neutral_wheelchair.png"; }
    if(paralysisWithWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_neutral_wheelchair_telekinesis.png"; }
    if(paralysisNoWheelchair && !activateSuperpowerParalysis){charImg.src="images/MAIN/character_neutral.png"; }
    if(paralysisNoWheelchair && activateSuperpowerParalysis){charImg.src="images/Superpowers/Paralysis/character_neutral_paralysis_telekinesis.png"; }
    if(amputatedLegNoProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_neutral_wheelchair_amputatedLegLEFT.png"; }
    if(amputatedLegNoProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_neutral_wheelchair_amputatedLegRIGHT.png"; }
    if(amputatedLegWithProstheticWithWheelchair && !rightSideLeg){charImg.src="images/Wheelchairs/character_neutral_wheelchair_amputatedLegLEFT_prosthetic.png"; }
    if(amputatedLegWithProstheticWithWheelchair && rightSideLeg){charImg.src="images/Wheelchairs/character_neutral_wheelchair_amputatedLegRIGHT_prosthetic.png"; }


}

//flip image
function mirrorImage(charImg){
    if((rightSideArm || rightSideLeg) && !(amputatedLegNoProstheticWithWheelchair || amputatedLegWithProstheticWithWheelchair)) {
        charImg.style.transform = "scaleX(-1)"; 
    } else {
        charImg.style.transform = "none";
    } 
}

function resetButtonBorders(){
    document.getElementById("masculineButton").style.border = "none";
    document.getElementById("feminineButton").style.border = "none";
    document.getElementById("neutralButton").style.border = "none";
}

//check if superpower can be applied
function superpowerSelected() {
    var superpowerBlind = document.getElementById("superpowerBlind");
    var superpowerDeaf = document.getElementById("superpowerDeaf");
    var superpowerAmputation = document.getElementById("superpowerAmputation");
    var superpowerDwarfism = document.getElementById("superpowerDwarfism");
    var superpowerParalysis = document.getElementById("superpowerParalysis");
    var amputationArmRight = document.getElementById("amputationArmRight");
    var amputationLegRight = document.getElementById("amputationLegRight");

    if((blindNoGlassesNoCane || blindNoGlassesWithCane || blindWithGlassesNoCane || blindWithGlassesWithCane) && superpowerBlind.checked){ //blind
        resetSuperpowers();
        if(blindNoGlassesWithCane || blindWithGlassesWithCane){activateSuperpowerBlind = true;}
        else{alert("Please select a cane to make use of this superpower option"); superpowerBlind.checked = false; refreshImg = false;}   
    }
    if((deafNoHearingAids || deafWithHearingAids) && superpowerDeaf.checked){ //deaf
        resetSuperpowers();
        activateSuperpowerDeaf = true;
    }
    if((amputatedArmNoProsthetic || amputatedArmWithProsthetic) && superpowerAmputation.checked){ //amputated arm
        resetSuperpowers();
        amputationArmRight.checked ? rightSideArm = true : rightSideArm = false;
        activateSuperpowerAmputationArm = true;
    }
    if((amputatedLegNoProsthetic || amputatedLegWithProsthetic || amputatedLegNoProstheticWithWheelchair || 
        amputatedLegWithProstheticWithWheelchair) && superpowerAmputation.checked){ //amputated leg
        resetSuperpowers();
        amputationLegRight.checked ? rightSideLeg = true : rightSideLeg = false;
        if(amputatedLegNoProsthetic || amputatedLegWithProsthetic){
            activateSuperpowerAmputationLeg = true;
        }
        else{alert("Please deselect the wheelchair to make use of this superpower option"); superpowerAmputation.checked = false; refreshImg = false;}
    }
    if((dwarfismNoWheelchair || dwarfismWithWheelchair) && superpowerDwarfism.checked){ //dwarfism
        resetSuperpowers();
        activateSuperpowerDwarfism = true;
    }
    if((paralysisNoWheelchair || paralysisWithWheelchair) && superpowerParalysis.checked){ //paralysis
        resetSuperpowers();
        activateSuperpowerParalysis = true;
    }
    //if all unchecked
    if(!(superpowerBlind.checked || superpowerDeaf.checked || superpowerAmputation.checked || superpowerDwarfism.checked || superpowerParalysis.checked)){
        resetSuperpowers();
    } 

    //call bodytype function, which places correct image
    if(refreshImg){
        if(currentBodyType == "neutral"){neutralBodyType(); } 
        else if(currentBodyType == "feminine"){feminineBodyType();}
        else{masculineBodyType();}
    }
    refreshImg = true; //reset

}

function resetSuperpowers(){
    activateSuperpowerBlind = false;
    activateSuperpowerDeaf = false;
    activateSuperpowerAmputationLeg = false;
    activateSuperpowerAmputationArm = false;
    activateSuperpowerDwarfism = false;
    activateSuperpowerParalysis = false;
    rightSideLeg = false
    rightSideArm = false
}

function uncheckSuperpowers(){
    document.getElementById("superpowerBlind").checked = false;
    document.getElementById("superpowerDeaf").checked = false;
    document.getElementById("superpowerAmputation").checked = false;
    document.getElementById("superpowerDwarfism").checked = false;
    document.getElementById("superpowerParalysis").checked = false;
}

function disabilitySelected(){
    //helper variables
    var disSection = document.getElementById("disSection");
    var muscleSliderDiv = document.getElementById("muscleSliderDiv");
    var charImg = document.getElementById("characterImage");
    var disabilitySection = document.getElementById("disabilitySection");
    var randomizeButton = document.getElementById("randomizeButton");
        //helping aids checkboxes
    var helpingAidGlasses = document.getElementById("helpingAidGlasses");
    var helpingAidCane = document.getElementById("helpingAidCane");
    var helpingAidHearingAids = document.getElementById("helpingAidHearingAids");
    var helpingAidProsthetic = document.getElementById("helpingAidProsthetic");
    var helpingAidWheelchair = document.getElementById("helpingAidWheelchair");
        //disability checkboxes
    var caneLabel = document.getElementById("caneLabel");
    var glassesLabel = document.getElementById("glassesLabel");
    var hearingLabel = document.getElementById("hearingLabel");
    var prostheticLabel = document.getElementById("prostheticLabel");
    var wheelchairLabel = document.getElementById("wheelchairLabel");
        //superpower checkboxes
    var blindSuperpowerLabel = document.getElementById("blindSuperpowerLabel");
    var deafSuperpowerLabel = document.getElementById("deafSuperpowerLabel");
    var amputationSuperpowerLabel = document.getElementById("amputationSuperpowerLabel");
    var dwarfismSuperpowerLabel = document.getElementById("dwarfismSuperpowerLabel");
    var paralysisSuperpowerLabel = document.getElementById("paralysisSuperpowerLabel");

    var lowVision = document.getElementById("lowVision");
    var blind = document.getElementById("blind");
    var lowHearing = document.getElementById("lowHearing");
    var deaf = document.getElementById("deaf");
    var dwarfism = document.getElementById("dwarfism");
    var paralysis = document.getElementById("paralysis");
    var amputationArmRight = document.getElementById("amputationArmRight");
    var amputationArmLeft = document.getElementById("amputationArmLeft");
    var amputationLegRight = document.getElementById("amputationLegRight");
    var amputationLegLeft = document.getElementById("amputationLegLeft");

    disabilitySection.onclick = function(){
        uncheckSuperpowers();
        superpowerSelected();
    };

    //change menu
    document.getElementById("none").checked ? disSection.style.display = "none" : disSection.style.display = "block";
    document.getElementById("none").checked ? muscleSliderDiv.style.display = "block" : muscleSliderDiv.style.display = "none";
    document.getElementById("none").checked ? randomizeButton.style.marginTop = "8%" : randomizeButton.style.marginTop = "4%";

    if(lowVision.checked || blind.checked) {//low vision
        //set menu items
        resetMenu();
        glassesLabel.style.display = "block"; 
        caneLabel.style.display = "block";
        blindSuperpowerLabel.style.display = "block";
        //set & update disability variables
        resetValues();
        if(helpingAidCane.checked && helpingAidGlasses.checked){blindWithGlassesWithCane = true;} 
        else if(helpingAidCane.checked){blindNoGlassesWithCane = true;}
        else if(helpingAidGlasses.checked){blindWithGlassesNoCane = true;}
        else {blindNoGlassesNoCane = true;} 
    }
    if(lowHearing.checked || deaf.checked) {
        //set menu items
        resetMenu();
        hearingLabel.style.display = "block";
        deafSuperpowerLabel.style.display = "block";
        //set & update disability variables
        resetValues();        
        if(helpingAidHearingAids.checked){deafWithHearingAids = true;} 
        else {deafNoHearingAids = true;}
    } 
    if(dwarfism.checked) {//dwarfism
        //set menu items
        resetMenu();
        dwarfismSuperpowerLabel.style.display = "block";
        wheelchairLabel.style.display = "block";
        //set & update disability variables
        resetValues();
        if(helpingAidWheelchair.checked){dwarfismWithWheelchair = true;} 
        else {dwarfismNoWheelchair = true;}
    }
    if(paralysis.checked) {
        //set menu items
        resetMenu();
        paralysisSuperpowerLabel.style.display = "block";
        wheelchairLabel.style.display = "block";
        resetValues();
        //set & update disability variables
        if(helpingAidWheelchair.checked){paralysisWithWheelchair = true;} 
        else {paralysisNoWheelchair = true;}
    }
    if(amputationArmRight.checked || amputationArmLeft.checked) {
        //set menu items
        resetMenu();
        prostheticLabel.style.display = "block";
        amputationSuperpowerLabel.style.display = "block"; 
        resetValues();
        //set & update disability variables
        amputationArmRight.checked ? rightSideArm = true : rightSideArm = false;
        if(helpingAidProsthetic.checked){amputatedArmWithProsthetic = true} 
        else {amputatedArmWithProsthetic = false; amputatedArmNoProsthetic = true;}
    }
    if(amputationLegRight.checked || amputationLegLeft.checked){ 
        //set menu items
        resetMenu();
        prostheticLabel.style.display = "block";
        wheelchairLabel.style.display = "block";
        amputationSuperpowerLabel.style.display = "block"; 
        resetValues();
        //set & update disability variables
        amputationLegRight.checked ? rightSideLeg = true : rightSideLeg = false; //left or right
        if(activateSuperpowerAmputationLeg && helpingAidWheelchair.checked){
            alert("Wheelchair option cannot be combined with the blade super power");
            helpingAidWheelchair.checked = false;
            refreshImg2 = false;
            if(helpingAidProsthetic.checked){amputatedLegWithProsthetic = true;} 
            else {amputatedLegNoProsthetic = true;} 
        } else {
            if(helpingAidProsthetic.checked && helpingAidWheelchair.checked){amputatedLegWithProstheticWithWheelchair = true;} 
            else if(helpingAidWheelchair.checked){amputatedLegNoProstheticWithWheelchair = true;}
            else if(helpingAidProsthetic.checked){amputatedLegWithProsthetic = true;} 
            else {amputatedLegWithProsthetic = false; amputatedLegNoProsthetic = true;} 
        }
     }
    if(document.getElementById("none").checked){ resetValues(); resetMenu();} 

    //call bodytype function, which places correct image
    if(refreshImg2){
        if(currentBodyType == "neutral"){neutralBodyType(); } 
        else if(currentBodyType == "feminine"){feminineBodyType();}
        else{masculineBodyType();}
    }
    refreshImg2 = true; //reset

    mirrorImage(charImg); //flip image if needed
}

//reset dynamic menu elements
function resetMenu(){
    //disability checkboxes
    var caneLabel = document.getElementById("caneLabel");
    var glassesLabel = document.getElementById("glassesLabel");
    var hearingLabel = document.getElementById("hearingLabel");
    var prostheticLabel = document.getElementById("prostheticLabel");
    var wheelchairLabel = document.getElementById("wheelchairLabel");
        //superpower checkboxes
    var blindSuperpowerLabel = document.getElementById("blindSuperpowerLabel");
    var deafSuperpowerLabel = document.getElementById("deafSuperpowerLabel");
    var amputationSuperpowerLabel = document.getElementById("amputationSuperpowerLabel");
    var dwarfismSuperpowerLabel = document.getElementById("dwarfismSuperpowerLabel");
    var paralysisSuperpowerLabel = document.getElementById("paralysisSuperpowerLabel");

    glassesLabel.style.display = "none"; 
    caneLabel.style.display = "none";
    blindSuperpowerLabel.style.display = "none";
    hearingLabel.style.display = "none";
    deafSuperpowerLabel.style.display = "none";
    dwarfismSuperpowerLabel.style.display = "none";
    wheelchairLabel.style.display = "none";
    paralysisSuperpowerLabel.style.display = "none";
    prostheticLabel.style.display = "none";
    amputationSuperpowerLabel.style.display = "none"; 
}

//reset disability variable values
function resetValues() {
    amputatedArmNoProsthetic = false; 
    amputatedArmWithProsthetic = false; 
    amputatedLegNoProsthetic = false; 
    amputatedLegWithProsthetic = false; 
    amputatedLegNoProstheticWithWheelchair = false;
    amputatedLegWithProstheticWithWheelchair = false;
    rightSideLeg = false;
    rightSideArm = false;
    blindNoGlassesNoCane = false;
    blindWithGlassesNoCane = false;
    blindNoGlassesWithCane = false;
    blindWithGlassesWithCane = false;
    deafNoHearingAids = false;
    deafWithHearingAids = false;
    dwarfismNoWheelchair = false;
    dwarfismWithWheelchair = false;
    paralysisNoWheelchair = false;
    paralysisWithWheelchair = false;
}

function uncheckHelpingAids(){
    document.getElementById("helpingAidGlasses").checked = false;
    document.getElementById("helpingAidCane").checked = false;
    document.getElementById("helpingAidHearingAids").checked = false;
    document.getElementById("helpingAidProsthetic").checked = false;
    document.getElementById("helpingAidWheelchair").checked = false;
}


function randomize(){
    var none = document.getElementById("none");
    var lowVision = document.getElementById("lowVision");
    var blind = document.getElementById("blind");
    var lowHearing = document.getElementById("lowHearing");
    var deaf = document.getElementById("deaf");
    var dwarfism = document.getElementById("dwarfism");
    var paralysis = document.getElementById("paralysis");
    var amputationArmRight = document.getElementById("amputationArmRight");
    var amputationArmLeft = document.getElementById("amputationArmLeft");
    var amputationLegRight = document.getElementById("amputationLegRight");
    var amputationLegLeft = document.getElementById("amputationLegLeft");

    var helpingAidGlasses = document.getElementById("helpingAidGlasses");
    var helpingAidCane = document.getElementById("helpingAidCane");
    var helpingAidHearingAids = document.getElementById("helpingAidHearingAids");
    var helpingAidProsthetic = document.getElementById("helpingAidProsthetic");
    var helpingAidWheelchair = document.getElementById("helpingAidWheelchair");

    var superpowerBlind = document.getElementById("superpowerBlind");
    var superpowerDeaf = document.getElementById("superpowerDeaf");
    var superpowerAmputation = document.getElementById("superpowerAmputation");
    var superpowerDwarfism = document.getElementById("superpowerDwarfism");
    var superpowerParalysis = document.getElementById("superpowerParalysis");
    var amputationArmRight = document.getElementById("amputationArmRight");
    var amputationLegRight = document.getElementById("amputationLegRight");

    uncheckSuperpowers();
    resetSuperpowers();
    uncheckHelpingAids(); 

    var randomWeight = Math.floor(Math.random()*9+1);
    var randomHeight = Math.floor(Math.random()*7+1);
    var randomMuscles = Math.floor(Math.random()*3+1);
    var randomSkinColor = Math.floor(Math.random()*20+1);
    var randomBodyType = Math.floor(Math.random()*3+1);
    var disabilityOrNot = Math.floor(Math.random()*3);
    var physicalDisability = Math.floor(Math.random()*10+1);
    var superpowerOnOrOff = Math.floor(Math.random()*2); // 0 or 1
    var helpingAidsOne = Math.floor(Math.random()*2); // 0 or 1
    var helpingAidsThree = Math.floor(Math.random()*4); // 0, 1, 2 or 3

    //update slider values
    document.getElementById("heightSlider").value = randomHeight;
    document.getElementById("weightSlider").value = randomWeight;
    document.getElementById("skinColorSlider").value = randomSkinColor;

    if(disabilityOrNot == 0){
        none.checked = true;
        document.getElementById("muscleSlider").value = randomMuscles; //only randomize if no disability
    } else{       
        if(physicalDisability == 1){lowVision.checked = true; //no helping aids on 0
            if(helpingAidsThree == 1){helpingAidGlasses.checked = true;}
            if(helpingAidsThree == 2){helpingAidCane.checked = true;}
            if(helpingAidsThree == 3){helpingAidGlasses.checked = true; helpingAidCane.checked = true;}
            if((helpingAidsThree == 2 || helpingAidsThree == 3) && superpowerOnOrOff == 1){superpowerBlind.checked = true;}
        }
        else if(physicalDisability == 2){blind.checked = true; //no helping aids on 0
            if(helpingAidsThree == 1){helpingAidGlasses.checked = true;}
            if(helpingAidsThree == 2){helpingAidCane.checked = true;}
            if(helpingAidsThree == 3){helpingAidGlasses.checked = true; helpingAidCane.checked = true;}
            if((helpingAidsThree == 2 || helpingAidsThree == 3) && superpowerOnOrOff == 1){superpowerBlind.checked = true;}
        }
        else if(physicalDisability == 3){lowHearing.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidHearingAids.checked = true;}
            if(superpowerOnOrOff == 1){superpowerDeaf.checked = true;}
        }
        else if(physicalDisability == 4){deaf.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidHearingAids.checked = true;}
            if(superpowerOnOrOff == 1){superpowerDeaf.checked = true;}
        }
        else if(physicalDisability == 5){dwarfism.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidWheelchair.checked = true;}
            if(superpowerOnOrOff == 1){superpowerDwarfism.checked = true;}
        }
        else if(physicalDisability == 6){amputationArmRight.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidProsthetic.checked = true;}
            if(superpowerOnOrOff == 1){superpowerAmputation.checked = true;}
        }
        else if(physicalDisability == 7){amputationArmLeft.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidProsthetic.checked = true;}
            if(superpowerOnOrOff == 1){superpowerAmputation.checked = true;}
        }
        else if(physicalDisability == 8){amputationLegRight.checked = true; //no helping aids on 0
            if(helpingAidsThree == 1){helpingAidProsthetic.checked = true;}
            if(helpingAidsThree == 2){helpingAidWheelchair.checked = true;}
            if(helpingAidsThree == 3){helpingAidProsthetic.checked = true; helpingAidWheelchair.checked = true;}
            if((helpingAidsThree == 1 || helpingAidsThree == 0) && superpowerOnOrOff == 1){superpowerAmputation.checked = true;}
        }
        else if(physicalDisability == 9){amputationLegLeft.checked = true; //no helping aids on 0
            if(helpingAidsThree == 1){helpingAidProsthetic.checked = true;}
            if(helpingAidsThree == 2){helpingAidWheelchair.checked = true;}
            if(helpingAidsThree == 3){helpingAidProsthetic.checked = true; helpingAidWheelchair.checked = true;}
            if((helpingAidsThree == 1 || helpingAidsThree == 0) && superpowerOnOrOff == 1){superpowerAmputation.checked = true;}
        }
        else if(physicalDisability == 10){paralysis.checked = true; //no helping aids on 0
            if(helpingAidsOne == 1){helpingAidWheelchair.checked = true;}
            if(superpowerOnOrOff == 1){superpowerParalysis.checked = true;}
        }
    }

    //update image
    heightChanged();
    weightChanged();
    skinColorChanged();
    if(disabilityOrNot == 0){
        disabilitySelected();
        musclesChanged(); //only randomize if no disability
    } else {
        disabilitySelected();
        if(superpowerOnOrOff == 1){
            if((physicalDisability == 1 || physicalDisability == 2) && (helpingAidsThree =! 2 && helpingAidsThree != 3)){
                //do not call superpower function
            }
            else if((physicalDisability == 8 || physicalDisability == 9) && (helpingAidsThree != 0 && helpingAidsThree != 1)){    
                //do not call superpower function 
            }
            else{
                superpowerSelected();
            }
        }
    }

    if(randomBodyType == 1){masculineBodyType();}
    else if(randomBodyType == 2){feminineBodyType();}
    else {neutralBodyType()};
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
    var currentBoxWeight = document.getElementById("characterbox").clientWidth;

    if(newWeightSliderValue > currentWeightSliderValue) { //fatter 
        var difference = newWeightSliderValue - currentWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight + 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+parseInt(currentBoxWeight)/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin       
    }
    if(newWeightSliderValue < currentWeightSliderValue){ //thinner
        var difference = currentWeightSliderValue - newWeightSliderValue; //steps

        document.getElementById("characterImage").style.width = currentWeight - 75*difference + "px"; //set new weight

        var newWidth = parseInt(document.getElementById("characterImage").style.width);
        newMarginLEFT = (-newWidth/2)+parseInt(currentBoxWeight)/2;

        document.getElementById("characterImage").style.marginLeft = newMarginLEFT + "px"; //set new margin
    }
    currentWeightSliderValue = newWeightSliderValue; 
}

function musclesChanged(){
    if(currentBodyType == "feminine") {feminineBodyType();}
    else if(currentBodyType == "masculine") {masculineBodyType();}
    else{neutralBodyType();}
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
    sessionStorage.setItem("screen1marginBOTTOM", document.getElementById("characterbox").style.marginBottom);
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

function saveImg(){
    sessionStorage.setItem("screen1Img", document.getElementById("characterImage2").src); //updated img after face screen
}

function loadFaceScreen(){
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

function loadOutfitScreen(){
    var charBox = document.getElementById("characterbox3");
    var charImg = document.getElementById("characterImage3");

    charBox.style.height = sessionStorage.getItem('screen1Height');
    charBox.style.width = sessionStorage.getItem('screen1WidthBox');
    charImg.style.width = sessionStorage.getItem('screen1WidthImg');
    charImg.src = sessionStorage.getItem('screen1Img');
    charBox.style.marginTop = sessionStorage.getItem('screen1marginTOP');
    charImg.style.marginLeft = sessionStorage.getItem('screen1marginLEFT');
    charImg.style.backgroundColor = sessionStorage.getItem('screen1Skincolor'); 
    
    var checkHeight = parseInt(sessionStorage.getItem('screen1Height'));
}

function loadfinalScreen() {
    var charBox = document.getElementById("characterbox5");
    var charImg = document.getElementById("characterImage5");

    var checkHeight = parseInt(sessionStorage.getItem('screen1Height'));
    if(checkHeight > 600){checkHeight = checkHeight - 40 + "px"};

    //get it centered
    var checkMarginBottom = parseInt(sessionStorage.getItem('screen1marginTOP'));
    if(checkMarginBottom >= 200){checkMarginBottom = checkMarginBottom - 50;}
    else if(checkMarginBottom >= 150){checkMarginBottom = checkMarginBottom - 40;}
    else if(checkMarginBottom >= 130){checkMarginBottom = checkMarginBottom - 30;}
    else if(checkMarginBottom >= 110){checkMarginBottom = checkMarginBottom - 10;}
    else if(checkMarginBottom >= 80){checkMarginBottom = checkMarginBottom + 10;}
    else if(checkMarginBottom >= 50 ){checkMarginBottom = checkMarginBottom + 5;}
   // 50 --> 60                             +10
   // 110 --> 110                           -
   // 170 --> 130                           -40
   // 200 --> 150 (minimaal) KLEINST        -50

    charBox.style.height = checkHeight;
    charBox.style.width = sessionStorage.getItem('screen1WidthBox');
    charImg.style.width = sessionStorage.getItem('screen1WidthImg');
    charImg.src = sessionStorage.getItem('screen1Img');
    charBox.style.marginTop = sessionStorage.getItem('screen1marginTOP');
    charBox.style.marginBottom = checkMarginBottom + "px";
    charImg.style.marginLeft = sessionStorage.getItem('screen1marginLEFT');
    charImg.style.backgroundColor = sessionStorage.getItem('screen1Skincolor'); 

    document.getElementById("nameTag").innerHTML = sessionStorage.getItem('screen1Name');
}

function mustacheClicked(mustache){
    var charImg = document.getElementById("characterImage2");
    let position = charImg.src.search("images/");
    var path = charImg.src.substring(position);

    if(mustache) {
        charImg.src = "mustacheImages/" +  path;
    } 
    else {
        charImg.src = path;
    }
}
