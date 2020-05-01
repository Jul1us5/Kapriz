
"use strict";
// ------------------------ [ OPEN Navigation menu ]


let close = document.querySelector('.close').onclick = tapClose;


function tapClose() {


        let tap = document.querySelector('.links');
        
            if ( tap.className === 'links') {
                tap.className += ' tap';
            } else {
                tap.className = 'links';
                
            }
            myFunction(this);
}

// -----------------------[ MENU open / close animation ]

// let close = document.querySelector('.close').onclick = myFunction;

function myFunction(x) {
    x.classList.toggle("change");
  }