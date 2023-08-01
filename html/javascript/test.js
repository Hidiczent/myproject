const std ={first_name:'Southavy', lastname:"Sengdavong",age:20,class:"1cw1"}
document.getElementById("std").innerHTML=std.first_name+' '+std.lastname + ' is ' 
+ std.age+" year old "+"Class: "+ std.class

function fah(){
    let f=document.getElementById('fahrenheit').value
    if(isNaN(f)) {
        return 'Can not to change ';
    }
    else if (!f){
        return 'Can not to change ';
    }
    let celsius = (f - 32) * 5/9;   
    return celsius;
} 
function showw(){
    let celsius=fah()
    document.getElementById('show').innerHTML=celsius+'Celsius'
}