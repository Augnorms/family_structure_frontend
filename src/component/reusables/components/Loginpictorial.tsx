import { useEffect, useState } from "react";
import Mamaa from "../../../assets/Mamaa2.jpg";
import Florence from "../../../assets/auntFlo.jpg";
import James  from "../../../assets/james2.jpg";
import Joe from "../../../assets/Joe.jpg";
import RuthEfua from "../../../assets/Ruth maa.jpg";
import Rich from "../../../assets/Rich.jpg";
import Aku from "../../../assets/aku.jpg";
import Reggie from "../../../assets/regi.jpg";
import Nelly from "../../../assets/Nelly.jpg";
import Augu from "../../../assets/augu.jpg";
import Mameesi from "../../../assets/maaEsi.jpg";
import Ruth from "../../../assets/Ruth.jpg";
import Awo from "../../../assets/awo.jpg";

export const Loginpictorial = () => {

  const [indicator, setIndicator] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Check if the indicator is less than or equal to 5
      if (indicator <= 14) {
        setIndicator((prevIndicator) => prevIndicator + 1);
      } else {
        // If the indicator reaches 6, reset it to 0
        setIndicator(1);
      }
    }, 2000);
  
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [indicator]);

 
  return (
    <div className='w-full h-screen'>
      <div className='container mx-auto mt-24'>
        <div className='w-full flex justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 1 ? 'bg-cyan-300 animate-ping' : ''
          }`} >
            <img src={Mamaa} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Mamaa}`} />
          </div>
        </div>
        
        <div className='w-full flex gap-20 justify-center mb-10'>
          <div 
           className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 2 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Florence} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Florence}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 3 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Joe} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Joe}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 4 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={James} className="w-20 h-20 object-fill rounded-full" alt={`Image ${James}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 5 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={RuthEfua} className="w-20 h-20 object-fill rounded-full" alt={`Image ${RuthEfua}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 6 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Rich} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Rich}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 7 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Aku} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Aku}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 8 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Reggie} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Reggie}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 9 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Nelly} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Nelly}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 10 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Augu} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Augu}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 11 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mamaa} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Mamaa}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 12 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mameesi} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Mameesi}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 13 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Ruth} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Ruth}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 14 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Awo} className="w-20 h-20 object-fill rounded-full" alt={`Image ${Awo}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 15 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mamaa} className=" w-20 h-20 object-fill rounded-full " alt={`Image ${Mamaa}`} />
          </div>
        </div>

      </div>
    </div>
  );
};
