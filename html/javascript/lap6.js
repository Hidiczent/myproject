function myfucnton(){
    let x =document.getElementById("num1").value
    let y=document.getElementById('num2').value
    let text
    if(isNaN(x,y) || x<1 || x>10001 && y<1 || y>1001){
        text='input not valid'
    }
    else{
        text=parseInt(x)+parseInt(y)
    }
    document.getElementById('demo').innerHTML=text
}
function username(){
    let user=document.getElementById('userr').value
    let password=document.getElementById('pass').value
    let name
    if (user=='admin' && password=='admin@123'){
        name=user
    }
    else{   
      name=  'try again'
    }
    document.getElementById('show').innerHTML='Welcome: '+name
}