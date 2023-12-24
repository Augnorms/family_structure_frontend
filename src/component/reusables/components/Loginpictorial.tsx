import { useEffect, useState } from "react";
import money from "../assets/money.svg";


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
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
        </div>
        
        <div className='w-full flex gap-20 justify-center mb-10'>
          <div 
           className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 2 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 3 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 4 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 5 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 6 ? 'bg-cyan-300 animate-ping' : ''
          }`}
          >
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 7 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 8 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 9 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 10 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
        </div>

        <div className='w-full flex gap-20 justify-center mb-10'>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 11 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 12 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 13 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 14 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
          <div className={`w-20 h-20 rounded-full border shadow-md flex justify-center items-center ${
            indicator === 15 ? 'bg-cyan-300 animate-ping' : ''
          }`}>
            <img src={money} className="object-contain" alt={`Image ${money}`} />
          </div>
        </div>

      </div>
    </div>
  );
};
