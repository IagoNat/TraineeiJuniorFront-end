import PropTypes from 'prop-types';

export default function GenButton({ onGenerate }) {
    return (
        <div>
            <button className="gen-button" onClick={onGenerate}>
                <div className="button-content">
                    <span> Generate </span>
                    <span className="material-symbols-rounded arrow-forward">
                        arrow_forward
                    </span>
                </div>
            </button>
        </div>
    );
}

GenButton.propTypes = {
    onGenerate: PropTypes.func.isRequired,
}