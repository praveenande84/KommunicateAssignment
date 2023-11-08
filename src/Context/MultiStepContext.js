/* -----> Third Party Package <----- */
import React from 'react';

/* -----> Create Context <----- */
const MultiStepContext = React.createContext({
	stepNumber: 1,
	changeStepNumber: () => {},
});

/* -----> Default Export <----- */
export default MultiStepContext;
