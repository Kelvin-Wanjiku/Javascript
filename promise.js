let  car = new Promise(function(resolve,reject){
   fuel_fullTank =false;
   
   if(fuel_fullTank)
   resolve()
   else
   reject()
});

car.then(function(){
   document.getElementById("demo").innerHTML= "Fuel tank is full, happy driving";
})
.catch(function(){
   document.getElementById("demo").innerHTML= "the tank is empty";
})