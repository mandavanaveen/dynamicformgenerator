import React from "react";

function Numberfield({
  phoneNumber,
  country,
  state,
  city,
  handlePhoneNumberChange,
  handleCountryChange,
  handleStateChange,
  handleCityChange,
}) {
  return (
    <div className=" w-full px-24 py-6 flex flex-col gap-5 justify-center bg-white transition-colors duration-100 hover:bg-slate-200 p-4">
      <div className="phnumber w-full">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
          Phone Number
        </label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="9876543210"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10))
          }
        />
      </div>

      <div className="country w-full">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
          Country
        </label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- India"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="State w-full">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
          State
        </label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- Telangana"
          value={state}
          onChange={handleStateChange}
        />
      </div>
      <div className="City w-full">
        <label className="flex items-center space-x-2 text-[#020A12BD] font-semibold pb-1">
          City
        </label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- Hyderabad"
          value={city}
          onChange={handleCityChange}
        />
      </div>
    </div>
  );
}

export default Numberfield;
