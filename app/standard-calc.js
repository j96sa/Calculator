export function standarMode(){    
    const d = document,
    $docButton = d.querySelector(".calc_buttons .doc-button"),
    $hisDisplay = d.querySelector(".calc .history h4"),
    $display = d.querySelector(".calc .display h2"),
    $calc = d.querySelector(".calc");

    let hisVal,op,inptVal;
    

    //*********TODO EL CODIGO FUNCIONAL DE LA CALCULADORA ********************/
    //*********Y EL DE LA INTRODUCCION DE LOS DIGITOS EN PANTALLA DE LOS MODOS */
    d.addEventListener("click",e=>{          
        const $calcDisplay = d.querySelector(".select_cont-1 h2");                

        //**PARA INSERTAR LOS NUMEROS EN EL DISPLAY* Y EVITAR INCLUIR MAS DE UN PUNTO/
        if(e.target.matches(".calc_buttons .butt-number")){
            //para validar los modos
            if ($calc.classList.contains("modeActive")){
                if ($calcDisplay.innerText === "0"){
                    $calcDisplay.innerText = "";
                    $calcDisplay.innerText += e.target.innerText;  
                }else{
                    $calcDisplay.innerText += e.target.innerText;  
                };

                if($calcDisplay.innerText.includes(".")){
                    $docButton.innerText = "";
                }else{
                    $docButton.innerText = ".";
                };
            }else{
                if ($display.innerText === "0"){
                    $display.innerText="";  
                    $display.innerText += e.target.innerText;                            
                }else{
                    $display.innerHTML += e.target.innerText;                
                }; 
    
                if($display.innerText.includes(".")){
                    $docButton.innerText = "";
                }else{
                    $docButton.innerText = ".";
                };
            };                        
        };

        //**PARA INSERTAR VALORES NEGATIVOS Y POSITIVOS */
        if(e.target.matches(".calc_buttons .post-button")){
            if ($display.innerText === "0"){
                $display.innerText = "0";          
            }else{
                $display.innerText.includes("-") ?$display.innerText = $display.innerText.slice(1) :$display.innerText = `-${$display.innerText}`
            } 
        };

        //***PRARA REALIZAR LAS OPERACIONES (+ - / * )  */
        if(e.target.matches(".calc_buttons .op-butt")){                  
            //con alojamiento en variables
            if($display.innerText === "0"){
                $display.innerText = "0";
            }else{
                hisVal = $display.innerText;
                op = e.target.innerText;                     
                $hisDisplay.innerText = hisVal + op;
                $display.innerText = "0";
                $docButton.innerText = ".";
            };        
        };

        //**PARA REALIZAR LAS OPERACIONES DE (√²  x²)   */
        if (e.target.matches(".op2-butt")){
            if (e.target.innerText === "√ ²") $display.innerText = Math.sqrt(parseInt($display.innerText));
            if (e.target.innerText === "x ²") $display.innerText = Math.pow(parseInt($display.innerText),2);
        };

        //**PARA MOSTRAR EL RESULTADO */
        if(e.target.matches(".calc_buttons .equal-button")){        
            //con alojamiento en variables
            inptVal = $display.innerText;
            $hisDisplay.innerText += inptVal;
            $display.innerText = eval($hisDisplay.innerText);
            $hisDisplay.innerText = "";
            $docButton.innerText = ".";
        };

        //**PARA LIMPIAR LA CALCULADORA */
        if(e.target.matches(".calc_buttons .clear-button")){
            //para validar los modos
            if ($calc.classList.contains("modeActive")){                        
                $calcDisplay.innerText = "0";  
                $docButton.innerText = ".";
            }else{
                inptVal = "";
                hisVal = "";
                op = "";
                $hisDisplay.innerText = "";        
                $display.innerText = "0";  
                $docButton.innerText = ".";              
            };
        };        
    });

    

    //CODIGO PARA INTERACTUAR CON LA CALCULADORA MEDIANTE EL TECLADO
    d.addEventListener("keyup",e=>{    
        e.preventDefault();
        const $valNumber = d.querySelector(".select_cont-1 h2");        

        switch (e.key) {
            case "1":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                };
            break;
        
            case "2":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "3":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "4":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "5":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "6":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "7":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "8":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "9":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case "0":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0") $valNumber.innerText = "";
                    $valNumber.innerText += e.key;
                }else{
                    if ($display.innerText === "0") $display.innerText = "";
                    $display.innerText += e.key;
                }
            break;
    
            case ".":
                if ($calc.classList.contains("modeActive")){
                    if ($valNumber.innerText === "0"){
                        $valNumber.innerText = ".";
                    }else{
                        if ($valNumber.innerText.includes(".")){
                            $valNumber.innerText;
                        }else{
                            $valNumber.innerText += e.key;
                        }
                    }
                }else{
                    if ($display.innerText === "0"){
                        $display.innerText = ".";
                    }else{                
                        if($display.innerText.includes(".")){
                            $display.innerText;
                        }else{
                            $display.innerText += e.key;
                        };
                    }; 
                };                
            break;
           
            case "+":
                if ($display.innerText === "0"){
                    $display.innerText = "0";
                }else{
                    hisVal = $display.innerText;
                    op = e.key;                     
                    $hisDisplay.innerText = hisVal + op;
                    $display.innerText = "0";
                    $docButton.innerText = ".";
                } 
            break;
    
            case "-":
                if ($display.innerText === "0"){
                    $display.innerText = "0";
                }else{
                    hisVal = $display.innerText;
                    op = e.key;                     
                    $hisDisplay.innerText = hisVal + op;
                    $display.innerText = "0";
                    $docButton.innerText = ".";
                } 
            break;
    
            case "/":
                if ($display.innerText === "0"){
                    $display.innerText = "0";
                }else{
                    hisVal = $display.innerText;
                    op = e.key;                     
                    $hisDisplay.innerText = hisVal + op;
                    $display.innerText = "0";
                    $docButton.innerText = ".";
                } 
            break;
    
            case "*":
                if ($display.innerText === "0"){
                    $display.innerText = "0";
                }else{
                    hisVal = $display.innerText;
                    op = e.key;                     
                    $hisDisplay.innerText = hisVal + op;
                    $display.innerText = "0";
                    $docButton.innerText = ".";
                } 
            break;
    
            case "Enter":
                if ($display.innerText === "0"){
                    $display.innerText = "0";
                }else{
                    inptVal = $display.innerText;
                    $hisDisplay.innerText += inptVal;
                    $display.innerText = eval($hisDisplay.innerText);
                    $hisDisplay.innerText = "";
                    $docButton.innerText = ".";
                } 
            break;
    
            case "Escape":
                if ($calc.classList.contains("modeActive")) $valNumber.innerText = "0";                
                inptVal = "";
                hisVal = "";
                op = "";
                $hisDisplay.innerText = "";        
                $display.innerText = "0";  
                $docButton.innerText = ".";
            break;        
        }
    });

}