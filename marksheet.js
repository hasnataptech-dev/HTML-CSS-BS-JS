var std_name="Ali";
var std_id=123456;
var english= +prompt('Enter your English Marks:');
var urdu= +prompt('Enter your Urdu Marks:');
var science= +prompt('Enter your Science Marks:');
var maths= +prompt('Enter your Maths Marks:');
var pst= +prompt('Enter your Pst Marks:');
var obt= english+urdu+pst+maths+science;
var percentage= ((obt/ 500) * 100).toFixed(2);
var total= 100*5;
console.log("=======MARKSHEET=======");
console.log( "English Marks:",english);
console.log( "Urdu Marks:",urdu);
console.log( "Science Marks:",science);
console.log( "Maths Marks:",maths);
console.log( "Pst Marks:",pst);
console.log( "Obtained Marks:",obt);
console.log( "Total:",total);
console.log( "Percentage:",percentage);

if(percentage>=80 && percentage<=100){
    console.log("Grade:A+");
    }
else if(percentage>=70 && percentage<=80){
    console.log("Grade:A");
    }
else if(percentage>=60 && percentage<=70){
    console.log("Grade:B");
    }
else if(percentage>=50 && percentage<=60){
    console.log("Grade:C");
    }
else if(percentage>=40 && percentage<=50){
    console.log("Grade:D");
    }
    else{
        console.log("Grade:F");   
    }
    if(English>=40 && Maths>=40 && Urdu>=40 && Science>=40)
    {
        console.log("PASS");
    }
    else{
        console.log("FAIL");
        }
    