import React, { useState, useEffect, useRef } from 'react';

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
  components:dashComponent[]
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

  return (
    <div className="w-full h-screen flex">
      <div
        ref={sidebarRef}
        className="sidebar border overflow-auto p-2 relative"
        style={{
          width: `${sidebarWidth}%`,
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
          <div className='p-2 font-semibold text-[dodgerblue]'>Dashboard</div>

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
                </div>
              ))}
      </div>

      <div className='right-div overflow-auto' style={{ width: `${rightDivWidth}%` }}>
        {/* Right div content */}
        {props.components?.map((comp, idx)=>(
        
        <div key={idx}>
         {componentName === comp.dashContentname && comp.components}
        </div>

        ))}
      </div>
    </div>
  );
};
