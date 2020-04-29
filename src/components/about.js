import React from 'react'
import styled from 'styled-components'

import { Container, cdnUrl, theme, iconSprites } from '../styles/_theme'
import TitleWrapper from '../helpers/title_wrapper'

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: url(${`${cdnUrl}video-bg.jpg`}) no-repeat;
	background-size: cover;
	min-height: 580px;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		left: 0;
		top: 0;
	}

	h3 {
		font-weight: ${theme.regular};
	}

	p {
		max-width: 480px;
		margin-left: auto;
		margin-right: auto;
	}

	i {
		display: block;
		cursor: pointer;
		${iconSprites};
		width: 140px;
		height: 140px;
		background-position: -26px -104px;
		position: relative;
		z-index: 2;
		margin: 40px auto 0;
	}
`

const AboutUs = () => {
	return (
		<AboutContainer>
			<Container>
				<TitleWrapper
					mainText={'Our office, the place where we put together ideas'}
					mainTextTag={'h3'}
					textColor={theme.white}
					wrapperMargin={0}
					maxWidth={640}
				/>

				<i />
			</Container>
		</AboutContainer>
	)
}

export default AboutUs
