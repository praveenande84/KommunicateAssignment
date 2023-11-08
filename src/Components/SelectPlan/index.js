/* -----> Third Party Packages <----- */
import React, { useContext } from 'react';

/* -----> Context <----- */
import MultiStepContext from '../../Context/MultiStepContext';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const SelectPlan = () => {
	console.log('SelectPlan COmponent');

	// Context
	const { changeStepNumber } = useContext(MultiStepContext);

	// Return JSX
	return (
		<div className="select-plan-componentt">
			<h1 className="form-heading">Select your plan</h1>
			<p className="form-description">
				You have the option of monthly or yearly billing.
			</p>
			<form className="form-container">
				<div className="button-container">
					<button
						className="next-step-button"
						onClick={() => changeStepNumber(3)}
					>
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};

/* -----> Default Export <----- */
export default SelectPlan;
