import React, { Component } from 'react'
import Scroll from 'react-scroll'

import {
	NavWrapper,
	HeaderLeft,
	HeaderRight,
	NavContainer,
} from '../styles/_navbar'

const LinkScroll = Scroll.Link

const mobileMenu = () => {
	const menu = document.querySelector('#headerMenu')

	if (menu.classList.contains('hide')) {
		menu.classList.remove('hide')
		menu.classList.add('show')
	} else {
		closeMenu()
	}
}

const closeMenu = () => {
	const menu = document.querySelector('#headerMenu')
	menu.classList.add('hide')
	menu.classList.remove('show')
}

class Navbar extends Component {
	render() {
		return (
			<NavWrapper>
				<NavContainer>
					<HeaderLeft>
						<a className="logo" href="/">
							Maker
						</a>
						<div className="hamburger-icon" onClick={mobileMenu}>
							<i />
						</div>
					</HeaderLeft>

					<HeaderRight>
						<ul id="headerMenu" className="hide">
							<li>
								<LinkScroll
									activeClass="active"
									to="home"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									Home
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="services"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									Services
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="team"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									The Team
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="about"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									About
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="features"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									Features
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="testimonials"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									Testimonials
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									activeClass="active"
									to="pricing"
									spy={true}
									smooth={true}
									duration={500}
									onClick={closeMenu}
								>
									Pricing
								</LinkScroll>
							</li>
						</ul>
					</HeaderRight>
				</NavContainer>
			</NavWrapper>
		)
	}
}

export default Navbar
