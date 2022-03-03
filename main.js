
document.querySelector('#solveForC').addEventListener('click',findvalueofc)
 
function findvalueofc(){
    let a = document.querySelector('#valueofA').value
    let b = document.querySelector('#valueofB').value
    let c = Math.sqrt(a*a + b*b)
    document.querySelector('#valueofc').innerText = c

 }
