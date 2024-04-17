import React from "react";

function DynamicFields({
  fields,
  handleAddField,
  handleRemoveField,
  handleChange,
}) {
  return (
    <div className="w-full gap-20 justify-center bg-white transition-colors duration-100 hover:bg-slate-200 p-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex justify-between gap-10 m-2">
          <label
            htmlFor={`label-${field.id}`}
            className="flex items-center pt-2 text-[#020A12BD] font-semibold pb-1"
          >
            Profile
          </label>
          <input
            type="text"
            id={`label-${field.id}`}
            value={field.label}
            placeholder="Ex:- LinkedIn"
            className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
            onChange={(e) => handleChange(field.id, "label", e)}
          />
          <label
            htmlFor={`value-${field.id}`}
            className="flex items-center pt-2 text-[#020A12BD] font-semibold pb-1"
          >
            URL
          </label>
          <input
            type="text"
            id={`value-${field.id}`}
            value={field.value}
            className="form-input mt-1.5  w-full rounded-md border  bg-white border-slate-300  px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
            onChange={(e) => handleChange(field.id, "value", e)}
            placeholder="https://www.linkedin.com/in/username"
          />
          {index !== 0 ? (
            <button
              className="mt-2 bg-red-800/40 px-1 h-10  rounded-lg"
              onClick={() => handleRemoveField(field.id)}
            >
              Remove
            </button>
          ) : (
            <div className="pr-16"></div>
          )}
        </div>
      ))}
      <button
        onClick={handleAddField}
        className="mt-10 bg-blue-800/40 p-2 rounded-lg"
      >
        Add More
      </button>
    </div>
  );
}

export default DynamicFields;
