import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'

import GlobalStyle from '../styles/_globals'
import { ContentWrapper } from '../styles/_theme'

import { navScrollListener } from '../helpers/navScroll'

import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Services from '../components/services'
import AboutUs from '../components/about'
import Features from '../components/features'
import Testimonials from '../components/testimonials'

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

					<Element name="team">
						<div style={{padding: '15rem 0', backgroundColor: '#eceff0', textAlign: 'center' }}>
							<h3>TEAM SECTION</h3>
						</div>
					</Element>

					<Element name="about">
						<AboutUs />
					</Element>

					<Element name="features">
						<Features />
					</Element>

					<Element name="testimonials">
						<Testimonials />
					</Element>

					<Element name="pricing">
						<div style={{padding: '15rem 0', backgroundColor: '#3c4357', textAlign: 'center'}}>
							<h3 style={{color: '#ffffff'}}>PRICING SECTION</h3>
						</div>
					</Element>
				</ContentWrapper>
			</Fragment>
		)
	}
}

export default Home
