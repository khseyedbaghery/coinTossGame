const textSelect = document.querySelector('.my-select');
var mybr = document.createElement('br');
const btn = document.querySelectorAll('button');

const myArray = ['Heads', 'Tails'];

var enterLine = textSelect.appendChild(mybr);

var cunterp = 0;
var cunterc = 0;

btn.forEach(item => {

    item.addEventListener('click',myfunc);
});

function myfunc(e){
        
    let index = Math.floor(Math.random()*myArray.length);
    var myRandom = myArray[index];
    console.log(myRandom);

    var firstLine = `Computer selected ${myRandom}`;
   
    if(e.target.innerText === myRandom){
        
        let secondLine = "Player Win";

        textSelect.innerText =  firstLine;
        textSelect.appendChild(mybr);  
        textSelect.innerText +=  secondLine;
        cunterp ++ ; 
    }
    else{
        let secondLine = "Computer Win";

        textSelect.innerText =  firstLine;
        textSelect.appendChild(mybr);  
        textSelect.innerText +=  secondLine;
        cunterc ++;
    }

    var tirdLine = `Player ${cunterp}  Copmuter ${cunterc}`;
    textSelect.appendChild(mybr);  
    textSelect.innerText +=  tirdLine;
    // textSelect.innerHTML += "hello" + "<br/>" + "kflmgk"
    
}