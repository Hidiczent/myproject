function findAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let avg = sum / 3
    return avg
}
let ans = findAverage(3, 7, 6)
console.log("Agv:" + ans)
alert(ans)

function printGreeting(name) {
    console.log('hello ' + (name + 3))
}
document.getElementById('a').innerHTML='Run'
function myfuntion(){
document.write('<h2> Learning about HTML DOM is fun!</h2>')
}


// let content1=document.getElementById('content-1');
// let content2=document.getElementById('content-2');
// let content3=document.getElementById('content-3')
// // let content=document.getElementById('content-1');
// let textHtml_1=2+3
// let textHtml_2='<b>ເກັ່ງແທ້ຊາວໂລກ</b>'
// let textHtml_3='<b>24/03/2005</b>'
// content1.innerHTML=textHtml_1
// content2.innerHTML=textHtml_2
// content3.innerHTML=textHtml_3
function myfuntion(){
    let x=document.getElementById("number").value
    let text
    if (isNaN(x)  || x < 1 || x>10 ){
        text="Input not valid"
    }
    else{
        text="input Ok"
    }
    document.getElementById("demo").innerHTML = text
}