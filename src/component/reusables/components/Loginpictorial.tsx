import money from "../assets/money.svg";
import wallete from "../assets/wallet.svg";

export const Loginpictorial = () => {
  return (
    <div className='w-full h-screen'>
      <div className='container mx-auto mt-44'>
        <div className='w-full flex justify-evenly justify-center mb-10'>
          <div className='w-20 h-20 rounded-full border shadow-md flex justify-center items-center'>
            <img src={money} alt={`Image ${money}`} />
          </div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>
          <img src={wallete} alt={`Image ${wallete}`} />
          </div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>03</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>04</div>
        </div>
        

        <div className='w-full flex justify-evenly justify-center mb-10'>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>01</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>02</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>03</div>
          <div className='w-20 h-20 rounded-full border shadow-md flex justify-center items-center'>04</div>
        </div>

   

        <div className='w-full flex justify-evenly justify-center mb-28'>
          <div className='w-20 h-20 rounded-full border shadow-md flex justify-center items-center'>01</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>02</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>03</div>
          <div className='w-20 h-20  rounded-full border shadow-md flex justify-center items-center'>04</div>
        </div>

      </div>
    </div>
  );
};
