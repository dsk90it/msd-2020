import styled from 'styled-components'

// HELPERS
export const clearFix = `
   &:before, &:after {
      content: '';
      display: table;
   }

   &:after {
      clear: both;
   }
`

export const listUnstyled = `
  list-style: none;
  margin: 0;
  padding: 0;
`
// CDN URL
export const cdnUrl = `//d3lf10b5gahyby.cloudfront.net/misc/senthil_assets/`

// SPRITES
export const iconSprites = `
   background: url(${`${cdnUrl}sprites.png`}) no-repeat;
   background-size: 256px 295px;
`

// THEME
export const theme = {
	fontDefault: `'Open Sans', sans-serif`,

	baseFontSize: '15px',
	gutterWidth: '16px',

	regular: 400,
	light: 300,
	semiBold: 600,
	bold: 700,

	baseColor: '#718493',
	secondary: '#3c4357',
	blue: '#6679c9',
	blueLight: '#bcccd9',
	white: '#ffffff',

	textUppercase: 'uppercase',
	textLowercase: 'lowercase',

	xs: '767px', // 767px & below is mobile
	sm: '768px',
	md: '992px',
	lg: '1200px',
}

// MEDIA QUERIES
export const xs = `@media (max-width: ${theme.xs})`
export const sm = `@media (min-width: ${theme.sm})`
export const md = `@media (min-width: ${theme.md})`
export const lg = `@media (min-width: ${theme.lg})`

// CONTAINERS
export const Container = styled.div`
	${clearFix};
	padding-left: 16px;
	padding-right: 16px;
	margin-right: auto;
	margin-left: auto;
	width: 100%;

	${lg} {
		width: 1232px;
	}
`
export const ContentWrapper = styled.div`
	${clearFix};
	padding-top: 56px;
`
