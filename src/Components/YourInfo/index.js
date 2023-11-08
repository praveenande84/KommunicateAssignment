/* -----> Third Party Packages <-----*/
import React, { useContext } from 'react';

/* -----> Context <----- */
import MultiStepContext from '../../Context/MultiStepContext';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const YourInfo = () => {
	console.log('YourInfo Component');

	// context
	const { changeStepNumber } = useContext(MultiStepContext);

	// Return JSX
	return (
		<div className="your-info-component">
			<h1 className="form-heading">Personal info</h1>
			<p className="form-description">
				Please provide your name, eamail address, and phone number.
			</p>
			<form className="form-container">
				<div className="input-container">
					<label className="input-label">Name</label>
					<input
						className="input-box"
						type="text"
						placeholder="Enter Name"
					/>
				</div>

				<div className="input-container">
					<label className="input-label">Email Address</label>
					<input
						className="input-box"
						type="email"
						placeholder="Enter Name"
					/>
				</div>

				<div className="input-container">
					<label className="input-label">Phone Number</label>
					<input
						className="input-box"
						type="number"
						placeholder="Enter Name"
						required
					/>
				</div>

				<div className="button-container">
					<button
						className="next-step-button"
						onClick={() => changeStepNumber(2)}
					>
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};

/* -----> Default Export  <----- */
export default YourInfo;
