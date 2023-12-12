import { useEffect, useState } from 'react';
import { Inputs } from './component/reusables/formcomponents/Inputs';
import { Select } from './component/reusables/formcomponents/Select';
import { Button } from './component/reusables/formcomponents/Button';
import { SuccessBlock } from './component/reusables/components/SuccessBlock';
import { ErrorBlock } from './component/reusables/components/ErrorBlock';
import { RadioButtont } from './component/reusables/formcomponents/RadioButtont';
import {CheckBox} from './component/reusables/formcomponents/CheckBox';
import { FilesUploads } from './component/reusables/formcomponents/FilesUploads';

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


  return (
    <>
    <button onClick={handleStats}>click</button>
      <div className='p-2'>
          <Inputs 
          type='text' 
          style='
          w-full border border-[#d8dae5] 
          pl-10 p-2.5
          hover:border-[#8F95B2] 
          focus:outline-[#E47A53] 
          focus:ring-3 focus:ring-[#F2BEAB] 
          txt-field-style peer text-gray-900 
          text-sm block  dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]'
          labelOne='Name'
          placeholder='Enter your name'
          labelTwo='Required'
          addpasswordVisibility={true}
          showPaswword={true}
          value={name}
          onChange={handleChange}
          useIcons
          iconUserPass
        />
        {name}

        <Select 
          labelOne='Gender'
          placeholder='Select your gender'
          style='
          w-full border border-[#d8dae5] 
          pl-10 p-2.5
          hover:border-[#8F95B2] 
          rounded-lg focus:outline-[#E47A53] 
          focus:ring-3 focus:ring-[#F2BEAB] 
          txt-field-style peer text-gray-900 
          text-sm block  dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]'
          data={genderOptions}
          value={selectedGender}
          onChange={handleGenderChange}
          onSelect={handleGenderSelect}
        />
        {selectedGender}

        <Button 
          label={'add account'}
          styles='resize border p-2 mt-2 bg-[dodgerblue] text-[white] rounded'
          disabled={true}
          loading={false}
        />

        {/* <SuccessBlock 
         blockControl={stats}
         message='success'  
        /> */}

        <ErrorBlock 
         blockControl={stats}
         message='Falied' 
        />

        <RadioButtont 
          style='
          focus:ring-[#F2BEAB] 
          accent-pink-500
          md:accent-pink-500
          focus:accent-pink-500
          '
          label='Yes'
          fieldid='yes'
          labelStyle='text-gray-900 font-bold'
          isChecked={isCheckedYes}
          onSelect={handlRadio}
        />

        <RadioButtont 
          style='
          focus:ring-[#F2BEAB] 
          accent-pink-500
          md:accent-pink-500
          focus:accent-pink-500
          '
          label='No'
          fieldid='no'
          labelStyle='text-gray-900 font-bold'
          isChecked={isCheckedNo}
          onSelect={handlRadio}
        />

        <CheckBox
         style='
         focus:ring-[#F2BEAB] 
         accent-pink-500
         md:accent-pink-500
         focus:accent-pink-500
         '
         label='August'
         fieldid='august'
         labelStyle='text-gray-900 font-bold'
         onSelect={handleSelected}
        />

        <CheckBox
         style='
         focus:ring-[#F2BEAB] 
         accent-pink-500
         md:accent-pink-500
         focus:accent-pink-500
         '
         label='September'
         fieldid='september'
         labelStyle='text-gray-900 font-bold'
         onSelect={handleSelected}
        />

        <FilesUploads 
          fileInput='fileinputone'
          fileData={files}
          setUpdateCounter={setUpdateCounter}
          setFiles={setFiles}  
       />
        

      </div>

    </>
  )
}

export default App
