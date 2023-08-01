//ຂໍ້1

const std={firstName:"Southavy",lastName:"Sengdavong",age:"18",Class:"1cw1"}
document.getElementById('username').innerHTML=std.firstName+'  '+std.lastName+" is "
+std.age+" Year old "+"Class: "+std.Class



// ຂໍ້ 2
function Fahrenheit_(){
    let f =document.getElementById('fah').value
    if (isNaN(f)){
        return "Can not change to "
    }
    else if(!f){
        return "Can not change to "
    }
    let celsius=(f-32)*5/9
    return celsius
}
function convert(){
    celsius=Fahrenheit_()
    document.getElementById("show").innerHTML=celsius+" Celsius "
}