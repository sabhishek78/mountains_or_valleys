function landscapeType(input){
    let diffArray=[];
    let peak=0;
    let valley=0;
    diffArray.push(0);
 for(let i=1;i<input.length;i++){
     diffArray[i]=input[i]-input[i-1];
 }
 console.log(diffArray);
 for(let i=1;i<diffArray.length-1;i++){
     if(diffArray[i]>=0 && diffArray[i+1]<0){
        peak++;
     }
     else if(diffArray[i]<0 && diffArray[i+1]>=0){
         valley++;
     }
 }
 if(peak==1 && valley==0){
     return "mountain"
 }
 else if(peak==0 && valley==1){
     return "valley"
 }
 else return "neither";
}
console.log(landscapeType([3, 4, 5, 4, 3]));//"mountain"
console.log(landscapeType([9, 7, 3, 1, 2, 4]));//➞ "valley"
console.log(landscapeType([9, 8, 9]));// ➞ "valley"
console.log(landscapeType([9, 8, 9, 8]));// ➞ "neither"