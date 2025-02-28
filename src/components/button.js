import styled, { css } from 'styled-components'
import { theme } from '../styles/_theme'

const buttonProperties = ({
	bgColor,
	color = theme.white,
	bgHover,
	hoverColor = theme.white,
} = {}) => `
    color: ${color};
    background-color: ${bgColor};
    border-color: ${bgColor};
    &:focus,
    &:hover,
    &:active:focus {
      color: ${hoverColor};
      border-color: ${bgHover};
      background-color: ${bgHover};
}`

export const Button = styled.button`
	display: inline-block;
	color: ${theme.white};
	background-color: ${theme.blueLight};
	font-size: 11px;
	font-weight: ${theme.bold};
	text-transform: ${theme.textUppercase};
	margin-bottom: 0;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	background-image: none;
	border: 0;
	white-space: nowrap;
	border-radius: 20px;
	user-select: none;
	cursor: pointer;
	padding: 14px 20px 15px;
	transition: all 0.4s;
	line-height: 1;
	outline: 0 none;
	letter-spacing: 0.25px;

	:hover {
		background-color: #9fb5c7;
	}

	/* Primary button */
	${(props) =>
		props.btnPrimary &&
		css`
			${buttonProperties({
				bgColor: `${theme.blue}`,
				bgHover: '#4c62bd',
			})};
		`}
`
