//printing the prime no. from 1 to 20

let num = 20;
let count=0;

for(i=1;i<=20;i++){
    for(j=1;j<=20;j++){
        if(i%j==0){
           count++;
        }
    }
} 
if(count==2){
    console.log(i)
}