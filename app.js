import {standarMode} from "./app/standard-calc.js";
import menuCalc from "./app/menu-calc.js";
import darkLightModes from "./app/dark&lightMode-calc.js";
import {modesCalc} from "./app/modes-calc.js";
import {modesInteraction} from "./app/modes-interaction.js";






const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    //
    d.querySelectorAll(".calc_settings .user-mode i")[1].style.display = "none";
    
    //    
    standarMode();
    menuCalc();    
    modesCalc();
    modesInteraction();
});
darkLightModes();