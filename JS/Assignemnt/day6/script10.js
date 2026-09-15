let text1 = "javascript";
let j=" "
let target="s"
for(let i=text1.length-1;i>=0;i--){
    if(text1[i]==target){
    j+=text1[i];
    }
}
console.log("Character Found:"+j);