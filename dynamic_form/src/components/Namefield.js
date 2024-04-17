import React from 'react'

function Namefield() {
  return (
    <div className="namefield w-full flex gap-20 justify-center bg-white transition-colors duration-100 hover:bg-slate-200 p-4">
      <div className="firstname ">
        <label>First Name</label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="First Name"
        />
      </div>

      <div className="lastname">
        <label>Last Name</label>
        <input
          type="text"
          className="form-input mt-1.5 w-full rounded-md border bg-white border-slate-300 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100"
          placeholder="Last Name"
        />
      </div>
    </div>
  )
}

export default Namefield
