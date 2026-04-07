(function(){

    const addingParagraph = document.querySelector('div');
    const btnAdd = document.querySelectorAll('button')[0];
    const btnDelete = document.querySelectorAll('button')[1];

            
    btnAdd.addEventListener('click', function(){

        let newP = document.createElement('p');
        let pText = document.createTextNode('A new paragraph');
        newP.appendChild(pText);
        addingParagraph.appendChild(newP);
        });

    btnDelete.addEventListener('click', function(){
        let allPs = document.querySelectorAll('p');
        addingParagraph.removeChild(addingParagraph.children[allPs.length-1]);
    });

}());