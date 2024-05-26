import React, { useEffect, useState } from 'react';

export default function AddInternship() {
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedSkill, setSelectedSkill] = useState('NONE');

  const [data, setData] = useState({ Title: '', Starting_Date: '', Ending_Date: '', Gender: 'ALL', Image_url: 'xyz', Description: '', Branch: 'ALL', Skills: 'NONE' });
  const { Title, Starting_Date, Ending_Date, Gender, Image_url, Description, Branch, Skills } = data;

  // const StartingDateHandler=(e)=>{
  //   setData((m)=>({...data, Starting_Date:e.target.value}));
  // }
  // const EndingDateHandler=(e)=>{
  //   setData((m)=>({...data, Ending_Date:e.target.value}));
  // }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(Description);
  };


  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(data);

  }
  /*
     Title, Starting Date, Ending Date, Gender, Image, Description, Branch, Skills
  */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBranchClick = () => {
    if ((isBranchOpen === false && isSkillsOpen === true) || (isBranchOpen === isSkillsOpen)) {
      setIsBranchOpen(true);
      setIsSkillsOpen(false);
    }
    else {
      setIsBranchOpen(!isBranchOpen);
    }
  };

  const handleSkillsClick = () => {
    if ((isBranchOpen === true && isSkillsOpen === false) || (isBranchOpen === isSkillsOpen)) {
      setIsBranchOpen(false);
      setIsSkillsOpen(true);
    }
    else if ((isSkillsOpen === true)) {
      setIsSkillsOpen(false);
    }
    else {
      setIsBranchOpen(!isSkillsOpen);
    }
  };

  const handleOptionClick = (value) => {
    setSelectedBranch(value);
    setData((prevData) => ({ ...prevData, Branch: value }));
    setIsBranchOpen(false);
    setIsSkillsOpen(false);
  };

  const handleSkillsClickSelect = (value) => {
    setSelectedSkill(value);
    setData((prevData) => ({ ...prevData, Skills: value }));
    setIsSkillsOpen(false);
    setIsBranchOpen(false);
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Adding Internship Details</h2>
          </div>

          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="Title" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title*</label>
              <input name="Title" onChange={changeHandler} value={Title} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label for="Starting_Date" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Starting Date*</label>
              <input name="Starting_Date" onChange={changeHandler} value={Starting_Date} type="date" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label for="Ending_Date" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ending Date*</label>
              <input name="Ending_Date" onChange={changeHandler} value={Ending_Date} type="date" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label for="Gender" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Gender*</label>
              <div className="flex flex-row">
                <input name="Gender" type="radio" onClick={(e) => { setData({ ...data, Gender: 'Male' }) }} class="px-3 py-3 mr-1" />Male
                <input name="Gender" type="radio" onClick={(e) => { setData({ ...data, Gender: 'Female' }) }} class="px-3 py-3 ml-4 mr-1" />Female
                <input name="Gender" type="radio" onClick={(e) => { setData({ ...data, Gender: 'Both' }) }} class="px-3 py-3 ml-4 mr-1" />Both
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="image" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image</label>
              <input name="image" type="file" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div class="sm:col-span-2">
              <label for="Description" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description*</label>
              <textarea name="Description" onChange={changeHandler} value={Description} class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
            </div>

            <div className="relative mt-2">
              <label htmlFor="Branch" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Branch*</label>
              <button type="button" name='Branch' onClick={handleBranchClick} className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded={isBranchOpen} aria-labelledby="listbox-label">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selectedBranch || 'ALL'}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {isBranchOpen && (
                <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <li onClick={() => handleOptionClick('CSE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">CSE</span>
                    </div>

                  </li>
                  <li onClick={() => handleOptionClick('ECE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">ECE</span>
                    </div>

                  </li>
                  <li onClick={() => handleOptionClick('EEE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">EEE</span>
                    </div>

                  </li>

                  <li onClick={() => handleOptionClick('MECH')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">MECH</span>
                    </div>

                  </li>

                  <li onClick={() => handleOptionClick('ALL')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">ALL</span>
                    </div>

                  </li>
                </ul>
              )}
            </div>

            <div className="relative mt-2">
              <label htmlFor="SkillsRequired" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">SkillsRequired*</label>
              <button type="button" name='Branch' onClick={handleSkillsClick} className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded={isSkillsOpen} aria-labelledby="listbox-label">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selectedSkill || 'NONE'}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {isSkillsOpen && (
                <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <li onClick={() => handleSkillsClickSelect('CSE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">CSE</span>
                    </div>

                  </li>
                  <li onClick={() => handleSkillsClickSelect('ECE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">ECE</span>
                    </div>

                  </li>
                  <li onClick={() => handleSkillsClickSelect('EEE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">EEE</span>
                    </div>

                  </li>

                  <li onClick={() => handleSkillsClickSelect('MECH')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">MECH</span>
                    </div>

                  </li>

                  <li onClick={() => handleSkillsClickSelect('NONE')} className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option" aria-selected="false">
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">ALL</span>
                    </div>

                  </li>
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button type="button" onClick={loginHandler} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
              <span className="text-sm text-gray-500">*Required</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
