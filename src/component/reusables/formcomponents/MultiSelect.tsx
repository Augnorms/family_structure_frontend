
interface CheckboxOptionProps {
  innerProps: any;
  label: string;
  isSelected: boolean; 
}

const CheckboxOption = ({ innerProps, label, isSelected }:CheckboxOptionProps) => (
  <div {...innerProps}>
    <input type="checkbox" checked={isSelected} onChange={() => {}} />
    <label>{label}</label>
  </div>
);

export default CheckboxOption;
