let age=25;
let isstudent=true;
if(age<30){
    if(isstudent){
        console.log("young student");
    }
    else{
        console.log("young non student");
    }
}
    else{
        console.log("invalid");
    }

let years=18;
if(years>=18){
    console.log("you can vote");
}
else{
    console.log("your to young");
}
let temp=35;
if(temp>30){
    console.log("its very hot");
}
else if(temp>20){
    console.log("its warm");
}
else{
    console.log("its cool");
}
let number=prompt("enter the number");
if(number>0){
    if(number%2==0){
    alert("the number is positive and even");
}
else{
    alert("the number is positive and odd");
}}
else if(number<0){
    if(number%2==0){
     alert("the number is negative is even");
}
else{
    alert("the number is negative is odd");
}}
let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
            console.log("tuesday");
            break;
            case 3:
            console.log("wednesday");
            break;
            default:
                console.log("other day");
}
let name=prompt("enter your name");
let z=prompt("enter your age");
switch(true){
    case (z>=13 && z<18):
            alert(" not eligible for vote");
            
        
    case (z>=18 && z<65):
            alert("eligible for vote");

    case (z>=65):
            alert("senior citizens");
                break;
            default:
                alert("invalid age");
}
let n=5;
for(let i=0;i<n;i++){
    console.log("iteration" +i);
}

let m=20;
for(let i=1;i<=m;i++){
    if(m%2==0){
console.log(i);
    }
}
let s=20;
for(let i=1;i<=s;i++){
    if(i%2==0){
console.log(i);
    }
}
let p=100;
let sum=0;
for(let i=1;i<=p;i++){
    sum+=i;
    console.log(sum);
}
for(let i=0;i<=20;i++){
    console.log(i*2);
}
const fruits=["apple","banana","cherry"];
for(const fruit of fruits){
    console.log(fruit);
}
let count=0;
while(count<3){
    console.log("count is:"+count);
    count++;
}

