import { Symbology } from './symbology'; 

function addLeftoversSymbols (){
    console.log(Symbology.work);

    const items = document.querySelectorAll('.leftovers li');
    for(let item of items){
        let itemClasses = item.getAttribute("class");
        if ( itemClasses == null ) {
            continue;
        }
        if ( itemClasses.includes('interest') ) {
            let content = item.textContent; 
            item.innerHTML = Symbology.interest + content; 
        }
        
        if( itemClasses.includes("work") ) {
            let content = item.textContent; 
            item.innerHTML = Symbology.work + content; 
        }

        if ( itemClasses.includes("christ") ) {
            let content = item.textContent;
            item.textContent = Symbology.have_to_do + content; 
        }
    }
}

window.onload = function() {
    addLeftoversSymbols(); 
}