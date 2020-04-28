import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages/home'

const rootElement = document.getElementById('root')
ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	rootElement
)
