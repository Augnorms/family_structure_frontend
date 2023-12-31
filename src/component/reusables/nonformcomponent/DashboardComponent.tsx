import React, { useState, useEffect, useRef } from 'react';
import circlearrow from "../assets/circle-right-arrow.svg";
import { Home } from '../../nonreusables/Home';
import { Family_structure } from '../../nonreusables/Family_structure';
import { Settings } from '../../nonreusables/Settings';
interface dashContent{
  image:string,
  content:string,
}

interface dashComponent {
  dashContentname: string;
  components: React.ReactElement; // Corrected the type to React.ReactElement
}

type DashboardProps = {
  content:dashContent[],
  components:dashComponent[],
  dropdown_name?:string
}

export const DashboardComponent = (props:DashboardProps) => {
 
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(15); // Initial width percentage
  const [onRightBorder, setOnRightBorder] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [componentName, setComponentName] = useState<string>(props.components?.[0]?.dashContentname || "")//initialize first index

  const handleOnMouseEnter = (event: React.MouseEvent) => {
    if (sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const isOverRightBorder = event.clientX > sidebarRect.right - 5;

      setOnRightBorder(isOverRightBorder);
    }
  };

  const handleOnMouseLeave = () => {
    setOnRightBorder(false);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Check if the mouse is over the right border
    if (sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const isOverRightBorder = event.clientX > sidebarRect.right - 5; // Adjust the threshold as needed

      if (isOverRightBorder) {
        setIsResizing(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isResizing && sidebarRef.current) {
      const parentWidth = document.body.clientWidth;
      const minWidth = 10;
      const maxWidth = 30;
  
      // Calculate the new width
      let newWidth = (event.clientX / parentWidth) * 100;
  
      // Ensure the new width is within the limits
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
  
      setSidebarWidth(newWidth);
    } else {
      if (sidebarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const isOverRightBorder = event.clientX > sidebarRect.right - 5;
  
        setOnRightBorder(isOverRightBorder);
      }
    }
  };
  

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isResizing) {
        setIsResizing(false);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isResizing]);

  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      handleMouseMove(event as unknown as React.MouseEvent);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isResizing, handleMouseMove]);

  const rightDivWidth = 100 - sidebarWidth;

  //function to handle change
  const handlecomponent = (name:string)=>{
       setComponentName(name)

  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', updateWidth);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [width]);

  const[medDasboard, setMedDashboard] = useState<string>("Home");

  useEffect(()=>{
    if(props.dropdown_name){
      setMedDashboard(props.dropdown_name);
    }
  },[props.dropdown_name]);

  return (
    <div className="w-full h-[92vh] flex gap-1">
      
      <div
        ref={sidebarRef}
        className="max-sm:hidden sm:hidden md:hidden lg:block sidebar border overflow-auto p-2 relative"
        style={{
          width: `${sidebarWidth}%`,
          height:'92vh',
          cursor: onRightBorder ? 'ew-resize' : 'default',
          borderRight: onRightBorder ? '3px solid dodgerblue' : ''
        }}
        onMouseEnter={handleOnMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleOnMouseLeave}
      >
        {/* Sidebar content */}
          <div className='p-2 font-semibold text-[dodgerblue] underline'>Dashboard</div>

              {props.content?.map((data, idx) => (
                <div className='p-2 mb-1 flex gap-2' key={idx}>
                  <p className='
                    w-8 h-8 shadow-md 
                    rounded-full border
                    flex
                    justify-center
                    items-center
                  '>
                    {/* image goes here */}
                    <img
                      src={data.image}
                      alt={data.content+"image"}
                      className='w-8 h-8 shadow-md rounded-full border flex justify-center items-center'
                    />
                  </p>
                  <p className='
                    pr-1 pl-2 
                    h-8 
                    truncate 
                    rounded 
                    cursor-pointer
                    hover:text-[deeppink]
                  '
                   style={{
                     color: componentName === data.content ? 'dodgerblue': ''
                    }}
                   onClick={() => handlecomponent(data.content)}
                  >
                    {data.content}                  
                  </p>

                  {componentName === data.content ? <div>
                    <img src={circlearrow} alt='arrow' />
                  </div> : <div></div>}
                </div>
              ))}
      </div>

      {width <= 1000
          ?
        <div className='w-full h-screen bg-white' style={{ ...(width <= 1000 && { width: '100%' }),}}>
           {
             medDasboard === "Home" ? <Home /> : medDasboard === "Members" ? <Family_structure /> 
             : medDasboard === "Settings" ? <Settings /> : <div></div>
           } 
        </div>
        :
        <div className={'right-div  rounded shadow-md'} style={{ width: `${rightDivWidth}%`, height:'92vh'}}>
        {/* Right div content */}
        {props.components?.map((comp, idx) => (
          <div key={idx}>
            {(componentName === comp.dashContentname) && (
              <div>
                {comp.components}
              </div>
            )}
          </div>
        ))}

      </div>}

    </div>
  );
};
