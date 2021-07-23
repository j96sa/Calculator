export default function darkLightModes(){
    const d = document,
    $calcMenu = d.getElementById("calc-menu"),
    $userBarButtCont = d.querySelector(".calc_settings .calc_settings-interactive"),
    $userModeContainer = d.querySelector(".calc_settings .user-mode"),
    $userModeButt = d.querySelectorAll(".calc_settings .user-mode i");

    d.addEventListener("click",e=>{
        //hacer aparecer y desaparecer los iconos del lso modos(light&dark)
        if($calcMenu.classList.contains("noneClass")){
            $userBarButtCont.style.justifyContent = "flex-end";
            $userModeContainer.classList.add("noneClass");
        }else{
            $userBarButtCont.style.justifyContent = "space-between"; 
            $userModeContainer.classList.remove("noneClass");                      
        };

        //cambiar entre los iconos de los modos(light&dark)
        if (e.target === $userModeButt[1]){
            $userModeButt[1].style.display = "none";
            $userModeButt[0].style.display = "block";        
        }else if(e.target === $userModeButt[0]){
            $userModeButt[0].style.display = "none";
            $userModeButt[1].style.display = "block";        
        };
    });
};