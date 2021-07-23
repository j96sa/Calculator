export default function menuCalcFunc(){   
    const d = document,
    $calcMenu = d.getElementById("calc-menu"),
    $calcHeaderInf = d.querySelector(".calc_settings h2");
    

//*************CODIGO DEL MENU DESPLEGABLE DE LA CALCULADORA************** */
    d.addEventListener("click",e=>{
        if (e.target.matches(".calc_settings .fa-bars")){
            $calcMenu.classList.toggle("noneClass");                        
        };
        if (e.target.matches(".calc-menu span")){
            $calcMenu.classList.add("noneClass");
            $calcHeaderInf.innerText = e.target.innerText;
        }
    });
};