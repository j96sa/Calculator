export function modesCalc(){
    const d = document,
    $calc = d.querySelector(".calc"),    
    $fragment = d.createDocumentFragment(),
    allDisply = [d.querySelector(".calc .history"),d.querySelector(".calc .display")],
    $template = d.getElementById("mod-template").content;     

    let arrSelect;     
    let $selects;
                            

    d.addEventListener("click",e=>{

        if (e.target.matches(".calc-menu span")){            
    
            if (e.target.innerText === "volume"){
                arrSelect = ["milliliters","cubic centimeters","liters","cubic meters"];            
            }else if(e.target.innerText === "lenght"){
                arrSelect = ["millimeter","centimeter","meter","kilometer","mile"];
            }else if(e.target.innerText === "weight"){
                arrSelect = ["milligram","gram","pound","kilogram","ounce","ton"];
            }else if(e.target.innerText === "temperature"){
                arrSelect = ["celcius","fahrenheit","kelvin"];
            }else if(e.target.innerText === "time"){
                arrSelect = ["millisecond","second","minute","hour","day","week","month","year"];
            }else if(e.target.innerText === "area"){
                arrSelect = ["cm2","m2","km2","mll2","hectare","acre"];
            };
                    
            //mostrar y ocultar los modos de la CALCULADORA
            if (e.target.innerText !== "standard"){                          
                insertModDis();               
                $selects = d.querySelectorAll(".calc-mod_selects .select_cont"),                
                selectNamesFunc(arrSelect);                 
            }else{                            
                $calc.classList.remove("modeActive");
                d.querySelector(".calc .calc-mod_selects").remove();
                allDisply.forEach(ele=>ele.style.display = "flex");                                            
                //creacion del div para sustituir
                let del = d.createElement("div");
                del.classList = "calc-mod_selects noneClass";
                $calc.insertAdjacentElement("afterbegin",del)
            };                        
        };
    });

    const insertModDis = ()=>{          
        d.querySelector(".calc .calc-mod_selects").remove();
        allDisply.forEach(ele=>ele.style.display = "none");        
        $calc.classList.add("modeActive");
        let cloneTemp = d.importNode($template,true);
        let selectDiv = d.createElement("div");
        selectDiv.classList = "calc-mod_selects";
        selectDiv.appendChild(cloneTemp);
        $calc.insertAdjacentElement("afterbegin",selectDiv);        
    };

    const selectNamesFunc = (arr)=>{                     
        let sel = d.createElement("select");

        arr.forEach(e=>{                        
            let opt = d.createElement("option");
            opt.value = e;
            opt.innerText = e;        
            $fragment.appendChild(opt);        
        });
            sel.appendChild($fragment);

            $selects[0].insertAdjacentElement("beforeend",sel);
            
            let select0 = $selects[0].querySelector("select");
    
        let selectClone = d.importNode(select0,true);
        $selects[1].insertAdjacentElement("beforeend",selectClone);
    };
};