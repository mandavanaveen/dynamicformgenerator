import React from "react";

function SubmitButton({ onSubmit }) {
  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
