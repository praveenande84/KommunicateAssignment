/* -----> Third Paty Packages <----- */
import React from 'react';

/* -----> External Components <----- */
import { FormBackgroundDesktop } from '../../Assests/Icons';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const SideBar = () => {
	console.log('SideBar Component');

	// Methods
	const backgroundStyle = {
		backgroundImage: FormBackgroundDesktop(), // Call FormBackgroundDesktop as a function
	};

	// Return JSX
	return (
		<div className="side-bar-component" style={backgroundStyle}>
			<div className="step-container">
				<div className="number-container">
					<p className="number step-selected">1</p>
				</div>
				<div className="step-details-container">
					<p className="step-heading">STEP 1</p>
					<p className="step-name">YOUR INFO</p>
				</div>
			</div>

			<div className="step-container">
				<div className="number-container">
					<p className="number">2</p>
				</div>
				<div className="step-details-container">
					<p className="step-heading">STEP 2</p>
					<p className="step-name">SELECT PLAN</p>
				</div>
			</div>

			<div className="step-container">
				<div className="number-container">
					<p className="number">3</p>
				</div>
				<div className="step-details-container">
					<p className="step-heading">STEP 3</p>
					<p className="step-name">ADD-ONS</p>
				</div>
			</div>

			<div className="step-container">
				<div className="number-container">
					<p className="number">4</p>
				</div>
				<div className="step-details-container">
					<p className="step-heading">STEP 4</p>
					<p className="step-name">SUMMARY</p>
				</div>
			</div>
		</div>
	);
};

/* -----> Default Export <----- */
export default SideBar;
