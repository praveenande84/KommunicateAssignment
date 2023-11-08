/* -----> Third Party packages <----- */
import React, { useContext } from 'react';

/* -----> Context <----- */
import MultiStepContext from '../../Context/MultiStepContext';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const Summary = () => {
	console.log('Summary Component');

	// Context
	const { changeStepNumber } = useContext(MultiStepContext);

	// Return JSX
	return (
		<div className="summary-component">
			<h1 className="form-heading">Finishing up</h1>
			<p className="form-description">
				Double-check everything looks OK before confirming.
			</p>
			<form className="form-container">
				<div className="button-container">
					<button
						className="next-step-button"
						onClick={() => changeStepNumber(0)}
					>
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};

/* -----> Default Export <----- */
export default Summary;
