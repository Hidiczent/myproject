function  Calculrator(grade) {
    let let_grade = '';
if (grade >=91 && grade <=100){
    let_grade='A';
}
else if (grade >= 81 && grade <=90){
    let_grade='B+';
}
else if (grade >=76 && grade <= 80){
    let_grade='B';
}
else if (grade >=71 && grade <=75){
    let_grade='C+';
}
else if (grade >=66 && grade <=70){
    let_grade='C';
}
else if (grade >=61 && grade <=65){
    let_grade='D+';
}
else if (grade >= 50 && grade<=60 ){
    let_grade='D';
}
else if (grade >=1 && grade <=49 ){
    let_grade='F'
}
else {
    let_grade='Invalid grade' 
}
return let_grade;
}
function sendd(){
    let grade=document.getElementById('num').value;
    let let_grade=Calculrator(grade);
    document.getElementById('your_grade').innerHTML='Your grade: ' + let_grade;
    document.getElementById('your_grade').style.color='rgb(45, 248, 45)';
    if (let_grade === 'F'){
        document.getElementById('your_grade').style.color='red'
    }
    else if (let_grade === 'Invalid grade' ){
        document.getElementById('your_grade').style.color='red'
    }

    }
