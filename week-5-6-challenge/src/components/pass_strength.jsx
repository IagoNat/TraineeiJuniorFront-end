import PropTypes from 'prop-types';

export default function PassStrength({ strength }) {
  const strengthLevel = ['Too Weak!', 'Weak', 'Medium', 'Strong'];
  const indicatorClass = [
    'strength-1',
    'strength-2',
    'strength-3',
    'strength-4'
  ];
  
  return (
    <div className="pass-strength">
      <span>Strength</span>
      <div className="strength-indicator-container">
        <span id="strength-qual">{strengthLevel[strength - 1]}</span>
        <div className="strength-indicator">
          {indicatorClass.map((className, index) => (
            <div key={index} className={`${strength >= index + 1 ? className : ''} indicator`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

PassStrength.propTypes = {
  strength: PropTypes.string.isRequired,
};
