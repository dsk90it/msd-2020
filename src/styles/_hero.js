import styled from 'styled-components'
import { clearFix, sm, lg, xs } from './_theme'

export const HeroWrapper = styled.header`
	${clearFix};
	width: 100%;
	padding-top: 56px;
	margin-top: -56px;
	height: 600px;
	position: relative;
	overflow: hidden;

	${lg} {
		height: 720px;
	}

	.hero-slider {
		margin-top: -56px;
		height: 600px;

		${lg} {
			height: 720px;
		}

		.item {
			display: block;
			width: 100%;
			height: 600px;
			position: relative;
			background-size: cover;
			background-repeat: no-repeat;

			${xs} {
				background-position: 22% 0;
			}

			${lg} {
				height: 720px;
			}
		}
	}
`

export const HeroContent = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	width: 100%;
	padding: 0 10%;
	text-align: center;

	${sm} {
		padding: 0;
		width: 480px;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`
