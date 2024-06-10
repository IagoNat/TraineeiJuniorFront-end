import PropTypes from 'prop-types';

export default function DisplayResult({years, months, days}) {
  return (
    <div className="display-area">
        <span className='display-years'>
          <span className='result-display'>
            {years} 
          </span>
          <span className="display-fixed-text">
            years
          </span>
        </span>

        <span className='display-months'>
          <span className='result-display'>
            {months} 
          </span>
          <span className="display-fixed-text">
            months
          </span>
        </span>

        <span className='display-days'>
          <span className='result-display'>
            {days} 
          </span>
          <span className="display-fixed-text">
            days
          </span>
        </span>
    </div>
  )
}


DisplayResult.propTypes = {
  years: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired
};
