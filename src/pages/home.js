import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'

// Styles
import GlobalStyle from '../styles/globals'
import { ContentWrapper, Container } from '../styles/theme'

// Helpers
import { navScrollListener } from '../helpers/navScroll'

// Components
import NavBar from '../components/navbar'
import Hero from '../components/hero'

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
					<Container>
						<Element name="home">
							<Hero />
						</Element>

						<Element name="services"></Element>

						<Element name="team"></Element>

						<Element name="about"></Element>

						<Element name="features"></Element>

						<Element name="testimonials"></Element>

						<Element name="pricing"></Element>
					</Container>
				</ContentWrapper>
			</Fragment>
		)
	}
}

export default Home
