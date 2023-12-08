import { useState } from 'react';
import { Inputs } from './component/reusables/formcomponents/Inputs';
import { Select } from './component/reusables/formcomponents/Select';

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

  return (
    <>
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
          showPaswword={false}
          value={name}
          onChange={handleChange}
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
      </div>

     
    </>
  )
}

export default App
