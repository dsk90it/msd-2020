import React from 'react'
import { Button } from './button'
import { FormGroup, FormControl } from '../styles/_form_elements'

const ContactForm = () => {
	return (
		<form>
			<FormGroup>
				<FormControl placeholder="Fullname" />
			</FormGroup>

			<FormGroup>
				<FormControl type="email" placeholder="Email Address" />
			</FormGroup>

			<FormGroup>
				<FormControl placeholder="Phone Number" />
			</FormGroup>

			<FormGroup className="fw">
				<FormControl
					as="textarea"
					rows="5"
					cols="60"
					placeholder="Message in brief"
				/>
			</FormGroup>

			<Button className="pull-right">Submit</Button>
		</form>
	)
}

export default ContactForm
