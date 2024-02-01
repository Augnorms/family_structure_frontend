import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../../contextApi/LoginPictorialContext";
import Mamaa from "../../../assets/mamaa2.jpg";
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

  //use context used for managing components
  const {setfamilyNames} = useContext(LoginContext);
  
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
    }, 5000);
  
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [indicator]);

  if (indicator === 1) setfamilyNames("Dorothy Payne");
  else if (indicator === 2) setfamilyNames("Florence Austin");
  else if (indicator === 3) setfamilyNames("Josephine Quaicoe");
  else if (indicator === 4) setfamilyNames("James Quaicoe");
  else if (indicator === 5) setfamilyNames("Ruth Aboah");
  else if (indicator === 6) setfamilyNames("Richard Torkonoo");
  else if (indicator === 7) setfamilyNames("Roberta Torkonoo");
  else if (indicator === 8) setfamilyNames("Reginald Torkonoo");
  else if (indicator === 9) setfamilyNames("Nelly Djuckey");
  else if (indicator === 10) setfamilyNames("Augustine Normanyo");
  else if (indicator === 11) setfamilyNames("Dorothy Payne");
  else if (indicator === 12) setfamilyNames("Roseline Torkornoo");
  else if (indicator === 13) setfamilyNames("Ruth Djuckey");
  else if (indicator === 14) setfamilyNames("Florence Normanyo");
  else if (indicator === 15) setfamilyNames("Dorothy Payne");
  else setfamilyNames("");
  
 
  return (
    <div className='w-full'>
      <div className='container mx-auto mt-24 bg-white p-5 shaow-md rounded-md  bg-gradient-to-r from-white to-cyan-500'>
        <div className='w-full flex justify-center mb-10'>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 1 ? 'bg-cyan-300 animate-ping' : ''
          }`} >
            <img src={Mamaa} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Mamaa}`} />
          </div>
        </div>
        
        <div className='w-full flex gap-14 justify-center mb-10'>
          <div 
           className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 2 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Florence} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Florence}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 3 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Joe} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Joe}`} />
          </div>
        </div>

        <div className='w-full flex gap-14 justify-center mb-10'>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 4 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={James} className="w-14 h-14 object-fill rounded-full" alt={`Image ${James}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 5 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={RuthEfua} className="w-14 h-14 object-fill rounded-full" alt={`Image ${RuthEfua}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 6 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={Rich} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Rich}`} />
          </div>
        </div>

        <div className='w-full flex gap-14 justify-center mb-10'>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 7 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Aku} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Aku}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 8 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Reggie} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Reggie}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 9 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Nelly} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Nelly}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 10 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Augu} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Augu}`} />
          </div>
        </div>

        <div className='w-full flex gap-14 justify-center mb-10'>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 11 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mamaa} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Mamaa}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 12 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mameesi} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Mameesi}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 13 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Ruth} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Ruth}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 14 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Awo} className="w-14 h-14 object-fill rounded-full" alt={`Image ${Awo}`} />
          </div>
          <div className={`w-14 h-14 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 15 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={Mamaa} className=" w-14 h-14 object-fill rounded-full " alt={`Image ${Mamaa}`} />
          </div>
        </div>

      </div>
    </div>
  );
};
