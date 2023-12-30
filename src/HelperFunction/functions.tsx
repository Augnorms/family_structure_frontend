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

export const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };