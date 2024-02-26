/*let num = prompt(`enter the number you want to mutiply`);
for(i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`)
}
let choice = prompt(`wanna continute type yes or no `);
let choice1=yes;
let choice2=no;
if(choice === choice1)
{
    let num = prompt(`enter the number you want to mutiply`);
for(i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`)
}
}else{
    alert(`session ends`);
} 

let num1= parseFloat(prompt("Enter your first number"));
let num2 = parseFloat(prompt("Enter your second number"));
let choice = prompt("enter wat u wanna do weather mul or div or sub or add");
if(choice==="mul"){
   alert(num1*num2);
}
else if(choice==="add"){
   alert(num1 + num2)
}
else if(choice==="sub"){
    alert(num1-num2);

}
else if(choice==="div"){
    alert(num1/num2)
}*/
/*let sum = 0;
for(i=4;i<20;i++){
    sum+= i;
    console.log(sum)
}
for(i=100;i>=1;i--){
    console.log(i);
}

let prev = 0;
let curr = 1;
for(i=0;i<10;i++){
    let next = prev + curr;
    prev = curr;
    curr = next;
    console.log(next)
}

let user = prompt("Enter  the string or num");

if(isNaN(user)){
    console.log("s its a  string")
}
else{
    console.log("its a num")
}
let user1 = prompt("Enter  the string ");
if(user1.length===0){
    console.log("its a empty string");
    
}
else{
    console.log(user1)
}
let name = "sujatha";
console.log(name.slice(2,6));

let username = "emman suja sharon SURIYA";
console.log(username.split(' '))
 

let keyi = "jackSujatha ";

console.log(keyi.slice(0,8));
console.log(keyi.slice(8));
console.log(keyi.indexOf("ja"));*/

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

