Solution1:
function prime(number){
   let factors = 0;
   for(let i=1; i<=number; i++){
       if(number % i==0){
           factors++;
        }
    }
    if (factors==2){
    return true; 
  }
   return false;
}

   let ans = prime(13);
   if(ans ==true){
  
   console.log("Prime");
  }else{
   console.log("Not Prime");
  }
=======
solution2:
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

