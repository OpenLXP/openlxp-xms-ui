import React, { useState } from "react";

const CourseField = (props) => {
  const data = props.data || "";
  const label = props.label || "";

  const [displayData, setDisplayData] = useState(data);

  const handleChange = (event) => {
    setDisplayData(event.target.value);
  };

  return (
    <div className="col-span-1 grid">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      <input
        aria-label={label}
        className="mt-1 text-sm text-gray-900"
        value={displayData}
        onChange={handleChange}
      />
    </div>
  );
};
export default CourseField;
