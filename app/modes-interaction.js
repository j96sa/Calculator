export function modesInteraction() {
    const d = document,
    $calc = d.querySelector(".calc");
    
    d.addEventListener("click",()=>{

        if ($calc.classList.contains("modeActive")){
            const $valWork = d.querySelector(".calc_settings h2"),
            $valTransform = d.querySelectorAll(".select_cont select"),
            $valNumber = d.querySelectorAll(".select_cont h2");    
   
            let valConvert,resFinal;

            if ($valWork.innerText === "lenght"){
                switch ($valTransform[0].value) {                                    
                    case "millimeter":
                        valConvert = parseInt($valNumber[0].innerText)/1000;
                    break;
                    case "centimeter":
                        valConvert = parseInt($valNumber[0].innerText)/100;
                    break;
                    case "meter":
                        valConvert = parseInt($valNumber[0].innerText);
                    break;
                    case "kilometer":
                        valConvert = parseInt($valNumber[0].innerText)*1000;
                    break;
                    case "mile":
                        valConvert = parseInt($valNumber[0].innerText)*1609.34;
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "millimeter":
                        resFinal = valConvert*1000;
                    break;
                    case "centimeter":
                        resFinal = valConvert*100;
                    break;
                    case "meter":
                        resFinal = valConvert;
                    break;
                    case "kilometer":
                        resFinal = valConvert/1000;
                    break;
                    case "mile":
                        resFinal = valConvert/1609.34;
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "volume"){
                switch ($valTransform[0].value) {                                    
                    case "milliliters":
                        valConvert = parseInt($valNumber[0].innerText)/1000;
                    break;
                    case "cubic centimeters":
                        valConvert = parseInt($valNumber[0].innerText)/1000;
                    break;
                    case "liters":
                        valConvert = parseInt($valNumber[0].innerText);
                    break;
                    case "cubic meters":
                        valConvert = parseInt($valNumber[0].innerText)*1000;
                    break;                    
                };                
                
                switch ($valTransform[1].value) {                                    
                    case "milliliters":
                        resFinal = valConvert*1000;
                    break;
                    case "cubic centimeters":
                        resFinal = valConvert*1000;
                    break;
                    case "liters":
                        resFinal = valConvert;
                    break;
                    case "cubic meters":
                        resFinal = valConvert/1000;
                    break;                    
                };
                
                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "weight"){
                switch ($valTransform[0].value) {                                    
                    case "milligram":
                        valConvert = parseInt($valNumber[0].innerText)/1000;
                    break;
                    case "gram":
                        valConvert = parseInt($valNumber[0].innerText);
                    break;
                    case "pound":
                        valConvert = parseInt($valNumber[0].innerText)*454;
                    break;
                    case "kilogram":
                        valConvert = parseInt($valNumber[0].innerText)*1000;
                    break;
                    case "ounce":
                        valConvert = parseInt($valNumber[0].innerText)*28.35;
                    break;
                    case "ton":
                        valConvert = parseInt($valNumber[0].innerText)*1000000;
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "milligram":
                        resFinal = valConvert*1000;
                    break;
                    case "gram":
                        resFinal = valConvert;
                    break;
                    case "pound":
                        resFinal = valConvert/454;
                    break;
                    case "kilogram":
                        resFinal = valConvert/1000;
                    break;
                    case "ounce":
                        resFinal = valConvert/28.35;
                    break;
                    case "ton":
                        resFinal = valConvert/1000000;
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "temperature"){
                switch ($valTransform[0].value) {                                    
                    case "celcius":
                        valConvert = parseInt($valNumber[0].innerText);
                    break;
                    case "fahrenheit":
                        valConvert = parseInt(($valNumber[0].innerText)-32)*(5/9);
                    break;
                    case "kelvin":
                        valConvert = parseInt($valNumber[0].innerText)-273.15;
                    break;                   
                };                
                
                switch ($valTransform[1].value) {                                    
                    case "celcius":
                        resFinal = valConvert;
                    break;
                    case "fahrenheit":
                        resFinal = (valConvert*9/5)+32;                        
                    break;
                    case "kelvin":
                        resFinal = valConvert + 273.15;
                    break;                 
                };
                
                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "area"){
                switch ($valTransform[0].value) {                                    
                    case "cm2":
                        valConvert = parseInt($valNumber[0].innerText)/10000;
                    break;
                    case "m2":
                        valConvert = parseInt($valNumber[0].innerText);
                    break;
                    case "km2":
                        valConvert = parseInt($valNumber[0].innerText)*1000000;
                    break;
                    case "mll2":
                        valConvert = parseInt($valNumber[0].innerText)*2589998;
                    break;
                    case "hectare":
                        valConvert = parseInt($valNumber[0].innerText)*10000;
                    break;
                    case "acre":
                        valConvert = parseInt($valNumber[0].innerText)*4046.856;
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "cm2":
                        resFinal = valConvert*10000;
                    break;
                    case "m2":
                        resFinal = valConvert;
                    break;
                    case "km2":
                        resFinal = valConvert/1000000;
                    break;
                    case "mll2":
                        resFinal = valConvert/2589998;
                    break;
                    case "hectare":
                        resFinal = valConvert/10000;
                    break;
                    case "acre":
                        resFinal = valConvert/4046.856;
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "time"){
                switch ($valTransform[0].value) {                                    
                    case "millisecond":
                        valConvert = parseInt($valNumber[0].innerText)/3600000;
                    break;
                    case "second":
                        valConvert = parseInt($valNumber[0].innerText)/3600;
                    break;
                    case "minute":
                        valConvert = parseInt($valNumber[0].innerText)/60;
                    break;
                    case "hour":
                        valConvert = parseInt($valNumber[0].innerText)                
                    break;
                    case "day":
                        valConvert = parseInt($valNumber[0].innerText)*24;
                    break;
                    case "week":
                        valConvert = parseInt($valNumber[0].innerText)*168;
                    break;
                    case "month":
                        valConvert = parseInt($valNumber[0].innerText)*720;
                    break;
                    case "year":
                        valConvert = parseInt($valNumber[0].innerText)*8760;
                    break;
                };
                
                switch ($valTransform[1].value) {                    
                    case "millisecond":
                        resFinal = valConvert*3600000;
                    break;
                    case "second":
                        resFinal = valConvert*3600;
                    break;
                    case "minute":
                        resFinal = valConvert*60
                    break;
                    case "hour":
                        resFinal = valConvert;
                    break;
                    case "day":
                        resFinal = valConvert/24
                    break;
                    case "week":
                        resFinal = valConvert/168;
                    break;
                    case "month":
                        resFinal = valConvert/720;
                    break;
                    case "year":
                        resFinal = valConvert/8760;
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };
        }
    })











    
    
    

}