export const initials = (name:string)=>{
    const splitt = name.split(" ")
    let res = "";
    for(let i=0; i<splitt.length; i++){
    if(splitt[i][0]){
        res+=splitt[i][0]
    }
    } 
   return res;
}