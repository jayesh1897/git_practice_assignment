  let x = "naman";
 let bag1="";
 let bag2="";
 
 for(let i=0; i<=x.length-1; i++){
     bag1 = bag1 + x[i];
 }
 
 for(let j=x.length-1; j>=0; j--){
     bag2 = bag2 + x[j];
 }
  if(bag1==bag2){
      console.log("true");
  }else{
      console.log("false");
  }