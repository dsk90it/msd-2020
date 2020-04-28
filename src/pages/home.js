import React, { Component, Fragment } from 'react'
import GlobalStyle from '../styles/globals'
import { ContentWrapper } from '../styles/theme'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<ContentWrapper>
					<p>Hello World</p>
				</ContentWrapper>
			</Fragment>
		)
	}
}

export default Home
