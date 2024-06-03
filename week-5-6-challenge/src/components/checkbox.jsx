import PropTypes from 'prop-types';

export default function Checkbox({ labelfor, checked, onChange }) {
    return (
        <div className="option">
            <input type="checkbox" id={labelfor} checked={checked} onChange={onChange} />
            <label htmlFor={labelfor}>Include {labelfor}</label>
        </div>
    )
}

Checkbox.propTypes = {
    labelfor: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}