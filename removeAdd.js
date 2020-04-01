'use strict';
{
    document.onreadystatechange = function () {

        if (document.readyState == "complete") {
          
            let elements = document.getElementsByClassName("fc-ab-root");
            
            const body = document.body;

            if(elements){
                while (elements.length > 0){
                    elements[0].remove();
                } 
            }

            body.style.removeProperty('overflow');

            
            //tele 5
            if(document.getElementById("pageMultisite")){
                document.getElementById("pageMultisite").remove();
            }
            

           //jpov
            elements = document.getElementsByClassName("jconfirm-dhantiadblocker"); 

            if(elements){
                while (elements.length > 0){
                    elements[0].remove();
                } 
            }
        
        }
    
    }

}