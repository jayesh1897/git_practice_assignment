  let x = "mom";
 let jhola1="";
 let jhola2="";
 
 for(let i=0; i<=x.length-1; i++){
     jhola1 = jhola1 + x[i];
 }
 
 for(let j=x.length-1; j>=0; j--){
     jhola2 = jhola2 + x[j];
 }
  if(jhola1==jhola2){

      console.log("Yes");
  }
	else{
      	console.log("No");
  }