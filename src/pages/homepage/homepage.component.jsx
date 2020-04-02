import React from 'react';

import banner1 from '../../assets/banner1.png';
import ladybug from '../../assets/ladybug.jpg';
import lupa from '../../assets/lupa.jpg';
import data from '../../assets/data.jpg';
import access from '../../assets/access.jpg'

import Header from '../../components/header/header.component';
import MainBlock from '../../components/main-block/main-block.component';

import './homepage.styles.scss';

const HomePage = () => (
	<div className='homepage'>		
		<Header />
		<div className='main-banner'>
			<div className='banner' style={{'backgroundImage': `url(${banner1})`}}/>
		</div>
		<MainBlock  
			position='left'
			title='Plant Inspections'
			description='An App to record the field inspections in a fast way from the field to make better and faster decisions'
			pic={lupa}
		/>
		<MainBlock  
			position='right'
			title='Total Control'
			description='Take the control of all your crops and farms data independently, easier way to manage different crops and teams'
			pic={data}
		/>
		<MainBlock  
			position='left'
			title='Security and Profiles'
			description='Manage profiles and information according to responsibility level and get immediate reports'
			pic={access}
		/>
		
	</div>
);

export default HomePage;