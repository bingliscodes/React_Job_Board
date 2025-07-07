import classes from "./JobSearch.module.css";

export default function JobSearch({ setSearchText }) {
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className={classes.jobs}>
      <input
        className={classes.input}
        placeholder="search all jobs"
        onChange={handleChange}
      />
    </div>
  );
}
