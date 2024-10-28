(function(){

    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('#myForm');
    const overlay = document.querySelector('#overlay');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const verbING = document.querySelector('#verbING').value;
        const adj1 = document.querySelector('#adj1').value;
        const verbPAST = document.querySelector('#verbPAST').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb1 = document.querySelector('#verb1').value;
        const number = document.querySelector('#number').value;
        const noun = document.querySelector('#noun').value;
        const verb2 = document.querySelector('#verb2').value;
        const bodypart = document.querySelector('#bodypart').value;

        let myText;

        if(verbING == ''){
            document.querySelector('#verbING').focus();
        }
        else if(adj1 == ''){
            document.querySelector('#adj1').focus();
        }
        else if(verbPAST == ''){
            document.querySelector('#verbPAST').focus();
        }
        else if(adj2 == ''){
            document.querySelector('#adj2').focus();
        }
        else if(verb1 == ''){
            document.querySelector('#verb1').focus();
        }
        else if(number == ''){
            document.querySelector('#number').focus();
        }
        else if(noun == ''){
            document.querySelector('#noun').focus();
        }
        else if(verb2 == ''){
            document.querySelector('#verb2').focus();
        }
        else if(bodypart == ''){
            document.querySelector('#bodypart').focus();
        }
        else{
            overlay.className = 'showing';

            myText = `The worm searched far and wide for an apple to rest in. The worm had spent all day ${verbING} and became quite ${adj1} afterwards. He ${verbPAST} everywhere for a(n) ${adj2} apple to take a ${verb1} in. Finally, after ${number} hours of searching, the worm saw something in the distance just past the ${noun}. It was an apple! However, as the worm started to ${verb2} closer and closer to the fruit, it began to…disappear? He couldn’t believe his ${bodypart}!`;
            document.querySelector('#verbING').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#verbPAST').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#number').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#verb2').value = '';
            document.querySelector('#bodypart').value = '';
            madlib.innerHTML = myText;
        }

    });

})();