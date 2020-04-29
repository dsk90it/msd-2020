import styled from 'styled-components'
import { theme, Container, listUnstyled, xs, sm, md } from './_theme'

const darkNavbar = `
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
`

export const NavWrapper = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	min-height: 56px;
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

				${md} {
					:hover:not(.active) {
						color: ${theme.secondary};
					}
				}

				&.active {
					color: ${theme.white};

					${sm} {
						color: ${theme.secondary};
						border-bottom-color: ${theme.blueLight};
					}
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
				}
			}
		}
	}

	${xs} {
		${darkNavbar}
	}

	/* Fixed */
	&.fixed {
		${darkNavbar}

		li {
			a {
				${sm} {
					&.active {
						color: ${theme.white};
						border-bottom-color: ${theme.white};
					}
				}

				${md} {
					:hover:not(.active) {
						color: ${theme.white};
					}
				}
			}
		}
	}
`
export const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: row;
`
export const HeaderLeft = styled.div`
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

export const HeaderRight = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
`
