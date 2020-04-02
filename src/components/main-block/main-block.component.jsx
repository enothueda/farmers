import React from 'react';

import ladybug from '../../assets/ladybug.jpg'

import './main-block.styles.scss';

const MainBlock = ({position, title, description, pic}) => {
	return (
		<article className='main-block'>
			{
				position === 'right'
				? <section className='main-section'>
					<h3>{title}</h3>
					<p>{description}</p>
				</section>
				: null
			}
			
			<figure className='figure'>
				<img src={pic} alt='inspection'/>
			</figure>

			{
				position === 'left'
				? <section className='main-section'>
					<h3>{title}</h3>
					<p>{description}</p>
				</section>
				: null
			}
			

		</article>
	)
};

export default MainBlock;