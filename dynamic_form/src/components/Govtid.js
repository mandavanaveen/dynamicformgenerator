import React, { useState } from "react";

function Govtid() {
  const [selectedCategory, setSelectedCategory] = useState(0); // State to track the selected category

  // Define the category options
  const categories = [
    { CategoryID: 1, CategoryName: "Aadhar card proof" },
    { CategoryID: 2, CategoryName: "Pan card proof" },
    { CategoryID: 3, CategoryName: "Driving License Proof" },
  ];

  const categoryInputs = {
    1: <input type="text" placeholder="Aadhar card number" />,
    2: <input type="text" placeholder="Pan card number" />,
    3: <input type="text" placeholder="Driving License number" />,
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(parseInt(e.target.value, 10));
  };

  return (
    <div className="w-full  px-24 py-6 ">
      <div className="w-full pt-4">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold">
          Government Id proof*
        </label>
        <select
          className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value={0}>All Categories</option>
          {categories.map((item) => (
            <option
              key={item.CategoryID}
              value={item.CategoryID}
              className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
            >
              {item.CategoryName}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory !== 0 && (
        <div className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100">
          <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold">
            {
              categories.find((cat) => cat.CategoryID === selectedCategory)
                .CategoryName
            }
            Details
          </label>
          {categoryInputs[selectedCategory]}
        </div>
      )}
    </div>
  );
}

export default Govtid;
