import React from 'react';

import './custom-select.styles.scss';

const CustomSelect = ({ children, label, ...otherProps}) => (
	<div className='group'>
		<label className='custom-select-label'>{label}</label>
		<select className='custom-select' {...otherProps}>
			{ children }
		</select>
	</div>
);

export default CustomSelect;