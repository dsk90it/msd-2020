import React, { Component } from 'react'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import { theme, Container, listUnstyled, xs, sm } from '../styles/theme'

const LinkScroll = Scroll.Link

const NavWrapper = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	min-height: 64px;
	display: flex;
	align-items: center;
	flex-direction: row;
	z-index: 10;

	.hamburger-icon {
		display: inline-block;
		vertical-align: middle;
		margin-top: -4px;

		i {
			display: inline-block;
			vertical-align: middle;
			width: 20px;
			height: 2px;
			position: relative;
			background-color: ${theme.secondary};
			font-style: normal;

			&:before,
			&:after {
				content: '';
				position: absolute;
				left: 0px;
				width: 20px;
				height: 2px;
				background-color: ${theme.secondary};
			}

			&:before {
				top: -6px;
			}

			&:after {
				bottom: -6px;
			}
		}
	}

	.logo {
		display: inline-block;
		font-size: 22px;
		color: ${theme.secondary};
		font-weight: ${theme.semiBold};
	}

	ul {
		display: flex;
		${listUnstyled};
		font-weight: ${theme.bold};
		text-transform: ${theme.textUppercase};
		font-size: 11px;
		letter-spacing: 0.25px;

		li {
			margin-right: 24px;

			a {
				display: inline-block;
				color: ${theme.baseColor};
				padding-bottom: 4px;
				border-bottom: 2px solid transparent;
				cursor: pointer;

				&.active {
					color: ${theme.secondary};
					border-bottom-color: ${theme.blueLight};
				}
			}
		}

		${xs} {
			flex-wrap: wrap;
			flex-direction: column;
			background-color: ${theme.secondary};
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;

			&.hide {
				display: none;
			}

			&.show {
				display: block;
			}

			li {
				margin-right: 0;

				a {
					border-top: 1px solid #525b73;
					border-bottom: 0;
					padding: 12px;
					display: block;

					&.active {
						color: ${theme.white};
					}
				}
			}
		}
	}

	/* Fixed */
	&.fixed {
		background-color: ${theme.secondary};
		transition: all 0.3s;

		.logo {
			color: ${theme.white};
		}

		.hamburger-icon {
			i {
				background-color: ${theme.white};

				:before,
				:after {
					background-color: ${theme.white};
				}
			}
		}

		li {
			a {
				&.active {
					color: ${theme.white};
					border-bottom: 0;
				}
			}
		}
	}
`
const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: row;
`
const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	${xs} {
		width: 100%;
		justify-content: space-between;
	}

	${sm} {
		.hamburger-icon {
			display: none;
		}
	}
`

const HeaderRight = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
`

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
