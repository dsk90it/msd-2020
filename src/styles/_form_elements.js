import styled, { css } from 'styled-components'
import { theme, clearFix } from './_theme'

export const FormControl = styled.input`
  background: #eaeaea;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  width: 100%;
  min-height: 40px;
  padding: 8px 16px;
  display: block;
  outline: 0 none;
  font-family: ${theme.fontDefault};
  font-size: 13px;
  line-height: 18px;

  /* placeholder */
  ::placeholder, ::-webkit-input-placeholder {
    color: #777777;
  }
  :-ms-input-placeholder {
    color: #777777;
  }

  /* success field */
  ${(props) =>
		props.success &&
		css`
			border-color: green !important;
		`}
  /* error field */
  ${(props) =>
		props.error &&
		css`
			border-color: red !important;
		`}
  /* warning field */
  ${(props) =>
		props.warning &&
		css`
			border-color: orange !important;
		`}
`

export const FormGroup = styled.div`
	${clearFix};
	width: 100%;
	margin-bottom: 16px;
`
