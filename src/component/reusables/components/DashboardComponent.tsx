import React, { useState, useEffect } from 'react';

export const DashboardComponent = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(10); // Initial width percentage

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isResizing) {
      const parentWidth = document.body.clientWidth;
      const newWidth = (event.clientX / parentWidth) * 100;
      setSidebarWidth(newWidth);
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

  return (
    <div className="w-full h-screen border flex">
      <div
        className="sidebar border-2 border-[dodgerblue] overflow-auto"
        style={{
          width: `${sidebarWidth}%`, // Set the width of the sidebar
          cursor: !isResizing || isResizing ? 'ew-resize' : 'default',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Sidebar content */}
        <p className="truncate">
          somethinglooooooong
        </p>
      </div>

      <div className='right-div' style={{ width: `${rightDivWidth}%` }}>
        {/* Right div content */}
      </div>
    </div>
  );
};
