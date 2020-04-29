import React, { Component } from 'react'
import styled from 'styled-components'
import 'react-responsive-modal/styles.css'
import '../styles/_popup.css'
import { clearFix, cdnUrl, MainHeading, sm, lg, xs } from '../styles/_theme'
import { Modal } from 'react-responsive-modal'
import { SliderWrapper } from '../helpers/sliderWrapper'
import { Button } from './button'
import ContactForm from './form'

const HeroWrapper = styled.header`
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

const HeroContent = styled.div`
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

	p {
		line-height: 24px;
		margin-bottom: 64px;
	}
`

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

class Hero extends Component {
	state = {
		open: false,
	}

	onOpenModal = () => {
		this.setState({ open: true })
	}

	onCloseModal = () => {
		this.setState({ open: false })
	}

	render() {
		const { open } = this.state

		return (
			<HeroWrapper>
				<SliderWrapper
					className="hero-slider"
					sliderSettings={{
						fade: true,
						speed: 1000,
						infinite: true,
						autoplay: true,
						pauseOnFocus: false,
						pauseOnHover: false,
						cssEase: 'ease-in-out',
					}}
					sliderElements={sliderImages}
				/>

				<HeroContent>
					<MainHeading className="regular">
						Lorem ipsum dollor sit amet featured title here
					</MainHeading>

					<p>
						Mauris placerat eleifend leo. Quisque sit amet est et spaien
						Vestibulum erat wisi, condimentum sed, commodo vitae
					</p>

					<Button btnPrimary onClick={this.onOpenModal}>
						Call to Action
					</Button>

					<Modal
						classNames={{ modal: 'popup' }}
						open={open}
						onClose={this.onCloseModal}
						center
					>
						<h2>Lets Connect!</h2>
						<ContactForm />
					</Modal>
				</HeroContent>
			</HeroWrapper>
		)
	}
}

export default Hero
