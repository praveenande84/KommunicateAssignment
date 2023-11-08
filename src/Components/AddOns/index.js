/* -----> Third Party packages <----- */
import React, { useContext } from 'react';

/* -----> Context <----- */
import MultiStepContext from '../../Context/MultiStepContext';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const AddOns = () => {
	console.log('AddOns Component');

	// Context
	const { changeStepNumber } = useContext(MultiStepContext);

	// Return JSX
	return (
		<div className="add-ones-component">
			<h1 className="form-heading">Pick add-ons</h1>
			<p className="form-description">
				Add-ons help enhance your gaming experience.
			</p>
			<form className="form-container">
				<div className="button-container">
					<button
						className="next-step-button"
						onClick={() => changeStepNumber(4)}
					>
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};

/* -----> Default Export <----- */
export default AddOns;
