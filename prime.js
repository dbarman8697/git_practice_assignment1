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
