import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'

import { SliderWrapper } from '../helpers/slider_wrapper'

import { Button } from './button'
import ContactForm from './form'

import 'react-responsive-modal/styles.css'

import { HeroWrapper, HeroContent } from '../styles/_hero'
import { MainHeading, MetaText } from '../styles/_typography'
import { cdnUrl } from '../styles/_theme'
import '../styles/_popup.css'

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
					<MainHeading weight="400">
						Lorem ipsum dollor sit amet featured title here
					</MainHeading>

					<MetaText margin="0 0 64px">
						Mauris placerat eleifend leo. Quisque sit amet est et spaien
						Vestibulum erat wisi, condimentum sed, commodo vitae
					</MetaText>

					<Button btnPrimary onClick={this.onOpenModal}>
						Call to Action
					</Button>

					<Modal
						classNames={{ modal: 'popup' }}
						open={this.state.open}
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
