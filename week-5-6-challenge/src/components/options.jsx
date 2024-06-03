import PropTypes from 'prop-types';
import Checkbox from "./checkbox";


export default function Options({ options, onOptionsChange, passwordLength, onPasswordLengthChange }) {
    const handleUppercaseChange = () => {
        onOptionsChange({ ...options, uppercase: !options.uppercase });
    };

    const handleLowercaseChange = () => {
        onOptionsChange({ ...options, lowercase: !options.lowercase });
    };

    const handleNumberChange = () => {
        onOptionsChange({ ...options, numbers: !options.numbers });
    };

    const handleSymbolsChange = () => {
        onOptionsChange({ ...options, symbols: !options.symbols });
    };

    const handlePasswordLengthChange = (event) => {
        onPasswordLengthChange(event.target.value);
    }

    return (
    <>
        <div>
            <span>Character Length</span>
            <span>{passwordLength}</span>
            <input
                type="range"
                min="1"
                max="100"
                value={passwordLength}
                onChange={handlePasswordLengthChange}
            />
        </div>
        <div className="options">
            <Checkbox 
                labelfor="uppercase letters" 
                checked={options.uppercase} 
                onChange={handleUppercaseChange} 
            />
            <Checkbox 
                labelfor="lowercase letters" 
                checked={options.lowercase} 
                onChange={handleLowercaseChange} 
            />
            <Checkbox 
                labelfor="numbers" 
                checked={options.numbers} 
                onChange={handleNumberChange} 
            />
            <Checkbox 
                labelfor="symbols" 
                checked={options.symbols}
                onChange={handleSymbolsChange} 
            />
        </div>
    </>
    )
}

Options.propTypes = {
    options: PropTypes.shape({
        uppercase: PropTypes.bool.isRequired,
        lowercase: PropTypes.bool.isRequired,
        numbers: PropTypes.bool.isRequired,
        symbols: PropTypes.bool.isRequired,
    }).isRequired,
    onOptionsChange: PropTypes.func.isRequired,
    passwordLength: PropTypes.number.isRequired,
    onPasswordLengthChange: PropTypes.func.isRequired,
};