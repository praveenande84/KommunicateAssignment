/* -----> Third Paty Packages <----- */
import React, { useState } from 'react';
import MultiStepContext from './Context/MultiStepContext';

/* -----> External Components <----- */
import MultistepForm from './Pages/MultiStepForm';

/* -----> Styles <----- */
import './App.css';

/* -----> Functional Component <----- */
const App = () => {
	console.log('App Component');

	// State
	const [stepNumber, setStepNumber] = useState(1);

	const onChangeStepNumber = (updatedNumber) => {
		setStepNumber(updatedNumber);
	};

	// Context Object
	const ContextObject = {
		stepNumber: stepNumber,
		changeStepNumber: onChangeStepNumber,
	};

	// Return JSX
	return (
		<MultiStepContext.Provider value={ContextObject}>
			<div className="App-component">
				<MultistepForm />
			</div>
		</MultiStepContext.Provider>
	);
};

/* -----> Default Export <----- */
export default App;
