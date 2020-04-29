import styled from 'styled-components'
import { sm } from './_theme'

export const MainHeading = styled.h1`
	font-size: 30px;
	line-height: 40px;
	margin: 0 0 24px;
	font-weight: ${(props) => props.weight || null};
	color: ${(props) => props.color || null};

	${sm} {
		font-size: 32px;
		line-height: 48px;
	}
`
export const SubHeading = styled.h2`
	font-size: 24px;
	line-height: 36px;
	margin: ${(props) => props.margin || '0 0 16px'};
	color: ${(props) => props.color || null};
`

export const MetaText = styled.p`
	line-height: 24px;
	color: ${(props) => props.color || null};
	margin: ${(props) => props.margin || null};
`
