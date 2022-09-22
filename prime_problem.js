//printing the prime no. from 1 to 20

let num = 20;
let tom=0;

for(i=1;i<=20;i++){
    
	for(j=1;j<=20;j++){
        if(i%j==0){
           tom++;
        }
    }
} 
if(tom==2){
    console.log(i)
}