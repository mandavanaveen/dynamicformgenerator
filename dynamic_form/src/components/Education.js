import React from "react";

function Education({
  isStudying,
  handleGraduation,
  email,
  setEmail,
  institution,
  setInstitution,
  percentage,
  setPercentage,
  graduatedYear,
  setGraduatedYear,
}) {
  return (
    <div className="w-full justify-center px-24 py-6 bg-white transition-colors duration-100 hover:bg-slate-200">
      <div className="w-full">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
          Email:
        </label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full pt-4">
        <label className="flex space-x-2 text-[#020A12BD] font-semibold pb-1">
          Graduated
        </label>
        <div className="lg:w-full flex gap-4 mt-1.5">
          <div className="w-full border bg-white rounded-lg">
            <label className="inline-flex space-x-2 p-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70  bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="GY"
                type="radio"
                checked={isStudying}
                onChange={() => handleGraduation("Yes")}
              />
              <p>Yes</p>
            </label>
          </div>
          <div className="w-full border bg-white rounded-lg">
            <label className="inline-flex space-x-2 p-2 ">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full  border-slate-400/70  bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="GN"
                type="radio"
                checked={!isStudying}
                onChange={() => handleGraduation("No")}
              />
              <p>No</p>
            </label>
          </div>
        </div>
      </div>

      {isStudying && (
        <div className="w-full pt-4">
          <label className="flex items-center  text-[#020A12BD] font-semibold pb-1">
            Institution/College
          </label>
          <div className="w-full  flex">
            <input
              type="text"
              className="form-input  mt-1.5 peer w-full rounded-lg border  bg-white border-slate-300 px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Institution/College"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>

          <div className="w-full pt-6 ">
            <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold">
              Percentage/GPA
            </label>
            <input
              type="number"
              className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
              placeholder="EX:- 75% or 7.5"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>

          <label className="flex items-center pt-2 text-[#020A12BD] font-semibold pb-1">
            Graduated year
          </label>
          <div className="w-full flex">
            <input
              type="number"
              className="form-input  mt-1.5 peer w-full rounded-lg border  bg-white border-slate-300 px-3 py-2 pr-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="YYYY"
              min="1900"
              max="2099"
              value={graduatedYear}
              onChange={(e) => setGraduatedYear(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Education;
