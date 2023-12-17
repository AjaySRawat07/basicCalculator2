let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let plusMinus = document.getElementById('plusMinus');

console.log(inputBox);
let string = '';

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = (eval(string))
            inputBox.value = string;
            string='';
            console.log('=',string);
        }
        else if(b.target.innerText=='AC'){
            string = '';
            inputBox.value = string;
            console.log('AC',string);
        }
        else if(b.target.innerText == 'DEL'){
            if(string.length == 1){
                string = 0;
            
            }
            else{
                string = string.substring(0,string.length-1)
           
            }
            inputBox.value = string;
            string= '';
            console.log(string);
        }
        else if(b.target.innerText == '+/-'){
            string = String(-eval(string))
            inputBox.value = string;
            console.log(string);
        }
        else{
            string += b.target.innerText
            inputBox.value = string;
            // string='';
            console.log(string);
        }
    });
});
