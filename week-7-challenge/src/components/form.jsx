import PropTypes from 'prop-types';

export default function Form({setYear, setMonth, setDay}) {
  const handleChange = (field) => (e) => {
    if(field === 'year') {
      setYear(e.target.value);
    } else if(field === 'month') {
      setMonth(e.target.value);
    } else if(field === 'day') {
      setDay(e.target.value);
    }
  }

  return (
    <div className="input-container">
      <form className="input-area">
        <div className="form-control input-day">
          <label htmlFor="day" id="label-day">Day</label>
          <input type="number" id="day" placeholder="DD" onChange={handleChange('day')}/>
          <div className="warning warning-day">Must be a valid day</div>
        </div>
        <div className="form-control input-month">
          <label htmlFor="month" id="label-month">Month</label>
          <input type="number" id="month" placeholder="MM" onChange={handleChange('month')}/>
          <div className="warning warning-month">Must be a valid month</div>
        </div>
        <div className="form-control input-year">
          <label htmlFor="year" id="label-year">Year</label>
          <input type="number" id="year" placeholder="YYYY" onChange={handleChange('year')}/>
          <div className="warning warning-year-one">Must be in the past</div>
          <div className="warning warning-year-two">Must be a valid year</div>
        </div>
      </form>
      <div className="warning warning-date">Must be valid date</div>
    </div>
  )
}

Form.propTypes = {
  setYear: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setDay: PropTypes.func.isRequired
}
