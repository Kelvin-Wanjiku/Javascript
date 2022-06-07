
fuel= x;
prompt("enter the fuel in ltrs: ")

if(x>=1000){
   document.getElementById("demo").innerHTML= "the car is good to go, happy driving";

}
else{
   document.getElementById("demo").innerHTML= "the fuel tank is empty, pls refill";
}
