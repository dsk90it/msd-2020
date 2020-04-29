import React from 'react'

import { MetaText } from '../styles/_typography'
import { CardWrapper } from '../styles/_card'

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
