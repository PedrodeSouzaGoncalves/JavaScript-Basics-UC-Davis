(function (){

    const addingParagraph = document.querySelector('div');
    const btn = document.querySelector('button');
        
    btn.addEventListener('click', function(){ // this functino works after clicking on the button

        let newP = document.createElement('p');// create a new p tag
        let pText = document.createTextNode('A new paragraph'); // create a new text
        
        newP.appendChild(pText); // newP element, appendchild the text from pText
        addingParagraph.appendChild(newP); // append the new tag with text to the div addingParagraph 
        });


}());