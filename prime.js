function prime(num){
let counter = 0;
   for(let i=1; i<=num; i++){
       if(num%i == 0){
          counter++;
        }
    }
    if(counter ===2 ){
   return true;
}
return false;
}

let answer = prime(13);
if(answer == true){
     console.log("Prime");
}else{
  
  console.log("Not Prime");
}