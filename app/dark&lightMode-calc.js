export default function darkLightModes(){
    document.addEventListener("DOMContentLoaded",e=>{

        const d = document,
        ls = localStorage,
        dsp = d.documentElement.style,    
        $calcMenu = d.getElementById("calc-menu"),
        $userBarButtCont = d.querySelector(".calc_settings .calc_settings-interactive"),
        $userModeContainer = d.querySelector(".calc_settings .user-mode"),
        $userModeButt = d.querySelectorAll(".calc_settings .user-mode i");
        
        d.addEventListener("click",e=>{
            //hacer aparecer y desaparecer los iconos del los modos(light&dark)            
            if($calcMenu.classList.contains("noneClass")){
                $userBarButtCont.style.justifyContent = "flex-end";
                $userModeContainer.classList.add("noneClass");
            }else{
                $userBarButtCont.style.justifyContent = "space-between"; 
                $userModeContainer.classList.remove("noneClass");                      
            };
            
            //cambiar entre los iconos de los modos(light&dark) y toda la funcionalidad;    
            if (e.target === $userModeButt[1]){                
                lightMode();
            }else if(e.target === $userModeButt[0]){
                darkMode();                       
            };
        });
    
        const lightMode = ()=>{              
            $userModeButt[1].style.display = "none";
            $userModeButt[0].style.display = "block";      
            dsp.setProperty(`--background-dark`,`#161616`);
            dsp.setProperty("--primary-color","#fd0");
            $calcMenu.style.backgroundColor = "#f7d300";
            d.querySelector("body").style.color = "#000";
            dsp.setProperty("--primary-color_dark","#fd08");
            ls.setItem("theme","light");            
            d.querySelectorAll(".calc-mod_selects *").forEach(e=>e.style.color = "#000");            
        };
                
        const darkMode = ()=>{        
            $userModeButt[0].style.display = "none";
            $userModeButt[1].style.display = "block";
            dsp.setProperty(`--background-dark`,`#252525`);
            dsp.setProperty("--primary-color","#131313");
            $calcMenu.style.backgroundColor = "#202020";
            d.querySelector("body").style.color = "#fff";
            dsp.setProperty("--primary-color_dark","#222222");
            ls.setItem("theme","dark");            
            d.querySelectorAll(".calc-mod_selects *").forEach(e=>e.style.color = "#fff");            
        };
    
        if(ls.getItem("theme") === null){
            ls.setItem("theme","light");
        }else if(ls.getItem("theme") === "light"){
            lightMode();
        }else if(ls.getItem("theme") === "dark"){
            darkMode();
        };
    });
};
