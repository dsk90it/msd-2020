import React from 'react'
import styled from 'styled-components'

import SectionWrapper from '../helpers/section_wrapper'
import TitleWrapper from '../helpers/title_wrapper'

import Card from './card'

import { Container, sm, md, theme } from '../styles/_theme'
import { Row, Column } from '../styles/_grids'

const ServiceRow = styled(Row)`
	position: relative;

	.highlighter {
		display: none;

		${md} {
			display: block;
			position: absolute;
			height: 5px;
			left: 0;
			top: 0;
			background-color: ${theme.blueLight};
			transition: all 0.5s ease 0s;
			width: 20%;
			margin: 0 2.5%;
		}
	}

	${md} {
		.column {
			:nth-child(1):hover ~ .highlighter {
				left: 0;
			}
			:nth-child(2):hover ~ .highlighter {
				left: 25%;
			}
			:nth-child(3):hover ~ .highlighter {
				left: 50%;
			}
			:nth-child(4):hover ~ .highlighter {
				left: 75%;
			}
		}
	}
`

const ServiceColumn = styled(Column)`
	padding-top: 24px;
	padding-bottom: 24px;
	user-select: none;

	${sm} {
		padding-top: 40px;
	}
`

const serviceData = [
	{
		icon: 'pencil',
		title: 'Web Design',
		description:
			'Vestibulum erat wisi, condimentum commodo vitae, ornare sit ame',
	},
	{
		icon: 'branding',
		title: 'Identity & Branding',
		description:
			'Vestibulum erat wisi, condimentum commodo vitae, ornare sit ame',
	},
	{
		icon: 'printing',
		title: 'Print & packaging',
		description:
			'Vestibulum erat wisi, condimentum commodo vitae, ornare sit ame',
	},
	{
		icon: 'press',
		title: 'Content writing',
		description:
			'Vestibulum erat wisi, condimentum commodo vitae, ornare sit ame',
	},
].map((item, index) => {
	return (
		<ServiceColumn className="column" key={index} _xs="12" _sm="3">
			<Card
				iconName={item.icon}
				title={item.title}
				description={item.description}
			/>
		</ServiceColumn>
	)
})

const Services = () => {
	return (
		<SectionWrapper>
			<Container>
				<TitleWrapper wrapperMargin={64} />

				<ServiceRow>
					{serviceData}

					<i className={'highlighter'} />
				</ServiceRow>
			</Container>
		</SectionWrapper>
	)
}

export default Services
