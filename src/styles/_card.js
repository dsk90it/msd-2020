import styled from 'styled-components'
import { iconSprites } from './_theme'

export const CardWrapper = styled.div`
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

		&.arrow,
		&.funnel,
		&.clock,
		&.monitor,
		&.dashboard,
		&.chat {
			width: 40px;
			height: 40px;
		}

		&.arrow {
			background-position: 0 -64px;
		}

		&.funnel {
			background-position: -40px -64px;
		}

		&.clock {
			background-position: -80px -64px;
		}

		&.monitor {
			background-position: -120px -64px;
		}

		&.dashboard {
			background-position: -160px -64px;
		}

		&.chat {
			background-position: -200px -64px;
		}
	}

	strong {
		display: block;
	}
`
