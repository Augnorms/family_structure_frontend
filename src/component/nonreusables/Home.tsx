import axios from "axios";
import { useEffect, useState } from "react"
import { RoundedProgressBar } from "../reusables/nonformcomponent/RoundedProgressBar";

export const Home = () => {

  const[totalmem, setTotalmem] = useState<number>(0);
  const[totalfemale, setTotalfemale] = useState<number>(0);
  const[totalmale, setTotalmale] = useState<number>(0);
  const[loading, setLoading] = useState<boolean>(false);
 
  const handlemembercount = async()=>{
     try{
      setLoading(true);
      const response = await axios.get("http://localhost:4000/allmemberscount");

      if(response && response?.data.code == 200){
        setTotalmem(response?.data?.count);
      }

     }catch(error:any){
       console.error(error.response); 
     }finally{
      setLoading(false);
     }
  }; 

  //handle female count
  const handlefemalecount = async()=>{
    try{
      setLoading(false);
      const response = await axios.get("http://localhost:4000/allfemalecount");

      if(response && response?.data?.code === 200){
        setTotalfemale(response?.data?.count);
      }

    }catch(err:any){
      console.error(err.response);
    }finally{
      setLoading(false);
    }
  };

  //handle male count
  const handlemalecount = async()=>{
    try{
      setLoading(false);
      const response = await axios.get("http://localhost:4000/allmales");

      if(response && response?.data?.code === 200){
        setTotalmale(response?.data?.count);
      }

    }catch(err:any){
      console.error(err.response);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    handlemembercount();
    handlefemalecount();
    handlemalecount();
  },[]);

  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

      <div className="w-full p-2 flex">
        <div className="w-1/2 text-cyan-500 font-bold">
           Family Dashboard
        </div>

        <div className="w-1/2 flex justify-end">
          <div className="w-[20%] max-sm:hidden sm:hidden lg:block">
    
          </div>

          <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
              
          </div>
        </div>
      </div>

      {/* second division */}
      <div className="
       w-full h-[40vh] 
       mt-5 p-2 shadow-sm
       border-t-4 border-t-cyan-300
       rounded grid lg:grid-cols-4
       gap-1
       ">

         <div className="h-[18vh] shadow-lg border-t-4 
           border-cyan-700 rounded-sm hover:scale-y-110
           p-2
         ">
            <p>
              <span className="font-bold">Members:</span> 
              <span className="text-cyan-600 ml-2 font-bold">{totalmem}</span>
            </p>
           
           <RoundedProgressBar progressFigure={totalmem} centerLabel={totalmem}/>

         </div>

         <div className="h-[18vh] p-2 shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">
            <p>
              <span className="font-bold">Females:</span> 
              <span className="text-cyan-600 ml-2 font-bold">{totalfemale}</span>
            </p>
           <RoundedProgressBar progressFigure={totalfemale} centerLabel={totalfemale}/>
         </div>

         <div className="h-[18vh] p-2 shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">
            <p>
              <span className="font-bold">Males:</span> 
              <span className="text-cyan-600 ml-2 font-bold">{totalmale}</span>
            </p>
           <RoundedProgressBar progressFigure={totalmale} centerLabel={totalmale}/>
         </div>

         <div className="h-[18vh] shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">

         </div>

         {/*----------second four---------*/}

         <div className="h-[18vh] shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">

         </div>

         <div className="h-[18vh] shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">

         </div>

         <div className="h-[18vh] shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">

         </div>

         <div className="h-[18vh] shadow-lg border-t-4 border-cyan-700 rounded-sm hover:scale-y-110">

         </div>

      </div>

      {/* third division */}
      <div className="
        w-full h-[40vh] 
        mt-5 p-2 
        shadow-sm
        border-t-4 border-t-cyan-300
        rounded grid lg:grid-cols-4
        ">

      </div>
        
  </div>
  )
}
