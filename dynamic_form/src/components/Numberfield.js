import React from 'react'

function Numberfield() {
  return (
    <div className=" w-full flex flex-col gap-5 justify-center bg-white transition-colors duration-100 hover:bg-slate-200 p-4">
      <div className="phnumber">
        <label>Phone Number </label>
        <input
          type="text"
          className=" mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="9876543210"
          onInput={e =>
            (e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10))
          }
        />
      </div>

      <div className="country">
        <label>Country</label>
        <input
          type="text"
          className=" mt-1.5 w-full rounded-md border bg-white border-slate-300 px-1 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- India"
        />
      </div>
      <div className="State">
        <label>State</label>
        <input
          type="text"
          className=" mt-1.5 w-full rounded-md border bg-white border-slate-300 px-1 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- Telangana"
        />
      </div>
      <div className="City">
        <label>City</label>
        <input
          type="text"
          className=" mt-1.5 w-full rounded-md border bg-white border-slate-300 px-1 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Ex:- Hyderabad"
        />
      </div>
    </div>
  )
}

export default Numberfield
