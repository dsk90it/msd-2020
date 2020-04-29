import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { clearFix, sm } from '../styles/_theme'
import { SubHeading, MetaText } from '../styles/_typography'

const TitelContainer = styled.div`
	${clearFix};
	width: 100%;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${(props) => props.wrapMargin}px;
	position: relative;
	z-index: 2;

	${sm} {
		max-width: ${(props) => props.maximumWidth}px;
	}
`

const TitleWrapper = ({
	mainText,
	mainTextTag,
	subText,
	subTextag,
	textColor,
	maxWidth,
	wrapperMargin,
}) => {
	return (
		<TitelContainer wrapMargin={wrapperMargin} maximumWidth={maxWidth}>
			<SubHeading margin={'0'} as={mainTextTag} txtcolor={textColor}>
				{mainText}
			</SubHeading>

			<MetaText margin={'12px 0 0'} as={subTextag} txtcolor={textColor}>
				{subText}
			</MetaText>
		</TitelContainer>
	)
}

TitleWrapper.defaultProps = {
	wrapperMargin: 40,
	maxWidth: 480,
	mainText: 'We provide great services',
	mainTextTag: 'h2',
	subText:
		'Lorem Ipsum dollor sit amet donec eu libero sit amet quam pallentesque voluptat, nam dui mi',
	subTextag: 'p',
}

TitleWrapper.propTypes = {
	wrapperMargin: PropTypes.number,
	maxWidth: PropTypes.number,
	mainText: PropTypes.string,
	mainTextTag: PropTypes.string,
	subText: PropTypes.string,
	subTextag: PropTypes.string,
	textColor: PropTypes.string,
}

export default TitleWrapper
