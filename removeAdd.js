'use strict';
{

    document.onreadystatechange = function () {

        if (document.readyState == "complete") {
          
            console.log("fired");

            const elements = document.getElementsByClassName("fc-ab-root");
            const body = document.body;

            if(elements){
                while (elements.length > 0){
                    elements[0].remove();
                } 
            }


        //  body.removeAttribute('style');
            body.style.removeProperty('overflow');
        }
    }

      


}