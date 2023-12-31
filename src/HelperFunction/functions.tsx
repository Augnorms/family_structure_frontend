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
    const hours = Math.floor(timeInSeconds / 3600);
    const remainingMinutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
  
    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  
    return `${String(remainingMinutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  