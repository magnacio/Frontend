let n=10;
let a=1;
let b=0;
for(let i=1;i<=n;i++){
    console.log(a);
    
    let c=a+b;//1+0//0+1//1+1//1+2
    
    a=b;//a=0//a=1//a=1//a=2
    b=c;//b=1//b=1//b=2//b=3
}