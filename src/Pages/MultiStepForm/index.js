/* -----> Third Paty Packages <----- */
import React, { useContext } from 'react';

/* -----> Context <----- */
import MultiStepContext from '../../Context/MultiStepContext';

/* -----> External Components <----- */
import SideBar from '../../Layout/SideBar';
import YourInfo from '../../Components/YourInfo';
import SelectPlan from '../../Components/SelectPlan';
import AddOns from '../../Components/AddOns';
import Summary from '../../Components/Summary';

/* -----> Styles <----- */
import './index.css';

/* -----> Functional Component <----- */
const MultistepForm = () => {
	console.log('MultistepForm Component');

	// context
	const { stepNumber } = useContext(MultiStepContext);

	// Methods
	const selectedStep = () => {
		switch (stepNumber) {
			case 1:
				return <YourInfo />;
			case 2:
				return <SelectPlan />;
			case 3:
				return <AddOns />;
			case 4:
				return <Summary />;
			case 0:
				return <h1>OK</h1>;
		}
	};

	// Return JSX
	return (
		<div className="multi-step-form-component">
			<div className="side-bar-container">
				<SideBar />
				{selectedStep()}
			</div>
		</div>
	);
};

/* -----> Default Export <----- */
export default MultistepForm;
