import { useEffect, useState } from 'react';
import { Inputs } from './component/reusables/formcomponents/Inputs';
import { Select } from './component/reusables/formcomponents/Select';
import { Button } from './component/reusables/formcomponents/Button';
import { SuccessBlock } from './component/reusables/components/SuccessBlock';
import { ErrorBlock } from './component/reusables/components/ErrorBlock';
import { RadioButtont } from './component/reusables/formcomponents/RadioButtont';
import {CheckBox} from './component/reusables/formcomponents/CheckBox';
import { FilesUploads } from './component/reusables/formcomponents/FilesUploads';
import { ButtonSpinner } from './component/reusables/components/ButtonSpinner';
import { TextArea } from './component/reusables/formcomponents/TextArea';
import { DashboardComponent } from './component/reusables/components/DashboardComponent';

type Option = {
  id: string;
  name: string;
};

function App() {
const[name, setName] = useState<string>("");
const [selectedGender, setSelectedGender] = useState<string>('');
  // Example array of gender options
  const genderOptions: Option[] = [
    { id: '1', name: 'Male' },
    { id: '2', name: 'Female' },
    { id: '3', name: 'Other' },
  ];

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
};

const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedGender(event.target.value);
};

const handleGenderSelect = (selectedOption: Option) => {
  console.log(selectedOption);
};

const [stats, setstats] = useState<boolean>(false);

const handleStats = ()=>{
  setstats(!stats);
  console.log(stats);
};

const [isCheckedYes, setIsCheckedYes] = useState<boolean>(false);
const [isCheckedNo, setIsCheckedNo] = useState<boolean>(false);

  const handlRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;

    if (id === 'yes') {
      setIsCheckedYes(true);

      setIsCheckedNo(false);
    } else if (id === 'no') {
      setIsCheckedNo(true);
      setIsCheckedYes(false);
    }
  }

  const [selected, setSelected] = useState<string[]>([]);

  const  handleSelected = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { id, checked } = event.currentTarget;
  
    setSelected((prevSelected) =>
      checked ? [...prevSelected, id] : prevSelected.filter((item) => item !== id)
    );
  }

  const [files, setFiles] = useState<File[]>([]);
  const [updateCounter, setUpdateCounter] = useState(0);

// Trigger a re-render
  useEffect(() => {
  }, [updateCounter]);

  //textArea
  const [textarea, setTextArea] = useState<string>("");

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setTextArea(value);
  };

  return (
    <>
    <button onClick={handleStats}>click</button>
      <div className='p-2'>
       
        <DashboardComponent 
        
        />

      </div>

    </>
  )
}

export default App
