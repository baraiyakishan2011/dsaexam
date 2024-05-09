let array =[20,11,23,99,22,84,50]
 let element=5;
 let flag= false

 for(let i=0;i< array.length;i++){
    if(array[i]===element){
        console.log("true");
        flag=true
        break;
    }
 }
  if(!flag){
    console.log("false");
  }