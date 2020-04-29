import styled from 'styled-components'
import { sm } from './_theme'

export const MainHeading = styled.h1`
	font-size: 30px;
	line-height: 40px;
	margin: 0 0 24px;
	font-weight: ${(props) => props.weight || null};
	color: ${(props) => props.txtcolor || null};

	${sm} {
		font-size: 32px;
		line-height: 48px;
	}
`
export const SubHeading = styled.h2`
	font-size: 26px;
	line-height: 40px;
	margin: ${(props) => props.margin || '0 0 16px'};
	color: ${(props) => props.txtcolor || null};
	font-weight: ${(props) => props.weight || null};
`

export const MetaText = styled.p`
	line-height: 24px;
	color: ${(props) => props.txtcolor || null};
	margin: ${(props) => props.margin || null};
`
