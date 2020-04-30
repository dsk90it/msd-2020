import React from 'react'
import styled from 'styled-components'
import { clearFix, theme, Container, lg, iconSprites } from '../styles/_theme'
import { SubHeading } from '../styles/_typography'

const TestimonialContainer = styled.section`
	${clearFix};
	width: 100%;
	background-color: ${theme.blueMedium};
	padding: 70px 0;

	${lg} {
		padding: 70px 0 40px;
	}
`
const FeaturedTestimonial = styled.div`
	${clearFix};
	max-width: 680px;
	text-align: center;
	margin: 0 auto;

	i {
		display: inline-block;
		width: 177px;
		height: 51px;
		${iconSprites};
		background-position: 0 -244px;
		vertical-align: top;
	}

	span {
		font-size: 13px;
	}
`

const Testimonials = () => {
	return (
		<TestimonialContainer>
			<Container>
				<FeaturedTestimonial>
					<i />
					<SubHeading as={'h5'} weight={'400'} margin={'20px 0 16px'}>
						<q>
							Uberthemes was by far the best choice we can made it. Easy to
							cutomize it, their themes offers so much.
						</q>
					</SubHeading>
					<span>Johnathan Doe, Web developer</span>
				</FeaturedTestimonial>
			</Container>
		</TestimonialContainer>
	)
}

export default Testimonials
