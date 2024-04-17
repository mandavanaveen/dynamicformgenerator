import React, {useState} from 'react'
import Govtid from './Govtid'

function Experience() {
  //time
  const [RestrictTime, setRestrictTimee] = useState(false)
  const handleRestrictTimee = value => {
    value === 'No' ? setRestrictTimee(false) : setRestrictTimee(true)
  }

  //   //catergory options
  //   const Categories = [
  //     {CategoryID: 1, CategoryName: 'Aadhar card proof'},
  //     {CategoryID: 2, CategoryName: 'Pan card proof'},
  //     {CategoryID: 3, CategoryName: 'Drivig License Proof'},
  //     // Add more categories as needed
  //   ]

  //   const [CategoryID, setCat] = useState(1)
  //   const setSelectedCatagory = value => {
  //     setCat(value)
  //   }

  //Description
  const [Description, setDescription] = useState('')
  const handleAssessmnetDescriptionChange = value => {
    setDescription(value)
  }
  return (
    <div className="w-full justify-center px-24 py-6 bg-white transition-colors duration-100 hover:bg-slate-200 ">
      <div className="w-full pt-4">
        <label className="flex space-x-2 text-[#020A12BD] font-semibold pb-1">
          Do you have Experience
        </label>
        <div className="lg:w-full flex gap-4 mt-1.5">
          <div className="w-full border  bg-white rounded-lg">
            <label className="inline-flex space-x-2 p-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70  bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="TimeL"
                type="radio"
                onClick={() => handleRestrictTimee('Yes')}
              />
              <p>Yes</p>
            </label>
          </div>
          <div className="w-full border bg-white rounded-lg">
            <label className="inline-flex space-x-2 p-2 ">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full  border-slate-400/70  bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="TimeL"
                type="radio"
                onClick={() => handleRestrictTimee('No')}
              />
              <p>No</p>
            </label>
          </div>
        </div>
      </div>
      {RestrictTime && (
        <>
          <div className="w-full pt-4">
            <label className="flex items-center  text-[#020A12BD] font-semibold pb-1">
              How many years of experience you have
            </label>
            <div className="w-full  flex">
              <label className="relative flex w-full ">
                <input
                  type="Number"
                  className="form-input  mt-1.5 peer w-full rounded-lg border  bg-white border-slate-300 px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Years"
                />
              </label>
            </div>
          </div>

          <div className="w-full pt-6">
            <label className="inline-flex items-center space-x-2 text-black font-semibold">
              Work Experience
            </label>
            <textarea
              rows={3}
              id="courseOverview"
              className={`form-input mt-1.5 w-full rounded-md border  border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100`}
              placeholder="Description"
              onChange={e => handleAssessmnetDescriptionChange(e.target.value)}
              value={Description}
              required
            />
          </div>
        </>
      )}

      {/* <div className="w-full pt-4">
            <label className="inline-flex items-center space-x-2 pb-2 text-black font-semibold">
            Government Id proof*
            </label>
            <select
            className={`form-select cursor-pointer text-sm w-full rounded-lg border px-2 pr-6 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent`}
            onChange={e => setSelectedCatagory(parseInt(e.target.value, 10))}
            value={CategoryID}
            >
            <option value={0}>{'All Categories'}</option>
            {Categories.map(item => (
                <option value={item.CategoryID}>{item.CategoryName}</option>
            ))}
            </select>
        </div> */}
      <Govtid />
    </div>
  )
}

export default Experience
