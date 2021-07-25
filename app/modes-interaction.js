export function modesInteraction() {
    const d = document,
    $calc = d.querySelector(".calc");
    
    d.addEventListener("click",()=>{        
        ejectCode();
    });
    d.addEventListener("keyup",()=>{
        ejectCode();
    });

    const ejectCode = ()=>{
        if ($calc.classList.contains("modeActive")){
            const $valWork = d.querySelector(".calc_settings h2"),
            $valTransform = d.querySelectorAll(".select_cont select"),
            $valNumber = d.querySelectorAll(".select_cont h2");    
   
            let valConvert,resFinal;

            if ($valWork.innerText === "lenght"){
                switch ($valTransform[0].value) {                                    
                    case "millimeter":
                        valConvert = eval($valNumber[0].innerText/1000);
                    break;
                    case "centimeter":                                                     
                        valConvert = eval($valNumber[0].innerText/100);
                    break;
                    case "meter":
                        valConvert = eval($valNumber[0].innerText);
                    break;
                    case "kilometer":
                        valConvert = eval($valNumber[0].innerText*1000);
                    break;
                    case "mile":
                        valConvert = eval($valNumber[0].innerText*1609.34);
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "millimeter":
                        resFinal = eval(valConvert*1000);
                    break;
                    case "centimeter":
                        resFinal = eval(valConvert*100);
                    break;
                    case "meter":
                        resFinal = eval(valConvert);                        
                    break;
                    case "kilometer":
                        resFinal = eval(valConvert/1000);
                    break;
                    case "mile":
                        resFinal = eval(valConvert/1609.34);
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };                        

            if ($valWork.innerText === "volume"){
                switch ($valTransform[0].value) {                                    
                    case "milliliters":
                        valConvert = eval($valNumber[0].innerText/1000);
                    break;
                    case "cubic centimeters":
                        valConvert = eval($valNumber[0].innerText/1000);
                    break;
                    case "liters":
                        valConvert = eval($valNumber[0].innerText);
                    break;
                    case "cubic meters":
                        valConvert = eval($valNumber[0].innerText*1000);
                    break;                    
                };                
                
                switch ($valTransform[1].value) {                                    
                    case "milliliters":
                        resFinal = eval(valConvert*1000);
                    break;
                    case "cubic centimeters":
                        resFinal = eval(valConvert*1000);
                    break;
                    case "liters":
                        resFinal = eval(valConvert);
                    break;
                    case "cubic meters":
                        resFinal = eval(valConvert/1000);
                    break;                    
                };
                
                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "weight"){
                switch ($valTransform[0].value) {                                    
                    case "milligram":
                        valConvert = eval($valNumber[0].innerText/1000);
                    break;
                    case "gram":
                        valConvert = eval($valNumber[0].innerText);
                    break;
                    case "pound":
                        valConvert = eval($valNumber[0].innerText*454);
                    break;
                    case "kilogram":
                        valConvert = eval($valNumber[0].innerText*1000);
                    break;
                    case "ounce":
                        valConvert = eval($valNumber[0].innerText*28.35);
                    break;
                    case "ton":
                        valConvert = eval($valNumber[0].innerText*1000000);
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "milligram":
                        resFinal = eval(valConvert*1000);
                    break;
                    case "gram":
                        resFinal = eval(valConvert);
                    break;
                    case "pound":
                        resFinal = eval(valConvert/454);
                    break;
                    case "kilogram":
                        resFinal = eval(valConvert/1000);
                    break;
                    case "ounce":
                        resFinal = eval(valConvert/28.35);
                    break;
                    case "ton":
                        resFinal = eval(valConvert/1000000);
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "temperature"){
                switch ($valTransform[0].value) {                                    
                    case "celcius":
                        valConvert = eval($valNumber[0].innerText);
                    break;
                    case "fahrenheit":
                        valConvert = eval((($valNumber[0].innerText)-32)*(5/9));
                    break;
                    case "kelvin":
                        valConvert = eval($valNumber[0].innerText-273.15);
                    break;                   
                };                
                
                switch ($valTransform[1].value) {                                    
                    case "celcius":
                        resFinal = valConvert;
                    break;
                    case "fahrenheit":
                        resFinal = eval((valConvert*9/5)+32);                        
                    break;
                    case "kelvin":
                        resFinal = eval(valConvert + 273.15);
                    break;                 
                };
                
                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "area"){
                switch ($valTransform[0].value) {                                    
                    case "cm2":
                        valConvert = eval($valNumber[0].innerText)/10000;
                    break;
                    case "m2":
                        valConvert = eval($valNumber[0].innerText);
                    break;
                    case "km2":
                        valConvert = eval($valNumber[0].innerText)*1000000;
                    break;
                    case "mll2":
                        valConvert = eval($valNumber[0].innerText)*2589998;
                    break;
                    case "hectare":
                        valConvert = eval($valNumber[0].innerText)*10000;
                    break;
                    case "acre":
                        valConvert = eval($valNumber[0].innerText)*4046.856;
                    break;
                };
                
                switch ($valTransform[1].value) {
                    case "cm2":
                        resFinal = eval(valConvert*10000);
                    break;
                    case "m2":
                        resFinal = eval(valConvert);
                    break;
                    case "km2":
                        resFinal = eval(valConvert/1000000);
                    break;
                    case "mll2":
                        resFinal = eval(valConvert/2589998);
                    break;
                    case "hectare":
                        resFinal = eval(valConvert/10000);
                    break;
                    case "acre":
                        resFinal = eval(valConvert/4046.856);
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };

            if ($valWork.innerText === "time"){
                switch ($valTransform[0].value) {                                    
                    case "millisecond":
                        valConvert = eval($valNumber[0].innerText)/3600000;
                    break;
                    case "second":
                        valConvert = eval($valNumber[0].innerText)/3600;
                    break;
                    case "minute":
                        valConvert = eval($valNumber[0].innerText)/60;
                    break;
                    case "hour":
                        valConvert = eval($valNumber[0].innerText)                
                    break;
                    case "day":
                        valConvert = eval($valNumber[0].innerText)*24;
                    break;
                    case "week":
                        valConvert = eval($valNumber[0].innerText)*168;
                    break;
                    case "month":
                        valConvert = eval($valNumber[0].innerText)*720;
                    break;
                    case "year":
                        valConvert = eval($valNumber[0].innerText)*8760;
                    break;
                };
                
                switch ($valTransform[1].value) {                    
                    case "millisecond":
                        resFinal = eval(valConvert*3600000);
                    break;
                    case "second":
                        resFinal = eval(valConvert*3600);
                    break;
                    case "minute":
                        resFinal = eval(valConvert*60)
                    break;
                    case "hour":
                        resFinal = eval(valConvert);
                    break;
                    case "day":
                        resFinal = eval(valConvert/24)
                    break;
                    case "week":
                        resFinal = eval(valConvert/168);
                    break;
                    case "month":
                        resFinal = eval(valConvert/720);
                    break;
                    case "year":
                        resFinal = eval(valConvert/8760);
                    break;
                };

                $valNumber[1].innerText = resFinal;                
            };
        }
    };









    
    
    

}