
interface CheckboxOptionProps {
  innerProps: any;
  label: string;
  isSelected: boolean; 
}

const CheckboxOption = ({ innerProps, label, isSelected }:CheckboxOptionProps) => (
  <div {...innerProps} className="p-2">
    <input type="checkbox" className=" mr-2" checked={isSelected} onChange={() => {}} />
    <label>{label}</label>
  </div>
);

export default CheckboxOption;
