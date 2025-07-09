import Select from "react-select";

import classes from "./Filter.module.css";

export default function Filter({ label, name, data, onChange }) {
  const options = data.map((d) => ({ value: d, label: d }));

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={name} className={classes.label}>
        {label}:
      </label>
      <div className={classes.selectContainer}>
        <Select
          id={name}
          options={options}
          isMulti
          name={name}
          onChange={onChange}
          placeholder={`Select ${label.toLowerCase()}`}
          classNamePrefix="reactSelect"
        />
      </div>
    </div>
  );
}
