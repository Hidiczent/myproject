function homework(num1,num2,num3){
let sum=num1*3600+num2*60+num3*1;//ສູດຄິດໄລ່ເວລາ
    return sum;
}
function clicka(){ //functionໄວ້ຕອນກົດເພື່ອສະແດງຄ່າ
let ans=homework(1,5,25);
document.getElementById('total').innerHTML=ans;
} 