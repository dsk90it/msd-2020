import React from 'react'
import styled from 'styled-components'

import { MetaText } from '../styles/_typography'
import { iconSprites } from '../styles/_theme'

const CardWrapper = styled.div`
	display: block;
	width: 100%;
	text-align: center;

	i {
		display: inline-block;
		vertical-align: top;
		width: 64px;
		height: 64px;
		${iconSprites}
		margin-bottom: 40px;

		&.pencil {
			background-position: 0 0;
		}

		&.branding {
			background-position: -64px 0;
		}

		&.printing {
			background-position: -128px 0;
		}

		&.press {
			background-position: -192px 0;
		}
	}

	strong {
		display: block;
	}
`

const Card = ({ title, description, iconName }) => {
	return (
		<CardWrapper>
			<i className={iconName} />
			<strong>{title}</strong>
			<MetaText margin={'20px 0 0'}>{description}</MetaText>
		</CardWrapper>
	)
}

export default Card
