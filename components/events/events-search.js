import Button from "../ui/button";
import classes from "./events-search.module.css";

function EventsSearch(props) {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <options value="2021">2021</options>
            <options value="2022">2022</options>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            <options value="1">January</options>
            <options value="2">February</options>
            <options value="3">March</options>
            <options value="4">April</options>
            <options value="5">May</options>
            <options value="6">June</options>
            <options value="7">July</options>
            <options value="8">August</options>
            <options value="9">September</options>
            <options value="10">October</options>
            <options value="11">November</options>
            <options value="12">December</options>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
