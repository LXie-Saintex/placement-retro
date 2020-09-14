const Symbology = {
    work : " 💰 ",
    interest : " 👀 ",
    have_to_do : " 🙄 ",
    asap: " 🚨 ",
    brain_food: " 🧠 "
}

function addLeftoversSymbols (){
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

function explainSymbols() {
    const para = document.createElement('p');
    para.textContent = `Some items are prefixed with emojis, which means that the item in question has higher priority due to \
    a variety of reasons; ${Symbology.work} means that it is something that would help me at work; I prefix the items that I'm particularly \
    interested in with ${Symbology.interest}, and the ones that I consider good for me with ${Symbology.brain_food}; \
    For the items that I couldn't care less about but are required somehow, I prefix them with ${Symbology.have_to_do}; \
    if an item is prefixed ${Symbology.asap}, it means it should be done ASAP.`;
    const itemsList= document.querySelector('.leftovers');
    document.body.insertBefore(para,itemsList);
}

window.onload = function() {
    addLeftoversSymbols();
    explainSymbols();
}