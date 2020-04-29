import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'

import GlobalStyle from '../styles/_globals'
import { ContentWrapper } from '../styles/_theme'

import { navScrollListener } from '../helpers/navscroll'

import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Services from '../components/services'
import AboutUs from '../components/about'
import Features from '../components/features'

class Home extends Component {
	componentDidMount() {
		document.addEventListener('scroll', navScrollListener)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', navScrollListener)
	}

	render() {
		return (
			<Fragment>
				<GlobalStyle />

				<NavBar />

				<ContentWrapper>
					<Element name="home">
						<Hero />
					</Element>

					<Element name="services">
						<Services />
					</Element>

					<Element name="team">Team Content here...</Element>

					<Element name="about">
						<AboutUs />
					</Element>

					<Element name="features">
						<Features />
					</Element>

					<Element name="testimonials"></Element>

					<Element name="pricing"></Element>
				</ContentWrapper>
			</Fragment>
		)
	}
}

export default Home
