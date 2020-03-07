import React from 'react';

import './custom-select.styles.scss';

const CustomSelect = ({ children, ...otherProps}) => (
	<select className='custom-select' {...otherProps}>
		{ children }
	</select>
);

export default CustomSelect;