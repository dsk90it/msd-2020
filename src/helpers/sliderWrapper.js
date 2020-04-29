import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

// SLICK SLIDER CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const SliderWrapper = React.forwardRef((props, ref) => {
	const {
		className,
		sliderSettings = {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		},
		sliderElements = [],
		children,
	} = props
	return (
		<Slider className={className} {...sliderSettings} ref={ref}>
			{sliderElements.length
				? sliderElements.map((element, elementIndex) => {
						return <Fragment key={elementIndex}>{element}</Fragment>
				  })
				: children}
		</Slider>
	)
})

SliderWrapper.propTypes = {
	className: PropTypes.string,
	sliderSettings: PropTypes.object,
	sliderElements: PropTypes.arrayOf(PropTypes.element),
	children: PropTypes.object,
}
