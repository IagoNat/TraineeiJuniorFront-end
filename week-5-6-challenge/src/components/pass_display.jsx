import PropTypes from 'prop-types';

export default function PassDisplay({ password }) {
    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password)
    };

    return (
        <div className="pass-display">
            <span id="pass">{password}</span>
            <span className="material-symbols-rounded file-copy" onClick={handleCopyPassword}>
                file_copy
            </span>
        </div>
    );
}

PassDisplay.propTypes = {
    password: PropTypes.string.isRequired,
};
