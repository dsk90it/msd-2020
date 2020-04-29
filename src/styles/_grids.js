import styled from 'styled-components'
import { theme, sm, md, lg } from './_theme'

const getWidthString = (span) => {
	if (!span) return

	const width = (span / 12) * 100
	return `width: ${width}%`
}

export const Row = styled.div`
	margin-left: -${theme.gutterWidth};
	margin-right: -${theme.gutterWidth};

	&:after {
		content: '';
		clear: both;
		display: table;
	}
`
export const Column = styled.div`
	float: left;
	padding-left: ${theme.gutterWidth};
	padding-right: ${theme.gutterWidth};
	position: relative;

	${({ _xs }) => (_xs ? getWidthString(_xs) : 'width: 100%')};

	${sm} {
		${({ _sm }) => _sm && getWidthString(_sm)};
	}

	${md} {
		${({ _md }) => _md && getWidthString(_md)};
	}

	${lg} {
		${({ _lg }) => _lg && getWidthString(_lg)};
	}
`
