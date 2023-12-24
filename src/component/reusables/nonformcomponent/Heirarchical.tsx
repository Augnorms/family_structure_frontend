

interface Node {
  id: number;
  label?: string;
  children?: Node[];
  handleClick?:(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
}

const RecursiveHeirarchy = (props: Node) => {
  return (
    <div className='w-full flex'>
      {props.children?.map((child, idx) => (
        <div className='w-full border border-[dodgerblue] p-1 shadow-md rounded-md m-1 mt-10' key={idx}>
          <div className='w-full p-1 text-center text-[dodgerblue] font-bold truncate'>{child.label}</div>
          <div className='flex justify-center'>
            <div className='
             w-10 h-10 rounded-full flex justify-center items-center border shadow-md
             cursor-pointer
             '
             id={String(child.id)}
             onClick={(event) => props.handleClick?.(event)}
             >
              {child.id}
            </div>
          </div>

          {/* Recursive call for great-grandchildren */}
          <RecursiveHeirarchy {...child} handleClick={props.handleClick}/>
        </div>
      ))}
    </div>
  );
};

export const Heirarchical = (props: Node) => {
  return (
    <div className='w-full truncate '>
      <div className='w-full '>
        <div className='w-full p-1 border-b-1 text-center text-[dodgerblue]'></div>
        <div className='w-full flex justify-center'>
          <div className='w-10 h-10 flex justify-center items-center rounded-full border hidden'>
          </div>
        </div>
      </div>

      {/* Render children */}
      <div className='w-full flex overflow-auto p-5'>
        {props.children?.map((child, idx) => (
          <div className='w-full border border-[dodgerblue] p-1 shadow-md rounded-md m-1' key={idx}>
            <div className='w-full p-1 text-center text-[dodgerblue] font-bold truncate '>{child.label}</div>
              <div className='flex justify-center'>
                <div 
                className='
                  w-10 h-10 rounded-full flex justify-center items-center border shadow-md
                  cursor-pointer
                '
                id={String(child.id)}
                onClick={(event) => props.handleClick?.(event)}
                >
                  {child.id}
                  
                </div>
              </div>
           

            {/* Render call for grandchildren */}
            <div className='w-full flex'>
              {child.children?.map((g_child, g_idx) => (
                <div className='w-full border border-[dodgerblue] p-1 shadow-md rounded-md m-1 mt-10' key={g_idx}>
                  <div className='w-full p-1  text-center text-[dodgerblue] font-bold truncate'>{g_child.label}</div>
                  <div className=' flex justify-center'>
                    <div className='
                     w-10 h-10 rounded-full flex justify-center items-center border shadow-md
                     cursor-pointer 
                     '
                     id={String(g_child.id)}
                     onClick={(event) => props.handleClick?.(event)}
                     >
                      {g_child.id}
                    </div>
                  </div>

                  {/* Recursive call for great-grandchildren */}
                  <RecursiveHeirarchy {...g_child} handleClick={props.handleClick}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
