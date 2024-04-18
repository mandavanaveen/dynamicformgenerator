import React from "react";

function Experience({
  hasExperience,
  setHasExperience,
  experienceYears,
  setExperienceYears,
  experienceDescription,
  setExperienceDescription,
  selectedGovernmentIdCategory,
  setSelectedGovernmentIdCategory,
  governmentIdNumber,
  setGovernmentIdNumber,
}) {
  const handleExperi = (value) => {
    setHasExperience(value === "Yes");
  };

  const handleYearsChange = (e) => {
    setExperienceYears(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setExperienceDescription(e.target.value);
  };

  const categories = [
    { CategoryID: 1, CategoryName: "Aadhar card proof" },
    { CategoryID: 2, CategoryName: "Pan card proof" },
    { CategoryID: 3, CategoryName: "Driving License Proof" },
  ];

  const categoryInputs = {
    1: (
      <input
        type="text"
        placeholder="Aadhar card number (e.g., 1234 5678 9012)"
        value={governmentIdNumber}
        onInput={(e) =>
          (e.target.value = setGovernmentIdNumber(
            e.target.value.replace(/\D/g, "").slice(0, 12)
          ))
        }
        // onChange={(e) => setGovernmentIdNumber(e.target.value)}
        pattern="\d{4} \d{4} \d{4}"
        className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
      />
    ),
    2: (
      <input
        type="text"
        placeholder="Pan card number (e.g., ABCDE1234F)"
        value={governmentIdNumber}
        onChange={(e) => setGovernmentIdNumber(e.target.value)}
        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
        className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
      />
    ),
    3: (
      <input
        type="text"
        placeholder="Driving License number (e.g., DL-1234567890123)"
        value={governmentIdNumber}
        onChange={(e) => setGovernmentIdNumber(e.target.value)}
        pattern="DL-[0-9]{13}"
        className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
      />
    ),
  };

  const handleCategoryChange = (e) => {
    setSelectedGovernmentIdCategory(parseInt(e.target.value, 10));
  };

  return (
    <div className="w-full border-b-2 border-slate-150 justify-center px-24 py-6 bg-white transition-colors duration-100 hover:bg-slate-200">
      <div className="w-full">
        <label className="flex space-x-2 text-[#020A12BD] font-semibold pb-1">
          Do you have Experience
        </label>
        <div className="lg:w-full flex gap-4 mt-1.5">
          <div className="w-full border bg-white rounded-lg">
            <label className="inline-flex space-x-2 p-2">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="EY"
                type="radio"
                checked={hasExperience}
                onChange={() => handleExperi("Yes")}
              />
              <p>Yes</p>
            </label>
          </div>
          <div className="w-full border bg-white rounded-lg ">
            <label className="inline-flex space-x-2 p-2 ">
              <input
                className="form-radio is-basic h-5 w-5 rounded-full border-slate-400/70 bg-white checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="EN"
                type="radio"
                checked={!hasExperience}
                onChange={() => handleExperi("No")}
              />
              <p>No</p>
            </label>
          </div>
        </div>
      </div>

      {hasExperience && (
        <>
          <div className="w-full pt-4">
            <label className="flex items-center text-[#020A12BD] font-semibold pb-1">
              How many years of experience do you have
            </label>
            <div className="w-full flex">
              <label className="relative flex w-full">
                <input
                  type="number"
                  className="form-input mt-1.5 peer w-full rounded-lg border bg-white border-slate-300 px-3 py-2 pr-9 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Years"
                  value={experienceYears}
                  onChange={handleYearsChange}
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
              className="form-input mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
              placeholder="Description"
              onChange={handleDescriptionChange}
              value={experienceDescription}
              required
            />
          </div>
        </>
      )}

      <div className="w-full ">
        <div className="w-full pt-4">
          <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
            Government Id proof
          </label>
          <select
            className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
            onChange={handleCategoryChange}
            value={selectedGovernmentIdCategory}
          >
            <option value={0}>All Categories</option>
            {categories.map((item) => (
              <option
                key={item.CategoryID}
                value={item.CategoryID}
                className="form-input mt-1.5 w-full rounded-md bg-white border-slate-300 px-3 py-2 placeholder-text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
              >
                {item.CategoryName}
              </option>
            ))}
          </select>
        </div>
        {selectedGovernmentIdCategory !== 0 && (
          <div className="form-input mt-1.5 w-full rounded-md py-2 disabled:bg-zinc-100">
            {categoryInputs[selectedGovernmentIdCategory]}
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
