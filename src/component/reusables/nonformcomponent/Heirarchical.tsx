import React from 'react';

interface Family {
  id: number;
  label?: string;
  children?: Family[];
  handleClick?: (id: number) => void;
}

export const Heirarchical: React.FC<Family> = (props) => {
  const { id, label, children, handleClick } = props;

  const handleDivClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <div key={id} className="w-fit py-4 px-4">
      <div
        className={"text-center font-bold border-t-2 border-cyan-400 rounded p-1 cursor-pointer shadow-md"}
        onClick={handleDivClick}
      >
        {label}
      </div>
      {children && (
        <div className="flex justify-center space-x-4">
          {children.map((child) => (
            <Heirarchical key={child.id} {...child} handleClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
};
