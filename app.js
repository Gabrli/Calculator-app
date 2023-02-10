//All elements in web-site

const CurrentNumber = document.querySelector('.currentNumber')

const PrevNumver = document.querySelector('.prevNumber')

const WebOperators = document.querySelectorAll('.operators')

const NumberBtn = document.querySelectorAll('.number')

const MathSign = document.querySelector('.MathSign')

const ResultText = document.querySelector('.score') 

const ClerarBtn = document.getElementById('clear')

const BtnResult = document.getElementById('this')

//function click on all operators
WebOperators.forEach((x) => {
    x.addEventListener('click', AddOperation)

 
})

//function click on const numbers 
NumberBtn.forEach(x => x.addEventListener('click', displayNumbers))

BtnResult.addEventListener('click', update)


//function display
function displayNumbers(){
    CurrentNumber.innerHTML += this.textContent
}

let result = 0

//add operation 
function AddOperation(){
    if(CurrentNumber.innerHTML === '' && this.textContent === '-'){
        CurrentNumber.innerHTML = '-'
        return
    } else if(CurrentNumber.innerHTML === ''){
        return
    }


    
    PrevNumver.innerHTML = CurrentNumber.innerHTML
    MathSign.innerHTML += this.textContent 
    CurrentNumber.innerHTML = ''
   
}


ClerarBtn.addEventListener('click', ClearList) //event clear

//function operation 
function update(){

   
   
    let a = Number(CurrentNumber.innerHTML) //String
    let b = Number(PrevNumver.innerHTML) //String
    let oprator = MathSign.innerHTML

    switch(oprator){
        case '+':
            result = a + b;
            
            break;

            case '-':
                result = a - b;
                break;
                case ':':
                    result = a / b
                    break;
                    case 'X':
                        result = a * b
                        break;
                        case '2^':
                            result = a ** b
                            break;
                          
                                

    }

    ResultText.innerHTML = result //display result
}

//function Clear result, operation and numbers
function ClearList(){
    result = 0
    CurrentNumber.innerHTML = ''
    PrevNumver.innerHTML = ''
    MathSign.innerHTML = ''
    ResultText.innerHTML = ''
}


