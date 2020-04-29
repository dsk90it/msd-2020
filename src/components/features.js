import React from 'react'
import styled from 'styled-components'

import SectionWrapper from '../helpers/section_wrapper'
import TitleWrapper from '../helpers/title_wrapper'

import Card from './card'

import { Container, sm, lg } from '../styles/_theme'
import { Row, Column } from '../styles/_grids'

const FeaturesColumn = styled(Column)`
	padding-top: 24px;
	padding-bottom: 24px;

	${sm} {
		padding-top: 40px;
	}

	${lg} {
		padding-left: 56px;
		padding-right: 56px;
	}
`

const featuresData = [
	{
		icon: 'arrow',
		title: 'Sleek and smooth animation',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
	{
		icon: 'funnel',
		title: 'Crafted with detail',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
	{
		icon: 'clock',
		title: 'Save your time',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
	{
		icon: 'monitor',
		title: 'Responsive on any device',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
	{
		icon: 'dashboard',
		title: 'Easy to customize',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
	{
		icon: 'chat',
		title: 'Quickly, effective support',
		description:
			'Lorem Ipsum dollor sit amet donec eu libero sit amet quam egestas semper',
	},
].map((item, index) => {
	return (
		<FeaturesColumn key={index} _xs="12" _sm="4">
			<Card
				iconName={item.icon}
				title={item.title}
				description={item.description}
			/>
		</FeaturesColumn>
	)
})

const Features = () => {
	return (
		<SectionWrapper>
			<Container>
				<TitleWrapper
					mainText={'Best features in the world'}
					mainTextTag={'h4'}
					subText={'Ut enim ad minim veniam, quis nostrud exercitation ullamo'}
					wrapperMargin={48}
				/>

				<Row>{featuresData}</Row>
			</Container>
		</SectionWrapper>
	)
}

export default Features
