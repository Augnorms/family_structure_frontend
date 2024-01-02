type Itemprops = {
    id: number;
    label: string;
    logo: string | { src: string; alt?: string };
  };
  
  interface Actions {
    items: Itemprops[];
    onClick: (label:string, id:number) => void;
  }
export const ActionComp = (props:Actions) => {


  return (
    <div className='
      w-[180px] bg-white 
      shadow-md p-2 rounded-md 
      border absolute z-10
      max-sm:right-12
      md:right-12
      lg:right-[90px]
      '>
        {
            props.items.map((data, idx)=>(
              <div key={idx} className="flex font-bold 
                 hover:shadow-lg hover:rounded 
                 cursor-pointer "
                 onClick={()=> props.onClick(data.label, data.id)}
               >

                <img
                src={typeof data.logo === 'string' ? data.logo : data.logo.src}
                alt={typeof data.logo === 'string' ? data.label : data.logo.alt}
                />
                <div className="w-[80%] text-center p-1 text-cyan-800">{data.label}</div>

              </div>  
            ))
        }
    </div>
  )
}
