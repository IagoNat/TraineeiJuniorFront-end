import { useState } from "react";
import './App.css';
import GenButton from "./components/gen_button";
import PassDisplay from "./components/pass_display";
import PassStrength from "./components/pass_strength";
import generatePassword from "./utils/generatePassword";

export default function App() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });
  const [passwordLength, setPasswordLength] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleGeneratePassword = () => {
    if(passwordLength != 0) {
      const strength = Object.values(options).filter(value => value === true).length;
      setPasswordStrength(strength);
    

      const strength_qual = document.getElementById('strength-qual');
      strength_qual.style.display = 'block';
      strength_qual.style.fontSize = '18px';
      strength_qual.style.color = '#fff';

      const password = document.getElementById('pass');
      password.style.color = '#fff';

      const newPassword = generatePassword(passwordLength, options);
      setPassword(newPassword);
    }
  };

  const handleOptionsChange = (e) => {
    const { name, checked } = e.target;
    setOptions({
      ...options,
      [name]: checked
    });
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
    updateBackground(e.target.value);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const updateBackground = (length) => {
    const range = document.getElementById('rangeInput');
    const min = range.min;
    const max = range.max;
    const percentage = ((length - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171f ${percentage}%)`;
  };

  return (
    <div className='app-wrapper'>
      <div className='app-title'>Password Generator</div>
      <div className='app-container'>
        <div className='password-container'>
          <PassDisplay password={password} onCopy={handleCopyPassword} />
        </div>
        <div className='main-container'>
          <div className='options'>
            
            <div className='password-length'>

            <div className='aditional'>
              <div className='title-password-length'><label className="slider-label">Character Length</label></div>
               <div className="length">
                <label>{passwordLength}</label>
                </div>
                </div>
              <input 
                id="rangeInput"
                type="range" 
                min="0" 
                max="20" 
                value={passwordLength} 
                onChange={handlePasswordLengthChange} 
              />
            </div>

            <label>
              <input 
                type="checkbox" 
                name="uppercase" 
                checked={options.uppercase} 
                onChange={handleOptionsChange} 
              />
              Include Uppercase Letters
            </label>
            <label>
              <input 
                type="checkbox" 
                name="lowercase" 
                checked={options.lowercase} 
                onChange={handleOptionsChange} 
              />
              Include Lowercase Letters
            </label>
            <label>
              <input 
                type="checkbox" 
                name="numbers" 
                checked={options.numbers} 
                onChange={handleOptionsChange} 
              />
              Include Numbers
            </label>
            <label>
              <input 
                type="checkbox" 
                name="symbols" 
                checked={options.symbols} 
                onChange={handleOptionsChange} 
              />
              Include Symbols
            </label>
          </div>
          <PassStrength  strength={passwordStrength}/>
          <GenButton onGenerate={handleGeneratePassword} />
        </div>
      </div>
    </div>
  );
}
