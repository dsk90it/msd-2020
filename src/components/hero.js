import React from 'react'
import styled from 'styled-components'

import { clearFix, cdnUrl } from '../styles/_theme'
import { SliderWrapper } from '../helpers/sliderWrapper'

const HeroWrapper = styled.header`
	${clearFix};
	width: 100%;
	padding-top: 56px;
	margin-top: -56px;
	height: 85vh;
	position: relative;

	.hero-slider {
		margin-top: -56px;
		height: 85vh;

		.item {
			display: block;
			width: 100%;
			height: 85vh;
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
`

const HeroContent = styled.div``

const sliderImages = [
	<div
		key={0}
		className="item"
		style={{ backgroundImage: `url("${cdnUrl}slider1.jpg")` }}
	/>,
	<div
		key={1}
		className="item"
		style={{ backgroundImage: `url("${cdnUrl}slider3.jpg")` }}
	/>,
	<div
		key={2}
		className="item"
		style={{ backgroundImage: `url("${cdnUrl}slider4.jpg")` }}
	/>,
	<div
		key={3}
		className="item"
		style={{ backgroundImage: `url("${cdnUrl}slider5.jpg")` }}
	/>,
]

const Hero = () => {
	return (
		<HeroWrapper>
			<SliderWrapper
				className="hero-slider"
				sliderSettings={{
					fade: true,
					speed: 900,
					infinite: true,
					autoplay: true,
					pauseOnFocus: false,
					pauseOnHover: false,
					cssEase: 'ease-in-out',
				}}
				sliderElements={sliderImages}
			/>

			<HeroContent>Content</HeroContent>
		</HeroWrapper>
	)
}

export default Hero
